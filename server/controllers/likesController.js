const Like = require("../models/Likes");
const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createlike = async (req, res) => {
  const { post: postId } = req.body;

  try {
    // find the post
    const dbPost = await Post.findOne({ _id: postId });

    // check if post exists
    if (!dbPost) {
      throw new CustomError.NotFoundError(`No post with id : ${postId}`);
    }

    // Create a new bookmark with references to the user and the post
    const newLike = new Like({
      user: req.user.userId, // Assuming you have the user ID in req.user
      post: dbPost._id,
    });
    await newLike.save();

    // Include post details in the response
    const response = {
      message: "Like created successfully",
      bookmark: {
        _id: newLike._id,
        user: newLike.user,
        post: newLike.post,
        createdAt: newLike.createdAt,
        updatedAt: newLike.updatedAt,
        // Include post details
        postDetails: {
          title: dbPost.title,
          authors: dbPost.authors,
          university: dbPost.university,
          abstract: dbPost.abstract,
          doi: dbPost.doi,
          date: dbPost.date,
        },
      },
    };

    res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    // Handle validation errors or the post not being found
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

// All bookmarks
const getAllLikes = async (req, res) => {
  try {
    // Fetch all bookmarks
    const likes = await Like.find({ user: req.user.userId });

    // Iterate through bookmarks and include post details for each
    const likesWithDetails = likes.map(async (like) => {
      // Fetch post details for each bookmark
      const postDetails = await Post.findOne({ _id: like.post });

      return {
        _id: like._id,
        user: like.user,
        post: like.post,
        createdAt: like.createdAt,
        updatedAt: like.updatedAt,
        postDetails:postDetails
        ? {
          title: postDetails.title,
          authors: postDetails.authors,
          university: postDetails.university,
          abstract: postDetails.abstract,
          doi: postDetails.doi,
          date: postDetails.date,
        }
        : null
      };
    });

    // Wait for all asynchronous operations to complete
    const resolvedLike = await Promise.all(likesWithDetails);

    res.status(StatusCodes.OK).json({ likes: resolvedLike});
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

// Delete bookmark
const deleteLike = async (req, res) => {
  console.log(req.params);
  const { id: likeId } = req.params;

  try {
    // find the post by id
    const like = await Like.findById(likeId);
    //check if post exists
    if (!like) {
      throw new CustomError.NotFoundError(`No post with id: ${likeId}`);
    }
    //check user permissions
    checkPermissions(req.user, like.user);

    // remove the Bookmark
    await like.remove();

    // success message
    res
      .status(StatusCodes.OK)
      .json({ message: "Like deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

module.exports = {
  createlike,
  getAllLikes,
  deleteLike,
};

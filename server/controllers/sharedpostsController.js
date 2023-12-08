const Sharedposts = require("../models/Sharedposts");
const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");


const createsharedpost = async (req, res) => {
  const { title, post: postId } = req.body;

  const dbPost = await Post.findOne({ _id: postId });

  if (!dbPost) {
    throw new CustomError.NotFoundError(`No post with id : ${postId}`);
  }

  const { title: postTitle, authors, university, abstract, doi, date, _id: postID } = dbPost;

  const sharedpost = await Sharedposts.create({
    title,
    user: req.user.userId,
    sharedpostdetails: [
      {
        title: postTitle,
        authors,
        university,
        abstract,
        doi,
        date,
        post: postID,
      },
    ],
  });

  

  res.status(StatusCodes.CREATED).json(sharedpost);
};



const getAllSharedposts = async (req, res) => {
    const sharedposts = await Sharedposts.find({});
  
    res.status(StatusCodes.OK).json({ sharedposts });
  };

// shared posts for the feed
const getSharedpost = async (req, res) => {
  console.log(req.params);
  const { id: sharedpostId } = req.params;

  const sharedpost = await Sharedposts.findOne({ _id: sharedpostId });
  if (!sharedpost) {
    throw new CustomError.NotFoundError(`No post with id: ${sharedpostId}`);
  }
};
// user's shared posts
const getCurrentUserPosts = async (req, res) => {
  const sharedposts = await Sharedposts.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ sharedposts, count: sharedposts.length });
};
// update shared post
const updateSharedpost = async (req, res) => {
  const { id: sharedpostId } = req.params;

  const sharedpost = await Sharedposts.findOne({ _id: sharedpostId });
  if (!sharedpost) {
    throw new CustomError.NotFoundError(`No post with id : ${sharedpostId}`);
  }
};

module.exports = {
  getSharedpost,
  getCurrentUserPosts,
  updateSharedpost,
  createsharedpost,
  getAllSharedposts
};

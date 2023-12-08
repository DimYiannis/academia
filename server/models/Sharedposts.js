const mongoose = require("mongoose");

const SingleSharedpostsSchema = mongoose.Schema({
 
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: true,
  },
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  authors: {
    type: String,
    required: [true, "Please provide authors"],
  },
  university: {
    type: String,
    required: [true, "Please provide uiversity name"],
  },
  abstract: {
    type: String,
  },
  doi: {
    type: Number,
  },
  date: {
    type: String,
  },
});

const SharedpostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      
    },
    sharedpostdetails: [SingleSharedpostsSchema],
  },
  { timestamps: true }
);
SharedpostSchema.index({ post: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("SharedPosts", SharedpostSchema);

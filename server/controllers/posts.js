import Post from "../models/post.js";

export const getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.status(200).json(posts);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const createPost = (request, response) => {
  console.log("create post");
};

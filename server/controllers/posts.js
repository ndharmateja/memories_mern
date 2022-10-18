import Post from "../models/post.js";

export const getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.status(200).json(posts);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const createPost = async (request, response) => {
  try {
    const { body } = request;

    const newPost = new Post(body);
    await newPost.save();

    response.status(201).end();
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

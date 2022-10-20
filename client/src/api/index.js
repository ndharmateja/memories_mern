import axios from "axios";

export const fetchPosts = () => axios.get(`/posts`);
export const createPost = (newPost) => axios.post(`/posts`, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`/posts/${id}`, updatedPost);

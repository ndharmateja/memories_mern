import axios from "axios";

export const fetchPosts = () => axios.get(`/posts`);
export const createPost = (newPost) => axios.post(`/posts`, newPost);
export const updatePost = (updatedPost) =>
  axios.patch(`/posts/${updatedPost.id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

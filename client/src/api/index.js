import axios from "axios";

const baseUrl = "https://memories-mern-jsm-project.herokuapp.com";

export const fetchPosts = () => axios.get(`${baseUrl}/posts`);
export const createPost = (newPost) => axios.post(`${baseUrl}/posts`, newPost);
export const updatePost = (updatedPost) =>
  axios.patch(`${baseUrl}/posts/${updatedPost.id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${baseUrl}/posts/${id}`);

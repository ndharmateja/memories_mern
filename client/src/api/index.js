import axios from "axios";

const url = "http://localhost:3003";

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = () => axios.post(`${url}/posts`);

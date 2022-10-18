import axios from "axios";

const url = "http://localhost:3003";

export const fetchPosts = () => axios.get(new URL(url, `${url}/posts`));

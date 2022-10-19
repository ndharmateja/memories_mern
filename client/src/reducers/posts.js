import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts(posts, action) {
      return action.payload;
    },
    appendPost(posts, action) {
      return [...posts, action.payload];
    },
  },
});

const { setPosts, appendPost } = postSlice.actions;

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch(setPosts(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch(appendPost(post));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default postSlice.reducer;

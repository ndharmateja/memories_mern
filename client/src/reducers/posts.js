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

export const createNewPost = () => {
  return async (dispatch) => {
    const { data } = await api.createPost();
    dispatch(appendPost(data));
  };
};

export default postSlice.reducer;

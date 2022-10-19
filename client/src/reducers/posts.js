import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts(state, action) {
      return action.payload;
    },
    appendPost(state, action) {
      return [...state, action.payload];
    },
  },
});

const { setPosts, appendPost } = postSlice.actions;

export const fetchPosts = () => {
  console.log("here");
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

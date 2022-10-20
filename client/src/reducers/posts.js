import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    currentId: null,
    data: [],
  },
  reducers: {
    setPosts(state, action) {
      return { ...state, data: action.payload };
    },
    appendPost(state, action) {
      return { ...state, posts: [...state.posts, action.payload] };
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

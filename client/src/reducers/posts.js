import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    fetchPosts(state, action) {
      return state;
    },
    createPost(state, action) {
      return state;
    },
  },
});

export const { createPost, fetchPosts } = postSlice.actions;
export default postSlice.reducer;

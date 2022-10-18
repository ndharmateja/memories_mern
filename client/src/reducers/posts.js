import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    fetchAllPosts(state, action) {
      return state;
    },
    createPost(state, action) {
      return state;
    },
  },
});

export const { createPost, fetchAllPosts } = postSlice.actions;
export default postSlice.reducer;

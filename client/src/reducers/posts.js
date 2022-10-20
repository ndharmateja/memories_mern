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
      return { ...state, data: [...state.data, action.payload] };
    },
    setCurrentId(state, action) {
      return { ...state, currentId: action.payload };
    },
    replacePost(state, action) {
      const updatedPost = action.payload;
      return {
        ...state,
        data: state.data.map((post) =>
          updatedPost.id === post.id ? updatedPost : post
        ),
      };
    },
    removePost(state, action) {
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.payload),
      };
    },
  },
});

const { setPosts, appendPost, replacePost, removePost } = postSlice.actions;
export const { setCurrentId } = postSlice.actions;

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
      dispatch(appendPost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePost = (post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(post);
      dispatch(replacePost(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default postSlice.reducer;

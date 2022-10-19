import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/posts";
import App from "./App";
import "./index.css";

const store = configureStore(
  {
    reducer: { posts: postReducer },
  },
  compose(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

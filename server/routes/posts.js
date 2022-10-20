import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router({ mergeParams: true });

router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost);

export default router;

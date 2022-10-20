import express from "express";
import { createPost, getPosts, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost);

export default router;

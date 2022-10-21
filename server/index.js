import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./routes/posts.js";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routers
app.use("/posts", postsRouter);
app.get("/", (request, response) => {
  response.send("Welcome to memories API");
});
app.use((request, response) => {
  response.send("No such route found.");
});

const port = process.env.PORT || 3003;
const mongoUri = process.env.MONGODB_URI;

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on: ${port}`)))
  .catch((error) => console.log(error.message));

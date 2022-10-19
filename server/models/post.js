import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

postSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = document._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;

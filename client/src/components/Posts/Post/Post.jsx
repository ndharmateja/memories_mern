import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment/moment";
import { setCurrentId, updatePost, deletePost } from "../../../reducers/posts";
import { useDispatch } from "react-redux";

const Post = ({ post }) => {
  const {
    title,
    tags,
    createdAt,
    selectedFile,
    message,
    creator,
    likeCount,
    id,
  } = post;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleIncreaseLikes = () => {
    dispatch(updatePost({ ...post, likeCount: post.likeCount + 1 }));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deletePost(id));
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => dispatch(setCurrentId(id))}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag}`).join(" ")}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <Typography className={classes.message} variant="h6" gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleIncreaseLikes}>
          <ThumbUpAltIcon fontSize="small" />
          {`Like ${likeCount}`}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

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
import {
  appendPost,
  setCurrentId,
  setPosts,
  updatePost,
} from "../../../reducers/posts";
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

  const increaseLikes = () => {
    dispatch(updatePost({ ...post, likeCount: post.likeCount + 1 }));
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
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={increaseLikes}>
          <ThumbUpAltIcon fontSize="small" />
          {`Like ${likeCount}`}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

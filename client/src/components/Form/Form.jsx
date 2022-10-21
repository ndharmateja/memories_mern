import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, setCurrentId, updatePost } from "../../reducers/posts";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getInitialData = () => ({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const currentPost = useSelector(({ posts: { currentId, data } }) => {
    return currentId ? data.find((post) => post.id === currentId) : null;
  });
  const [postData, setPostData] = useState(getInitialData());

  useEffect(() => {
    if (currentPost) {
      setPostData({ ...currentPost, tags: currentPost.tags.join(",") });
    } else {
      setPostData(getInitialData());
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      ...postData,
      tags: postData.tags.split(" ").join("").split(","),
    };

    if (currentPost) {
      dispatch(updatePost(newPostData));
    } else {
      dispatch(createPost(newPostData));
    }

    clear();
  };

  const clear = () => {
    dispatch(setCurrentId(null));
    setPostData(getInitialData());
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{`${
          currentPost ? "Updating" : "Creating"
        } a Memory`}</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, creator: value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, title: value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, message: value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, tags: value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            value={postData.selectedFile}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          color="primary"
          size="large"
          fullWidth
          type="submit"
          variant="contained"
        >
          {currentPost ? "Update" : "Create"}
        </Button>
        <Button
          className={classes.buttonSubmit}
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
          variant="contained"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

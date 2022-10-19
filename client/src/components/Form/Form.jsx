import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../reducers/posts";

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

  const [postData, setPostData] = useState(getInitialData());

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({
        ...postData,
        tags: postData.tags.split(" ").join("").split(","),
      })
    );
    clear();
  };

  const clear = (e) => {
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
        <Typography variant="h6">Creating a Memory</Typography>
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
          Create
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

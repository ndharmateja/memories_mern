import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./reducers/posts";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;

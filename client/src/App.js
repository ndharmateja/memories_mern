import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import React from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
      </AppBar>
    </Container>
  );
};

export default App;

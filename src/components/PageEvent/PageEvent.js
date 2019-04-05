import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEvent from "./ViewEvent";
import CreateEvent from "./CreateEvent";
import Grid from "@material-ui/core/Grid";

class PageEvent extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <CreateEvent />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6}>
            <ViewEvent />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageEvent);

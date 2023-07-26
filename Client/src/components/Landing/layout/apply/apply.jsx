import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import "./apply.css";

function Apply() {
  let history = useHistory();
  return (
    <section className="section section-book green  white-text center">
      <div className="container">
        <Grid container justify="center">
          <Button
            className="btn-apply"
            color="inherit"
            onClick={() => {
              history.push("/search");
              window.location.reload(false);
            }}
          >
            <span className="search-textt">
              <i className="material-icons left">send</i> Apply Now
            </span>
          </Button>
        </Grid>
      </div>
    </section>
  );
}

export default Apply;

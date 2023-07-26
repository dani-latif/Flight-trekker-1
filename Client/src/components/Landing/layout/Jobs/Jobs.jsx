import React, { Component } from "react";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import "./jobs.css";

function Jobs() {
  const [webJobs, setwebJobs] = useState([].slice(0, 20));

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs?limit=1000")
      .then((res) => {
        console.log("Web data has been retrived");
        setwebJobs(res.data.jobs);
        console.log(webJobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const history = useHistory();
  const HandleApply = (url) => {
    console.log(url);
  };
  const HandleApplyy = (url) => {};

  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(false);
  const jobPerPage = 21;
  const pageVisited = pageNumber * jobPerPage;

  const displayJobss = (
    <Grid direction="rows" container spacing={0}>
      {webJobs.slice(pageVisited, pageVisited + jobPerPage).map((jobs) => {
        return (
          <Grid item xs={12} sm={4}>
            <Card className="card-jobs">
              <CardMedia
                component="img"
                className="image-jobs"
                image={jobs.company_logo}
                alt="Company logo "
              />
              <CardContent>
                <Typography
                  onClick={HandleApplyy}
                  maxLength={20}
                  gutterBottom
                  component="div"
                >
                  <a className="title-jobs" href={jobs.url}>
                    {jobs.title} | {jobs.candidate_required_location}{" "}
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  className="title-jobss"
                  component="div"
                >
                  {jobs.company_name}
                </Typography>
                <hr />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <section id="adventure" className="section  ">
      <div className="container">
        <div className="row">
          <h4 className="title-text Job-title">
            <span className="green-text darken-1 title-text">Featured</span>{" "}
            Jobs
          </h4>
        </div>
      </div>

      {displayJobss}

      <div>
        <p className="see-more">
          <a href="/remotivejobs">See more</a>
        </p>
      </div>
    </section>
  );
}

export default Jobs;

import React, { Component } from "react";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ReactPaginate from "react-paginate";
import { Link, useHistory } from "react-router-dom";
import "./remotive.css";
function Remotivejobs() {
  const [webJobs, setwebJobs] = useState([].slice(0, 20));

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs?limit=2000")
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
          <Container
            className=" contentBox"
            style={{ backgroundColor: "white" }}
            maxWidth="md"
          >
            <Typography
              component="div"
              style={{
                backgroundColor: "white",
              }}
            >
              <div>
                <div className="jobs-info">
                  <table>
                    <tbody>
                      <tr>
                        <td className="row">
                          <img
                            className="img_thumbnaill"
                            src={jobs.company_logo}
                            alt="Job Ad img"
                          ></img>
                        </td>

                        <td className="prodes">
                          <span
                            className="h3-header"
                            id="short"
                            onClick={HandleApplyy}
                          >
                            {jobs.title}
                          </span>

                          <p className="p-text">
                            <strong>Job Type: </strong>
                            {jobs.job_type}
                          </p>
                          <p className="p-text">
                            <strong>Location: </strong>
                            {jobs.candidate_required_location}
                          </p>
                          <p className="p-text" hidden>
                            <strong>Tags: </strong>
                            {jobs.tags}
                          </p>
                        </td>

                        <td>
                          <div className="bp">
                            <div className="pm-9">
                              <Button
                                style={{
                                  backgroundColor: "#4CAF50",
                                  color: "white",
                                }}
                                className=" btn-info"
                                onClick={HandleApply}
                              >
                                <Link
                                  className="remote-search-button"
                                  to={{ pathname: jobs.url }}
                                  target="_blank"
                                >
                                  Apply Now
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Typography>
          </Container>
        );
      })}
    </Grid>
  );
  const pageCount = Math.ceil(webJobs.length / jobPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Container sx={{ mt: 4, mb: 4 }} maxWidth="md">
        <Grid item xs={16} md={8} lg={12}>
          <h4 className="Search-Remote">Search Available Jobs</h4>

          <br />
        </Grid>
        {displayJobss}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns text-right"}
          previousLinkClassName={"previousBttns"}
          nextLinkClassName={"nextBttns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </Container>
    </div>
  );
}

export default Remotivejobs;

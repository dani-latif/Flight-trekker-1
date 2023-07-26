import Typography from "@mui/material/Typography";
import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/Navbar";
import { Container } from "@mui/material";
import "./search.css";
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { SearchResults } from "../../actions/authActions";
import Grid from "@mui/material/Grid";
import { useRef } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { display } from "@mui/system";

function SearchJob() {
  const [searchTermss, setsearchTermss] = useState("");
  const [searchTerms, setsearchTerms] = useState("");
  const [Jobs, setJobs] = useState([].slice(0, 20));
  const [webJobs, setwebJobs] = useState([].slice(0, 20));

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/users/searchresults")
      .then((res) => {
        setJobs(res.data);
        console.log("data has been retrived");
      })
      .catch((err) => {
        console.log(err);
      });
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
  const HandleApply = (url) => {};
  const HandleApplyy = (url) => {};
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(false);
  const jobPerPage = 1000;
  const pageVisited = pageNumber * jobPerPage;

  const [searchParam] = useState(["title", "salary"]);

  const displayJobss = webJobs
    .slice(pageVisited, pageVisited + jobPerPage)
    .filter((jobs) => {
      if (searchTerms === "") {
        return jobs;
      } else if (jobs.title.toLowerCase().includes(searchTerms.toLowerCase())) {
        return jobs;
      } else if (
        jobs.salary.toLowerCase().includes(searchTerms.toLowerCase())
      ) {
        return jobs;
      } else if (
        jobs.candidate_required_location
          .toLowerCase()
          .includes(searchTerms.toLowerCase())
      ) {
        return jobs;
      }
    })
    .map((jobs) => {
      return (
        <div className="jobs">
          {show ? (
            <Container
              className=" contentBox"
              style={{ backgroundColor: "white" }}
              maxWidth="lg"
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
                              className="img_thumbnail"
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
                              <strong>Salary: </strong>N/A
                            </p>
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
          ) : null}
        </div>
      );
    });

  if (document.getElementById("autocomplete-input" === null || "")) {
    console.log("yes");
  }
  const pageCount = Math.ceil(webJobs.length / jobPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <section
        id="search"
        className="section section-search   white-text center scrollspy"
      >
        <Container maxWidth="md">
          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <Grid container item>
                  <Grid xs={6}>
                    <input
                      className="white grey-text "
                      placeholder="Search Jobs by Name...."
                      type="text"
                      id="autocomplete-input"
                      onChange={(event) => {
                        setsearchTerms(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid xs={4}>
                    <input
                      className="white grey-text "
                      placeholder="Search by Location...."
                      type="text"
                      id="autocomplete-input"
                      onChange={(event) => {
                        setsearchTerms(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid xs={2}>
                    <Button
                      className="button-search"
                      style={{
                        color: "white",
                        marginTop: "16px",
                        marginLeft: "10px",
                        marginBottom: "8px",
                        backgroundColor: "#4CAF50",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
        <Button className="center">
          <Link to="/acquiresearch" className="btn button-search green-bg">
            Search AcquireJobs
          </Link>
        </Button>
      </section>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={16} md={8} lg={12}>
          <h4 className="Search-Remote">Search Available Jobs</h4>

          <br />
        </Grid>
        {show ? (
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
        ) : null}
        {displayJobss}

        <div className=" align-items-center justify-content-center d-flex mt-5  ">
          {show ? (
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
          ) : null}
        </div>
      </Container>
    </div>
  );
}

export default SearchJob;

import Typography from "@mui/material/Typography";
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import ReactPaginate from "react-paginate";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './acquiresearch.css';
import axios from "axios";
import {useSelector } from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AcquireSearch() {
  const [searchTerms, setsearchTerms] = useState("");
  const [show, setShow] = useState(false);
  const [Jobs, setJobs] = useState([].slice(0, 20));

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
  }, []);


  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const auth = useSelector(state => state.auth);

  const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 100;
  const pageVisited = pageNumber * jobPerPage;

  function applyhandler(name) {
    const passName = name;
    console.log(passName);
  //   const Id = {
  //     id: passId
  // }  
  //   window.location.reload();
  handleClose()
  }
  const displayJobs = Jobs.slice(pageVisited, pageVisited + jobPerPage)
    .filter((job) => {
      if (searchTerms === "") {
        return job;
      } else if (
        job.jobtitle.toLowerCase().includes(searchTerms.toLowerCase())
      ) {
        return job;
      } else if (
        job.jobtype.toLowerCase().includes(searchTerms.toLowerCase())
      ) {
        return job;
      } else if (job.salary.toLowerCase().includes(searchTerms.toLowerCase())) {
        return job;
      }
    })
    .map((job) => {
      return (
        <div className="jobs">
          {show ? (
            <Container
              className="contentBox"
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
                              src={job.img}
                              alt="Job Ad img"
                            ></img>
                          </td>

                          <td className="prodes">
                            <span className="h3-header" id="short">
                              {job.jobtitle}
                            </span>
                            <p className="p-text">
                              <strong>Skills: </strong>
                              {job.skillsrequired}
                            </p>
                            <p className="p-text">
                              <strong>Salary: </strong>
                              {job.salary}
                            </p>
                          </td>

                          <td>
                            <div className="bp">
                              <div className="pm-9">
                              <Button variant="contained" className="color-apply" style={{backgroundColor : '#4CAF50'}} onClick={handleClickOpen}> Apply Now</Button>
                  <Dialog
                      open={openDialog}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Confirm Job Apply?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Do you really want to Apply to this job?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button color='warning' onClick={handleClose}>No</Button>
                        <Button color='success' onClick={(id) => {applyhandler(auth.user.name)}} autoFocus>
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog>
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

  const pageCount = Math.ceil(Jobs.length / jobPerPage);

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
                <Grid  xs={6} >
                <input
                  className="white grey-text autocomplete"
                  placeholder="Search Jobs by Name...."
                  type="text"
                  id="autocomplete-input"
                  onChange={(event) => {
                    setsearchTerms(event.target.value);
                  }}
                /></Grid>
                <Grid  xs={4} >
                <input
                  className="white grey-text autocomplete"
                  placeholder="Search by Salary...."
                  type="text"
                  id="autocomplete-input"
                  onChange={(event) => {
                    setsearchTerms(event.target.value);
                  }}
                /></Grid>
                <Grid xs={2}>
          
                <Button
                  className="button-search"
                  style={{
                    color: "white",
                    marginTop:'16px',
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
        <Link to="/search" className="btn button-search green-bg">
          Search Remote Jobs
        </Link>
		</Button>
      </section>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={16} md={8} lg={12}>
          <h4 className="Search-Acquire">Search Acquire Jobs</h4>

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
        {displayJobs}

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
export default AcquireSearch;

import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import {
  Button,
  Typography,
  CssBaseline,
  Grid,
  Container,
  Paper,
  TextField,
  Box,
} from "@material-ui/core";
import { SaveOutlined } from "@material-ui/icons";
import { makeStyles, styled } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "5px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2, 6),
    marginTop: "40px",
  },
  avatar: {
    height: "250px",
    width: "250px",
    display: "flex",
  },
  grids: {
    padding: theme.spacing(3, 2, 6),
    marginBottom: "40px",
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));
export function EditJob({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const [JobData, setJobData] = useState({});
  useEffect(() => {
    const fetchedData = async () => {
      // "https://cv-generator-mern.herokuapp.com/api"
      await axios
        .get(`http://localhost:3001/api/jobad/edit/${match.params.id}`)
        .then((res) => {
          if (res.data.success) {
            setJobData(res.data.jobData);
            console.log(res.data.jobData);
          }
        });
    };
    fetchedData();
  }, [match.params.id]);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const HandleSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    const newJobad = {
      id: JobData._id,
      jobtitle: document.getElementById("jobtitle").value,
      jobdescription: document.getElementById("description").value,
      skills: document.getElementById("skillsrequired").value,
      experiencerequired: document.getElementById("experience").value,
      salary: document.getElementById("salary").value,
      minsalary: document.getElementById("minsalary").value,
      maxsalary: document.getElementById("maxsalary").value,
      jobdesignation: document.getElementById("jobdesignation").value,
      country: document.getElementById("country").value,
      jobtype: document.getElementById("jobtype").value,
      city: document.getElementById("city").value,
      jobshift: document.getElementById("jobshift").value,
      industry: document.getElementById("industry").value,
      functionalarea: document.getElementById("functionalarea").value,
      careerlevel: document.getElementById("careerlevel").value,
      genderspecification: document.getElementById("specificgender").value,
      totalpositions: document.getElementById("totalpositions").value,
      workinghours: document.getElementById("workinghours").value,
      applybydate: document.getElementById("applybydate").value,
      qualificationlevel: document.getElementById("qualificationlevel").value,
      majorspecialization: document.getElementById("majorspecialization").value,
      degreetitle: document.getElementById("degreetitle").value,
    };
    axios
      .post("http://localhost:3001/api/users/jobad/edit", newJobad)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/companydashboard");
  };

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container className={classes.paper} maxWidth="md">
            <Box
              component="form"
              noValidate
              onSubmit={HandleSubmit}
              sx={{ mt: 1 }}
            >
              <Typography color="textPrimary">
                <h3 className="color-head">Job Advertisement</h3>
              </Typography>

              <Grid item xs={12} md={8} lg={12}>
                <Paper
                  className={classes.grids}
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Typography
                    style={{ marginBottom: "30px" }}
                    color="textSecondary"
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Job Title </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            id="jobtitle"
                            defaultValue={JobData.jobtitle}
                            variant="outlined"
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            Job Designation
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            id="jobdesignation"
                            variant="outlined"
                            multiline
                            defaultValue={JobData.jobdesignation}
                            minRows={0}
                            maxRows={1}
                            size="small"
                          ></TextField>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={8} lg={12}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *Job Description
                          </h6>
                        </Typography>
                        <Typography>
                          <Editor
                            id="description"
                            style={{ border: "outline" }}
                            toolbarClassName="toolbarClassName"
                          />
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          minRows={7}
                          maxRows={10}
                          size="small"
                          defaultValue={JobData.jobdescription}
                          id="description"
                          variant="outlined"
                          label=""
                        ></TextField>
                        <Typography>
                          <p style={{ fontStyle: "italic", color: "green" }}>
                            * Phone numbers and email address are not allowed in
                            this field. Any contact information will be omitted.
                          </p>
                          <p style={{ color: "blue", letterSpacing: -1 }}>
                            {" "}
                            Select the required skills for your job, Click on
                            the skill to mark as primary skill. Jobee.pk will
                            provide you best Jobee Matches based on primary
                            skills.
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Add Skills</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            style={{ maxWidth: "400px" }}
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={JobData.skills}
                            size="small"
                            id="skillsrequired"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}></Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Country</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="country"
                          >
                            <option value="" disabled selected>
                              {JobData.country}
                            </option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Germany">Germany</option>
                            <option value="America">America</option>
                            <option value="England">England</option>
                            <option value="Australia">Australia</option>
                            <option value="Africa">Africa</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Job Type</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="jobtype"
                          >
                            <option value="" disabled selected>
                              {JobData.jobtype}
                            </option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Project-based">Project-based</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*City </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            defaultValue={JobData.city}
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="city"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Job Shift</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="jobshift"
                          >
                            <option value="" disabled selected>
                              {JobData.jobshift}
                            </option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                            <option value="Other">Other</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            Functional Area
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            defaultValue={JobData.functionalarea}
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="functionalarea"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Industry</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="industry"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.industry}
                            </option>
                            <option value="Construction">Construction</option>
                            <option value="Law">Law</option>
                            <option value="Research">Research</option>
                            <option value="Logo Designing">
                              Logo Designing
                            </option>
                            <option value="Human Resource">
                              Human Resource
                            </option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Career Level</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="careerlevel"
                          >
                            <option value="" disabled selected>
                              {JobData.careerlevel}
                            </option>
                            <option value="Fresh">Fresh</option>
                            <option value="Intermidiate">Intermidiate</option>
                            <option value="Professional">Professional</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Experience</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="experience"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.experiencerequired}
                            </option>
                            <option value="0">Fresh</option>
                            <option value="1">1 Years</option>
                            <option value="2">2 Years</option>
                            <option value="3">3 Years</option>
                            <option value="4">4 Years</option>
                            <option value="5">5 Years</option>
                            <option value="6">6 Years</option>
                            <option value="7">7 Years</option>
                            <option value="8">8 Years</option>
                            <option value="9">9 Years</option>
                            <option value="10">10 Years</option>
                            <option value="11">11 Years</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Salary</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="salary"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.salary}
                            </option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Project Wise">Project Wise</option>
                            <option value="Hourly">Hourly</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Minimum Salary</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="minsalary"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.minsalary}
                            </option>
                            <option value="5k">5k</option>
                            <option value="10k">10k</option>
                            <option value="15k">15k</option>
                            <option value="20k"> 20k</option>
                            <option value="25k">25k</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Maximum Salary</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="maxsalary"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.maxsalary}
                            </option>
                            <option value="10k">10k</option>
                            <option value="20k">20k</option>
                            <option value="30k">30k</option>
                            <option value="40k"> 40k</option>
                            <option value="50k">50k</option>
                            <option value="60k">60k</option>
                            <option value="70k">70k</option>
                            <option value="80k">80k</option>
                            <option value="90k">90k</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Gender </h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="specificgender"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.genderspecification}
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *Total Positions{" "}
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            defaultValue={JobData.totalpositions}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="totalpositions"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *Working Hours{" "}
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            defaultValue={JobData.workinghours}
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="workinghours"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Apply By</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            defaultValue={JobData.applybydate}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="applybydate"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *Qualification Level
                          </h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            id="qualificationlevel"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              {JobData.qualificationlevel}
                            </option>
                            <option value="Matic">Matric</option>
                            <option value="Intermidiate">Intermidiate</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PHD">PHD</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            Major / Specialization
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            defaultValue={JobData.majorspecialization}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="majorspecialization"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={4}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Degree Title</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            defaultValue={JobData.degreetitle}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="degreetitle"
                            variant="outlined"
                          ></TextField>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Typography>
                </Paper>

                <Grid container spacing={3}></Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="flex-end">
                <Grid item>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#4CAF50",
                      marginRight: "20px",
                    }}
                    type="submit"
                    variant="contained"
                  >
                    <SaveOutlined /> <h6>Save Job Ad</h6>
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      textAlign: "center",
                      marginRight: "20px",
                    }}
                    variant="contained"
                  >
                    <h6>No, Cancel</h6>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
}

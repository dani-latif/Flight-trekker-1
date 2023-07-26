import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompanyProfileInfo,
  companyProfileInfo,
} from "../../../actions/authActions";

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
import { EditOutlined, SaveOutlined } from "@material-ui/icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { makeStyles, styled } from "@material-ui/core/styles";

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
export function EditCompanyProfile() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = { email: auth.companyuser.email };
  useEffect(() => {
    dispatch(companyProfileInfo(userData));
  }, []); //notice the empty array here
  const profile = useSelector((state) => state.companyprofile);
  console.log(profile);
  const [coverImage, setCoverImage] = useState("");

  function coverImageHandler(event) {
    if (event.target.files.length !== 0) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function editHandler() {
    document.getElementById("description").disabled = false;
    document.getElementById("phoneno").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("website").disabled = false;
    document.getElementById("companytype").disabled = false;
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const newProfile = {
      
      companyemployername: auth.companyuser.companyemployername,
      email: auth.companyuser.email,
      aboutcompany: document.getElementById("description").value,
      phoneno: "875",
      address: "asdas",
      companytype: document.getElementById("companytype").value,
      companyachievements: document.getElementById("companyachievements").value,
      country: document.getElementById("country").value,
      foundedinyear: document.getElementById("foundedinyear").value,
      functionalarea: document.getElementById("functionalarea").value,
      industry: document.getElementById("industry").value,
      workinghours: document.getElementById("workinghours").value,
      noofemployees: document.getElementById("noofemployees").value,
      city: document.getElementById("city").value,
    };
    dispatch(updateCompanyProfileInfo(newProfile));
    console.log(newProfile);
    window.location.reload();
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const d = document.getElementById("aboutcompany");
  console.log(d);
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
                <h3 className="color-head">Company / Employer Profile</h3>
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
                          <h6 style={{ fontWeight: "bold" }}>*Company Name</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            id="companyname"
                            variant="outlined"
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={profile.profile.companyemployername}
                            size="small"
                            
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Employer Name</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            id="employername"
                            variant="outlined"
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            defaultValue={profile.profile.companyemployername}
                          ></TextField>
                        </Typography>
                      </Grid>

                      <Grid item xs={12} md={8} lg={12}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *About Your Company
                          </h6>
                        </Typography>
                        <Typography>
                          <Editor
                            style={{ border: "outline" }}
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                          />
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          minRows={7}
                          maxRows={10}
                          defaultValue={profile.profile.aboutcompany}
                          size="small"
                          id="description"
                          variant="outlined"
                          label=""
                        ></TextField>
                        <Typography>
                          <p style={{ fontStyle: "italic", color: "green" }}>
                            * Tell us details about yourself / Company. In which
                            area your company works.{" "}
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            Add Company Acheivements
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            style={{ maxWidth: "400px" }}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            defaultValue={profile.profile.companyachievements}
                            id="companyachievements"
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
                            defaultValue={profile.profile.country}
                            id="country"
                          >
                            <option value="" disabled selected>
                              Where is your Company located
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
                          <h6 style={{ fontWeight: "bold" }}>Company Type</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            defaultValue={profile.profile.companytype}
                            
                            id="companytype"
                          >
                            <option value="" disabled selected>
                              Select your Company Type
                            </option>
                            <option value="Private">Private</option>
                            <option value="Government">Government</option>
                            <option value="Other">Other</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*City </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={profile.profile.city}
                            size="small"
                            id="city"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            Founded in (Year)
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="foundedinyear"
                            variant="outlined"
                            defaultValue={profile.profile.foundedinyear}
                          ></TextField>
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
                            defaultValue={profile.profile.functionalarea}
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
                            defaultValue={profile.profile.industry}
                            id="industry"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              Where do you want to work...
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
                          <h6 style={{ fontWeight: "bold" }}>*Working Hours</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            defaultValue={profile.profile.workinghours}
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
                          <h6 style={{ fontWeight: "bold" }}>
                            No of Employees
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            defaultValue={profile.profile.noofemployees}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="noofemployees"
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
                    <SaveOutlined /> <h6>Save Profile</h6>
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

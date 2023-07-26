import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileInfo, profileInfo } from "../../../actions/authActions";
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
  Avatar,
  IconButton,
  TextField,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { EditOutlined, SaveOutlined } from "@material-ui/icons";
import "./edit.css";
import { makeStyles, styled } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";


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
const Input = styled("input")({
  display: "none",
});
export function EditJobseekerProfile() {
  const classes = useStyles();
  const history = useHistory()
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = { email: auth.user.email };
  useEffect(() => {
    dispatch(profileInfo(userData));
  }, []); //notice the empty array here
  const profile = useSelector((state) => state.profile);
  console.log(profile.profile);
  const [coverImage, setCoverImage] = useState();

  const coverImageHandler = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setCoverImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function editHandler() {
    document.getElementById("description").disabled = false;
    document.getElementById("phoneno").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("program").disabled = false;
    document.getElementById("department").disabled = false;
    document.getElementById("institute").disabled = false;
    document.getElementById("skills").disabled = false;
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const newProfile = {
      email: auth.user.email,
      avatar: "as",
      firstname: document.getElementById("firstname").value,

      aboutyourself: document.getElementById("description").value,

      lastname: document.getElementById("lastname").value,

      placeofbirth: document.getElementById("placeofbirth").value,
      dateofbirth: document.getElementById("dateofbirth").value,
      fieldofinterest: document.getElementById("fieldofinterest").value,
      hobbies: document.getElementById("hobbies").value,
      industry: document.getElementById("industry").value,
      languages: document.getElementById("languages").value,
      qualificationlevel: document.getElementById("qualificationlevel").value,
      majorspecialization: document.getElementById("majorspecialization").value,
      degreetitle: document.getElementById("degreetitle").value,
      address: document.getElementById("address").value,
      phoneno: document.getElementById("phoneno").value,
      website: "asd",
      lastname: document.getElementById("lastname").value,
      skills: document.getElementById("skills").value,
      workinghours: document.getElementById("workinghours").value,
      personalachievements: document.getElementById("personalachievements").value
    };
    dispatch(updateProfileInfo(newProfile));
    console.log(newProfile);
    history.push("/jobseekerdashboard")
    
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return profile.loading ? (
    <CircularProgress />
  ) : (
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
                <h3 className="color-head">Job Seeker Profile</h3>
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
                    {/* <label htmlFor="icon-button-file">
                            <Input onChange={(e) => {coverImageHandler(e)}} accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <Avatar id="avatar" style={{borderRadius: "10px solid red"}} src={profile.profile.avatar} variant="rounded" className={classes.avatar} > Click to Upload Image </Avatar>
                            </IconButton>
                          </label> */}

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*First Name</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            id="firstname"
                            fullWidth
                            variant="outlined"
                            multiline
                            defaultValue={profile.profile.firstname}
                            minRows={0}
                            maxRows={1}
                            size="small"
                            
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Last Name</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            id="lastname"
                            fullWidth
                            variant="outlined"
                            multiline
                            defaultValue={profile.profile.lastname}
                            minRows={0}
                            maxRows={1}
                            size="small"
                            
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Phone Number</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            id="phoneno"
                            fullWidth
                            variant="outlined"
                            multiline
                            defaultValue={profile.profile.phoneno}
                            minRows={0}
                            maxRows={1}
                            size="small"
                            
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Address</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            id="address"
                            fullWidth
                            variant="outlined"
                            multiline
                            defaultValue={profile.profile.address}
                            minRows={0}
                            maxRows={1}
                            size="small"
                           
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={12}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>
                            *About Yourself
                          </h6>
                        </Typography>
                        <Typography>
                          <Editor
                            style={{ border: "outline" }}
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                          />
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            multiline
                            minRows={7}
                            maxRows={10}
                            defaultValue={profile.profile.aboutyourself}
                            size="small"
                            id="description"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                        <Typography>
                          <p style={{ fontStyle: "italic", color: "green" }}>
                            * Tell us details about yourself. In which field do
                            you want to work.{" "}
                          </p>
                          <p style={{ letterSpacing: -1, color: "blue" }}>
                            Select the required skills for your job, Click on
                            the skill to mark as primary skill. Jobee.pk will
                            provide you best Jobee Matches based on primary
                            skills.{" "}
                          </p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Skills</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            multiline
                            minRows={0}
                            defaultValue={profile.profile.skills}
                            maxRows={1}
                            size="small"
                            id="skills"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}></Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Place of Birth</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            defaultValue={profile.profile.placeofbirth}
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            
                            size="small"
                            id="placeofbirth"
                            variant="outlined"
                            label=""
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>*Date of Birth</h6>
                        </Typography>
                        <Typography>
                          <input
                            type="date"
                            className="date-slector"
                            defaultValue={profile.profile.dateofbirth}
                            id="dateofbirth"
                          ></input>
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
                            defaultValue={profile.profile.jobdesignation}
                            id="gender"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              Choose your Gender
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
                            Field Of Interest{" "}
                          </h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            defaultValue={profile.profile.fieldofinterest}
                            id="fieldofinterest"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              What is your Field...
                            </option>
                            <option value="Software Development">
                              Software Development
                            </option>
                            <option value="Web Developement">
                              Web Development
                            </option>
                            <option value="Data Anlaysis">Data Anlaysis</option>
                          </select>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Hobbies</h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={profile.profile.hobbies}
                            size="small"
                            id="hobbies"
                            variant="outlined"
                            
                          ></TextField>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={8} lg={6}>
                        <Typography>
                          <h6 style={{ fontWeight: "bold" }}>Language</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            defaultValue={profile.profile.languages}
                            id="languages"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              Which Professional Language you Prefer...
                            </option>
                            <option value="Urdu">Urdu</option>
                            <option value="English">English</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Sindhi">Sindhi</option>
                            <option value="Dutch">Dutch</option>
                          </select>
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
                            <option value="Web Development">
                              Web Development
                            </option>
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
                          <h6 style={{ fontWeight: "bold" }}>*Experience</h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            defaultValue={profile.profile.jobdesignation}
                            id="experience"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              Work Experience...
                            </option>
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
                          <h6 style={{ fontWeight: "bold" }}>
                            *Qualification Level
                          </h6>
                        </Typography>
                        <Typography>
                          <select
                            className="date-slector"
                            required
                            defaultValue={profile.profile.qualificationlevel}
                            id="qualificationlevel"
                            name="gender"
                          >
                            <option value="" disabled selected>
                              Education Level...
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
                            
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={profile.profile.majorspecialization}
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
                            defaultValue={profile.profile.degreetitle}
                            multiline
                            minRows={0}
                            maxRows={1}
                            size="small"
                            id="degreetitle"
                            variant="outlined"
                          ></TextField>
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
                            Add Personal Acheivements
                          </h6>
                        </Typography>
                        <Typography>
                          <TextField
                            fullWidth
                            
                            multiline
                            minRows={0}
                            maxRows={1}
                            defaultValue={profile.profile.addpersonalachievements}
                            size="small"
                            id="personalachievements"
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

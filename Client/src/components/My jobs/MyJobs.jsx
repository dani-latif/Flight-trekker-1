import React, {useEffect, useState} from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Typography, CssBaseline, Container, Paper} from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon:{
    marginRight: "5px"
  },
  paper:{
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2, 6),
    marginTop: "40px"
  },
  avatar:{
    height: "250px",
    width: "250px",
    display: "flex"
  },
  grids:{
    padding: theme.spacing(3, 2, 6),
    marginBottom: "40px"
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
}));


export function MyJobs() {
    const classes = useStyles();
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const email = {
        email: auth.companyuser.email
    }
    function edithandler(id) {
        const passId = id;
        console.log(passId);
      history.push(`/myjobs/applicants/${passId}`);
      }
    const [Jobs, setJobs] = useState([].slice(0,20))

    useEffect(() =>{
        axios.post('http://localhost:3001/api/users/viewpostedjobs', email)
    .then((res) => {
     setJobs(res.data)
      console.log('data has been retrived');
    })
    .catch(err =>{
        console.log(err)
    })
    }, [])


    const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 100;
  const pageVisited = pageNumber * jobPerPage;

    const displayJobss = Jobs.slice(pageVisited, pageVisited + jobPerPage).map((job) =>
  {   
    return(
      <div className='jobs'> 
      <Container className='contentBox'style={{backgroundColor:'white'}} maxWidth="lg">
      <Typography component="div" style={{ 
        backgroundColor: 'white', 
      }}>
        <div >
      <div className='jobs-info'>
      
      <table>
        <tbody>
          <tr >  
            <td >
              <span  className='h3-header' id='short' >{job.jobtitle}</span>
              <p className='p-text'><strong>Skills:  </strong>{job.skills}</p>
              <p className='p-text'><strong>Salary:  </strong>{job.salary}</p>
            </td>

            <td>
              <div className='bp'>
                <div className='pm-9'>

                  <Button variant="contained" color='success' style={{backgroundColor : '#4CAF50', color:'white'}} onClick={(id) => {edithandler(job._id)}} > View Applicants </Button>
                  {/* <Dialog

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
                        <Button color='success' onClick={handleClose}>No</Button>
                        <Button color='success' onClick={() => {
                          const data = {applicantname: auth.user.name,
                                        applicantID: auth.user.id,
                                        applicantemail: auth.user.email,
                                        jobtitle: job.jobtitle,
                                        companyemail: job.email,
                                        jobID: job._id}
                          applyhandler(data)}} autoFocus>
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog> */}

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
    
    </div>   
    );
  
  });

return (

    <>
      <CssBaseline />
    <main>
      <div>
      
        <Container className={classes.paper} maxWidth="md">
        <Typography   color="textPrimary">
                  <h4 className='color-head'>My Jobs</h4>
                </Typography>
                <br/>
        <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height:480,
                  }}
                >
               

                  {displayJobss}

                  
                </Paper>
          </Container>
          </div>
          </main>

        

        </>
    );
  }

  ;
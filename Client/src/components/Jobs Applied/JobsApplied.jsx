import React, {useEffect, useState} from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {  Typography, CssBaseline, Container, Paper  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

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


export function JobsApplied() {
    const classes = useStyles();
    const auth = useSelector(state => state.auth);
    const email = {
        email: auth.user.email
    }
    const [Jobs, setJobs] = useState([].slice(0,20))
    useEffect(() =>{
        axios
        .post('http://localhost:3001/api/users/jobsapplied' ,email )
        .then((res) => {
        console.log(res.data);
        setJobs(res.data);
    })
    .catch(err =>{
        console.log(err)
    }) 
    }, [])
  
 


    const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 100;
  const pageVisited = pageNumber * jobPerPage;
  function deletehandler(id) {
    const passId = id;
      
        axios
        .post('http://localhost:3001/api/users/jobsapplied/delete', passId )
        .then((res) => {
        console.log(res.data);
        
    })
    .catch(err =>{
        console.log(err)
    }) 
  }

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
              <p className='p-text'><strong>Company email: </strong>{job.companyemail}</p>
            </td>

            <td>
              <div className='bp'>
                <div className='pm-9'>

                  <Button variant="contained" color='success' style={{backgroundColor : '#4CAF50', color:'white'}} 
                  onClick={(id) => {
                    const data = {
                      applicantID: auth.user.id,
                      jobID: job._id}
                    console.log(data);}} > Delete </Button>
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
                  <h4 className='color-head'>Jobs Applied</h4>
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
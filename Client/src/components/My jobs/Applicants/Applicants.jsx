import React, {useEffect, useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, } from "draft-js";
import { Button, Typography, CssBaseline, Grid, Container, Paper , TextField, Box, Avatar} from "@material-ui/core";
import { SaveOutlined } from "@material-ui/icons";
import { makeStyles, styled } from '@material-ui/core/styles'
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


export function Applicants({match}) {
  
    const classes = useStyles();
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const email = {
        email: auth.companyuser.email
    }
    const [Jobs, setJobs] = useState([].slice(0,20))
    const [RandomJobs, setRandomJobs] = useState([].slice(0,20))
    const [JobTitle, setJobTitle] = useState("")
    const min = 1;
    const max = 2;
    const rand = min + Math.floor(Math.random() * (max - min));

    function stringToColor(string) {
      let hash = 0;
      let i;
    
      /* eslint-disable no-bitwise */
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
    
      let color = '#';
    
      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }
      /* eslint-enable no-bitwise */
    
      return color;
    }
    
    function stringAvatar(name) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }
    
      
    
    
    useEffect(() => {
      const fetchedData = async () => {
        // "https://cv-generator-mern.herokuapp.com/api"
        await axios
          .get(`http://localhost:3001/myjobs/applicants/${match.params.id}`)
          .then((res) => {
            if (res.data.success) {
                setJobs(res.data.jobData);
                setRandomJobs(res.data.jobData[0]);
                setJobTitle(res.data.jobData[0].jobtitle);
                
              console.log(RandomJobs);
              console.log(Jobs);
              
            }
          });
      };
      fetchedData();
    }, [match.params.id]);
  
      const [editorState, setEditorState] = useState(EditorState.createEmpty());

      
    const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 100;
  const pageVisited = pageNumber * jobPerPage;
  function Cvhandler(id) {
    history.push(`/myjobs/viewapplicant/${id}`)
  }

  const displayJobss = Jobs.slice(pageVisited, pageVisited + jobPerPage)
  .sort( (a,b) => a.applicantname > b.applicantname ? 1 : -1)
  .map((job) =>
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
          <td className="row">
          <Avatar sx={{ width: 34, height: 34 }} {...stringAvatar(job.applicantname)}  />
           </td>

            <td >
              <span  className='h3-header' id='short' >{job.applicantname}</span>
              <p className='p-text'><strong>Email: </strong>{job.applicantemail}</p>
            </td>

            <td>
              <div className='bp'>
                <div className='pm-9'>


                  <Button  variant="contained" color='success' style={{backgroundColor : '#4CAF50', color:'white'}} onClick={(id) => {Cvhandler(job.applicantID)}} > View CV </Button>

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

  const displayRecommendedJobss = Jobs.slice(pageVisited, pageVisited + 2)
  .sort( (a,b) => a.applicantname > b.applicantname ? 1 : -1)
  .map((recommendedjob) =>
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
          <td className="row">
          <Avatar sx={{ width: 34, height: 34 }} {...stringAvatar(recommendedjob.applicantname)}  />
           </td>

            <td >
              <span  className='h3-header' id='short' >{recommendedjob.applicantname}</span>
              <p className='p-text'><strong>Email: </strong>{recommendedjob.applicantemail}</p>
            </td>

            <td>
              <div className='bp'>
                <div className='pm-9'>


                  <Button  variant="contained" color='success' style={{backgroundColor : '#4CAF50', color:'white'}} onClick={(id) => {Cvhandler(recommendedjob.applicantID)}} > View CV </Button>

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
                  <h4 className='color-head'>Applicants for {JobTitle}</h4>
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

          <div>
      
        <Container className={classes.paper} maxWidth="md">
        <Typography   color="textPrimary">
                  <h4 className='color-head'>Recommended Applicant for {JobTitle}</h4>
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
               {displayRecommendedJobss }


                  
   
                  
                </Paper>
          </Container>
          </div>
          </main>

        

        </>
    );
  }

  ;
import * as React from 'react';
import {useSelector, useDispatch } from "react-redux";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MainListItems } from './listItems';
import { Button } from '@mui/material';
import axios from "axios";
import {useState, useEffect} from "react"
import ReactPaginate from 'react-paginate';
import "./Jobseekerdashboard.css"
import { profileInfo } from '../../actions/authActions';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        AcquireJob
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

export function JobseekerDashboardContent() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userData = { email: auth.user.email };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  useEffect(() => {
    dispatch(profileInfo(userData));
  }, []); //notice the empty array here
  const profile = useSelector((state) => state.profile);
  console.log(profile)
  const handleClose = () => {
    setOpenDialog(false);
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [searchTerms, setsearchTerms] = useState('')
  const [Jobs, setJobs] = useState([].slice(0,20))

    useEffect(() =>{
        axios.post('http://localhost:3001/api/users/searchresults')
    .then((res) => {
     setJobs(res.data)
      console.log('data has been retrived');
    })
    .catch(err =>{
        console.log(err)
    })
    }, [])


    function applyhandler(name) {
      const passName = name;
      console.log(passName);
      if(passName.applicantcv === undefined){
        alert("Please upload CV")}
    else{
      
      axios.post('http://localhost:3001/api/users/applyjob', passName)
    handleClose()}
    alert("Applied Successfully")
    }
    
    
  
  const [pageNumber, setPageNumber] = useState(0);

  const jobPerPage = 3;
  const pageVisited = pageNumber * jobPerPage;


  const cv = profile.profile.resume;
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

                  <Button variant="contained"  style={{backgroundColor : '#4CAF50',}} onClick={() => {
                          const data = {applicantname: auth.user.name,
                                        applicantID: auth.user.id,
                                        applicantemail: auth.user.email,
                                        applicantcv: cv,
                                        jobtitle: job.jobtitle,
                                        jobdescription: job.jobdescription,
                                        companyemail: job.email,
                                        companyname: job.companyname,
                                        jobID: job._id}
                          applyhandler(data)}}> Apply Now</Button>
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
  const pageCount = Math.ceil(Jobs.length / jobPerPage);

    const changePage = ({selected}) => {
      setPageNumber(selected); 
    };
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer  style={{position:'relative',
      backgroundColor:'green'}} variant="permanent"  open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton className='chevron' onClick={toggleDrawer}>
            <ChevronRightIcon  />
            </IconButton>
          </Toolbar>
          <Divider />
          <MainListItems/>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height:480,
                  }}
                >
               <Typography   color="textPrimary">
                  <h4 className='color-head'>Featured Job Advertisement</h4>
                </Typography>
                  
                  <br/>

                  {displayJobss}

                  
                </Paper>

                <div className=' align-items-center justify-content-center d-flex mt-5  '>
      <ReactPaginate 
        previousLabel= {"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns text-right"}
        previousLinkClassName={"previousBttns"}
        nextLinkClassName={"nextBttns"}
        disabledClassName={"paginationDisabled"}    
        activeClassName={"paginationActive"}       
      />
      </div>
                
                  
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Typography   color="textPrimary">
                  <h5 className='color-head' >Top Companies</h5>
                </Typography>
                  Coming Soon!
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={8} lg={12}>
                
                 
              <Copyright sx={{ pt: 4 }} /> 
                  
              </Grid>        
            </Grid>
            
            </Container>  
        </Box>


      </Box>
    </ThemeProvider>
  );
}


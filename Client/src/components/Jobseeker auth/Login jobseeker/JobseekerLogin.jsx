import * as React from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { loginUser}  from "../../../actions/authActions"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../../Css/Button.css";


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

const theme = createTheme();

export  function JobseekerLogin() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  console.log(auth);
  const history = useHistory();
  if (auth.isAuthenticated===true) {
    history.push("/jobseekerdashboard");
    
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // eslint-disable-next-line no-console
    const newUser = {
        email: data.get('email'),
        password: data.get('password')
      };
      console.log(errors);
      dispatch(loginUser(newUser, history)); 
    
    };

  return (
    
    <ThemeProvider theme={theme}>
  
      <Grid container component="main" sx={{ height: '91.5vh' }}>
        <CssBaseline />
        <Grid
        
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://empireresume.com/wp-content/uploads/2021/02/Treat-Your-Job-Search-as-a-Full-Time-Job1-1200x675.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Job Seeker LogIn
            </Typography>
            <Box component="form" noValidate onSubmit={HandleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              style={{outline: 'green'}}
              />
              <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span><br/>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'green' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                Don't have an account? <Link href="/jobseeker-register" variant="body2">
                  {"Register"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


  
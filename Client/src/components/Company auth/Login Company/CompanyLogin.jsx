import * as React from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { loginCompanyUser}  from "../../../actions/authActions"
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Container from '@mui/material/Container';
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

export  function CompanyLogin() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  console.log(auth);
  const history = useHistory();
  if (auth.isCompanyAuthenticated===true) {
    history.push("/companydashboard");
    
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
      dispatch(loginCompanyUser(newUser, history)); 
    
    };

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login to Existing User
            </Typography>
            <Box component="form" noValidate onSubmit={HandleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{
            marginLeft: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FormControlLabel value="User" control={<Radio />} label="User" name='role' />
          <FormControlLabel value="Flight" control={<Radio />} label="Flight" name='role' />
        </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <span className="red-text">{errors.email}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  <span className="red-text">{errors.password}</span>
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , bgcolor: 'green' }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                Already have an account? <Link href="/company-login" variant="body2">
                    Login 
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          </Container>
      </ThemeProvider>
    );
}


  
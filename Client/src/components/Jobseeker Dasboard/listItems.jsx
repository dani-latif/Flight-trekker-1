import * as React from 'react';
import { Link, useHistory } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@mui/icons-material/Work';
import {useDispatch } from "react-redux";
import {logoutUser}  from "../../actions/authActions";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


export function MainListItems(){
    const dispatch = useDispatch();
    const history = useHistory();
    return(

  <div>

    <ListItemButton onClick={() => (history.push("/editjobseekerprofile"))}  > 
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Profile" />
    </ListItemButton>

    <ListItemButton onClick={() => (history.push("/cvmanager"))} > 
      <ListItemIcon>
        <DocumentScannerIcon />
      </ListItemIcon>
      <ListItemText primary="CV Manager" />
    </ListItemButton>
    
    
    <ListItemButton onClick={() => (history.push("/jobsapplied"))}  >
      <ListItemIcon>
        <WorkOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Applied Jobs"  />
    </ListItemButton>

    
    <ListItemButton onClick={() => {window.location.href="http://localhost:3000/editjobseekerprofile";  window.location.reload(true);}} >
    
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Search Jobs" />
    </ListItemButton>
    
    <ListItemButton onClick={dispatch(logoutUser)} >
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
   
  </div>
);
    }

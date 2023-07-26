import * as React from 'react';
import { Link, useHistory} from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutCompanyUser } from '../../actions/authActions';
import { useDispatch } from 'react-redux';
import WorkIcon from '@mui/icons-material/Work';







export function MainListItems(){
const dispatch = useDispatch();
const history = useHistory();
return(
    <div>
    
    <ListItemButton onClick={() => (history.push("/editcompanyprofile"))} > 
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Profile" />
    </ListItemButton>
    
    
    <ListItemButton onClick={() => (history.push("/jobad"))} >
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary="Post Job Ad" />
    </ListItemButton>

    <ListItemButton onClick={() => (history.push("/myjobs"))} >
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="My Jobs" />
    </ListItemButton>
    
    <ListItemButton onClick={dispatch(logoutCompanyUser)} >
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
   
  </div>
);
}

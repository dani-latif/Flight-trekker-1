import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser,setCurrentCompanyUser ,logoutUser,logoutCompanyUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";
import CompanyPrivateRoute from "./components/private-route/CompanyPrivateRoute";
import Landing from "./components/Landing/layout/Landing";
import NavBar from "./components/NavBar/Navbar";
import {JobseekerSignup}  from "./components/Jobseeker auth/Register Jobseeker/JobSeekerRegister";
import { JobseekerLogin } from "./components/Jobseeker auth/Login jobseeker/JobseekerLogin";
import { CompanySignup } from "./components/Company auth/Register Company/CompanyRegister";
import { CompanyLogin } from "./components/Company auth/Login Company/CompanyLogin";
import { CompanyDashboardContent } from "./components/Company Dashboard/Companydashboard";
import { JobseekerDashboardContent } from "./components/Jobseeker Dasboard/Jobseekerdashboard";
import { JobAd } from "./components/Post Job Ad/PostJobAd";
import { EditJob } from "./components/Post Job Ad/EditJobAd/EditJob";
import { EditCompanyProfile } from "./components/Company Profile/EditCompanyProfile/EditCompanyProfile";
import { EditJobseekerProfile } from "./components/Jobseeker Profile/EditJobseekerProfile/EditJobseekerProfile";
import FormComponent from "./components/form/form";
import ResumeComponent from "./components/resume/resume";
import SearchJob from "./components/Search Job Posts/SearchLanding";
import AcquireSearch from './components/AcquireSearch/AcquireSearch'
import Remotivejobs from './components/RemotiveJobs/Remotivejobs'
import { MyJobs } from "./components/My jobs/MyJobs";
import { Applicants } from "./components/My jobs/Applicants/Applicants";
import { JobsApplied } from "./components/Jobs Applied/JobsApplied";
import CvManager from "./components/CV manager/CvManager";
import { ViewApplicants } from "./components/My jobs/Applicants/ViewApplicants/ViewApplicant"




import socketIOClient from 'socket.io-client';
import SocketIO from './components/socket/socketIO';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  if(decoded.companyemployername){
    store.dispatch(setCurrentCompanyUser(decoded));
  }else if(decoded.name){
    store.dispatch(setCurrentUser(decoded));
  }
  
  
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    store.dispatch(logoutCompanyUser());
    // Redirect to login
    window.location.href = "./";
  }
}

function App() {
  const [username, setUsername] = useState("Abdul");
  const [room, setRoom] = useState("some room");
  const [message, setMessage] = useState('Hello World!');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const ENDPOINT = 'http://localhost:3001';

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     setSocket(socket);

//     return () => {
//         socket.disconnect();
//     };
// }, []);

//   useEffect(() => {
//       if (socket) {
//           socket.on('message', message => {
//               setMessages(messages => [...messages, message]);
//           });
//       }
//   }, [socket]);



//   function handleUsernameChange(event) {
//       setUsername(event.target.value);
//   }

//   function handleRoomChange(event) {
//       setRoom(event.target.value);
//   }

//   function handleMessageChange(event) {
//       setMessage(event.target.value);
//   }

//   function handleJoinRoom() {
//       socket.emit('join', room);
//   }

//   function handleSendMessage() {
//       socket.emit('message', room, message);
//       setMessage('');
//   }
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/jobseeker-register" component={JobseekerSignup} />
            <Route exact path="/socket" component={SocketIO} />
            <Route exact path="/jobseeker-login" component={JobseekerLogin} />
            <Route exact path="/company-login" component={CompanyLogin} />
            <Route exact path="/company-register" component={CompanySignup} /> 
            {/* <Route path="/create-cv" exact component={FormComponent} />
            <Route path="/view_resume/:id" exact component={ResumeComponent} />  */}
             <Route path="/search" exact component={SearchJob} />
             <Route path="/acquiresearch" exact component={AcquireSearch} /> 
             <Route path="/remotivejobs" exact component={Remotivejobs} /> 
            <Switch>
              <CompanyPrivateRoute exact path="/companydashboard" component={CompanyDashboardContent} />
              <CompanyPrivateRoute exact path="/editcompanyprofile" component={EditCompanyProfile} />
              <CompanyPrivateRoute exact path="/jobad" component={JobAd} />
              <CompanyPrivateRoute exact path="/jobad/edit/:id" component={EditJob} /> 
              <CompanyPrivateRoute exact path="/myjobs" component={MyJobs} /> 
              <CompanyPrivateRoute exact path="/myjobs/applicants/:id" component={Applicants} /> 
              <CompanyPrivateRoute exact path="/myjobs/viewapplicant/:id" component={ViewApplicants} /> 
              <PrivateRoute exact path="/jobseekerdashboard" component={JobseekerDashboardContent} />
              <PrivateRoute exact path="/editjobseekerprofile" component={EditJobseekerProfile} />
              <PrivateRoute exact path="/jobsapplied" component={JobsApplied} />
              <PrivateRoute exact path="/cvmanager" component={CvManager} />
            </Switch>
          </div>
        </Router> 
      </Provider>
  );
}

export default App;

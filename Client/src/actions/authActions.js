import axios from "axios";
import * as api from '../api/index.js';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SET_CURRENT_COMPANY_USER,
  START_LOADING,
  END_LOADING,
  SET_CURRENT_PROFILE,
  SET_CURRENT_COMPANY_PROFILE,
  SET_SEARCH_RESULTS,
  FETCH_BY_SEARCH
} from "./types";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/jobseeker-login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Register Company User
export const registerCompanyUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3000/api/users/signup", userData)
    .then(res => history.push("/")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push("/jobseekerdashboard")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// CompanyLogin - get user token
export const loginCompanyUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3000/api/users/signin", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      // const { token } = res.data;
      // localStorage.setItem("jwtToken", token);
      // // Set token to Auth header
      // setAuthToken(token);
      // // Decode token to get user data
      // const decoded = jwt_decode(token);
      // // Set current user
      // dispatch(setCurrentCompanyUser(decoded));
      history.push("/")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
export const setCurrentCompanyUser = decoded => {
  return {
    type: SET_CURRENT_COMPANY_USER,
    payload: decoded
  };
};
// loading
export const setStartLoading = () => {
  return {
    type: START_LOADING
  };
};
export const setEndLoading = () => {
  return {
    type: END_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch(setCurrentProfile({}));
};
// Log Company user out
export const logoutCompanyUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentCompanyUser({}));
  dispatch(setCurrentCompanyProfile({}));
};

export const setCurrentProfile = profile => {
  return {
    type: SET_CURRENT_PROFILE,
    payload: profile
  };
};

export const setCurrentCompanyProfile = profile => {
  return {
    type: SET_CURRENT_COMPANY_PROFILE,
    payload: profile
  };
};

export const setSearchResult = result => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: result
  };
};

//Profile Info
export const profileInfo = (userData) => dispatch => {
  dispatch(setStartLoading());
  axios
    .post("/api/users/viewprofile", userData)
    .then(res => {
      const profile = res.data;
      dispatch(setCurrentProfile(profile));
    }) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
    dispatch(setEndLoading());
};

//Company Profile Info
export const companyProfileInfo = (userData) => dispatch => {
  axios
    .post("/api/users/viewcompanyprofile", userData)
    .then(res => {
      const profile = res.data;
      dispatch(setCurrentCompanyProfile(profile));
    }) 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


//Update Profile Info
export const updateProfileInfo = (userData) => dispatch => {
  axios
    .post("/api/users/updateprofile", userData)
    .then() 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Update Company Profile Info
export const updateCompanyProfileInfo = (userData) => dispatch => {
  axios
    .post("/api/users/updatecompanyprofile", userData)
    .then() 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Job ad
export const postJobAd = (userData) => dispatch => {
   axios
    .post("/api/users/jobad", userData)
    .then() 
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
  } catch (error) {
    console.log(error);
  }
};

//SearchResults
export const SearchResults = () => dispatch => {
  dispatch(setStartLoading());
  axios
    .post("/api/users/searchresults")
    .then(res => {
      const searchresults = res.data;
      console.log(searchresults);
      dispatch(setSearchResult(searchresults));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

    dispatch(setEndLoading());
};
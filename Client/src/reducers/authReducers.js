import {
    SET_CURRENT_USER,
    SET_CURRENT_COMPANY_USER,
    START_LOADING,
    END_LOADING
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const initialState = {
    isAuthenticated: false,
    isCompanyAuthenticated: false,
    user: {},
    companyuser: {},
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          isCompanyAuthenticated: false,
          user: action.payload
        };
        case SET_CURRENT_COMPANY_USER:
        return {
          ...state,
          isAuthenticated: false,
          isCompanyAuthenticated: !isEmpty(action.payload),
          companyuser: action.payload
        };
        case START_LOADING:
          return {
            ...state,
            loading: true
          };
          case END_LOADING:
          return {
            ...state,
            loading: false
          };
      default:
        return state;
    }
  }
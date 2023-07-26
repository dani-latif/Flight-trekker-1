import {
    SET_CURRENT_COMPANY_PROFILE,
    START_LOADING,
    END_LOADING
  } from "../actions/types";
  const initialState = {
    profile: {},
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_COMPANY_PROFILE:
        return {
          ...state,
          profile: action.payload
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
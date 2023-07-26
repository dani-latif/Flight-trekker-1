import { combineReducers } from "redux";
import authReducer from "./authReducers";
import profilReducer from "./profilReducer";
import companyProfileReducer from "./companyProfileReducer";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  profile: profilReducer,
  companyprofile: companyProfileReducer,
  errors: errorReducer
}); 
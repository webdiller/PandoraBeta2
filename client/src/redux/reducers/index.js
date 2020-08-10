import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
});

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import messageReducer from "./messagesReducers";
import attachmentsReducer from "./attachments";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  message: messageReducer,
  attachments: attachmentsReducer,
});

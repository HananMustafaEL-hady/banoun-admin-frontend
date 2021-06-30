import { combineReducers } from "redux";
import { errorAlert, infoAlert, successAlert } from "./alert";
import specialist from "./specialist";
import event from "./event";
import connectus from "./connectus";
export default combineReducers({
  errorAlert,
  infoAlert,
  successAlert,
  specialist,
  event,
  connectus,
});

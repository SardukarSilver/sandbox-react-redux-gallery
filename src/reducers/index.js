import { combineReducers } from "redux";
import photosList from "./picsumReducer";

export default combineReducers({
  photosList: photosList,
});

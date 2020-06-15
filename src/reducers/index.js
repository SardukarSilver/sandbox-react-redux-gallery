import { combineReducers } from "redux";
import data from "./githubReducer";
import photosList from "./picsumReducer";

export default combineReducers({
  data: data,
  photosList: photosList,
});

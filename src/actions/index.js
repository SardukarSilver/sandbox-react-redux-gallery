import { FETCH_PICSUM_DATA } from "./types";
import axios from "axios";

const picsumApiUrl = "https://picsum.photos/v2/list?limit=10";

export const fetchData = data => {
  return {
    type: FETCH_PICSUM_DATA,
    data
  };
};

export const fetchPicsumData = () => {
  return dispatch => {
    return axios
      .get(picsumApiUrl)
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

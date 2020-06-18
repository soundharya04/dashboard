import axios from "axios";

export const getCandidates = () => (dispatch) => {
  axios.get("./Candidates.json").then((res) => {
    dispatch({
      type: "GET_CANDIDATES",
      payload: res.data,
    });
  });
};

export const toggleSidebar = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
};

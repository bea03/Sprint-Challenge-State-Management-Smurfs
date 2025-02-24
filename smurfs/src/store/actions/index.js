import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("smurf fetch",res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    });
};

export const TELEPORT_SMURF = "TELEPORT_SMURF";
export const teleportSmurf = (index) => dispatch => {
  dispatch({type: TELEPORT_SMURF})
  axios
    .post(`http://localhost:3333/smurfs`, index)
    .then(res => {
      console.log("smurf fetch",res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    });
};

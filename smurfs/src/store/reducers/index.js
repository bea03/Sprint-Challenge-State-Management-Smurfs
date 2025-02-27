import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  TELEPORT_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
        return{...state, fetching:true};
    case FETCHING_SMURFS_SUCCESS:
        return{...state, smurfs:action.payload, fetching:false};
    case FETCHING_SMURFS_FAILURE:
        return{...state, error:action.payload, fetching:false};
    case TELEPORT_SMURF:
        return{...state, fetching:true};
    default:
      return state;
  }
}

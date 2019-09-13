import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../store/actions";

const SmurfVillage = ({ getSmurfs, smurfs, isFetching, error }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);
  return (
    <div className='smurf_village'>
      {smurfs.map(smurf => {
        return (
          <div className='smurf_card' key={smurf.id}>
              <h2>{smurf.name}</h2>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);

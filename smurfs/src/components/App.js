import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import SmurfVillage from "./SmurfsVillage.js";
import SmurfForm from "./SmurfForm.js";


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm />
        <SmurfVillage />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);

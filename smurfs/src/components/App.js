import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Le Pays Maudit</h1>

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

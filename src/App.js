import React, { Component } from "react";
import "./App.css";
import { loadCountries, setCountry } from "./actions/actions";
import { connect } from "react-redux";

import MapComponent from "./Map/MapComponent";

class App extends Component {
  componentDidMount() {
    this.props.loadCountries();
  }

  render() {
    return (
      <div className="App">
        <MapComponent setCountry={setCountry} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCountries: () => dispatch(loadCountries()),
  setCountry: payload => dispatch(setCountry(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(App);

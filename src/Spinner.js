import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="pink"
        height={75}
        width={55}
        // timeout={3000} //3 secs
      />
    );
  }
}

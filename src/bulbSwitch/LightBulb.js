import React, { Component } from "react";
import LightCircuit from "./context";

class LightBulb extends Component {
  render() {
    console.log("inside light bulb");
    return (
      <LightCircuit.Consumer>
        {({ state }) => (
          <div className={"light-bulb" + " " + (state.on ? "on" : "off")} />
        )}
      </LightCircuit.Consumer>
    );
  }
}

export default LightBulb;

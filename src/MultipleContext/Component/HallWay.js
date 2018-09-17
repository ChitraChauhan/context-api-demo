import React, { Component } from "react";

import LightCircuit2 from "../Context/context2";

import LightBulb from "./LightBulb";

class Hallway extends Component {
  render() {
    return (
      <div>
        <LightCircuit2.Consumer>
          {({ valOn }) => <LightBulb valOn={valOn} />}
        </LightCircuit2.Consumer>
      </div>
    );
  }
}

export default Hallway;

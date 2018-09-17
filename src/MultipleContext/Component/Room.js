import React, { Component } from "react";

import LightCircuit1 from "../Context/context1";

import LightBulb from "./LightBulb";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { up: false };
  }
  render() {
    return (
      <div>
        <LightCircuit1.Consumer>
          {({ valOn }) => <LightBulb valOn={valOn} />}
        </LightCircuit1.Consumer>
      </div>
    );
  }
}

export default Room;

import React, { Component } from "react";
import "./App.css";

import LightCircuit1 from "./Context/context1";
import LightCircuit2 from "./Context/context2";

import WallPlateLivingRoom from "./Component/WallPlateLivingRoom";
import WallPlateHallway from "./Component/WallPlateHallway";

import Room from "./Component/Room";
import Hallway from "./Component/HallWay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { on1: false, on2: false };
  }

  render() {
    return (
      <div className="App">
        <LightCircuit1.Provider
          value={{
            valOn: this.state.on1,
            flipSwitch: () => this.setState({ on1: !this.state.on1 }) //change this so that it's not the same
          }}
        >
          <LightCircuit2.Provider
            value={{
              valOn: this.state.on2,
              flipSwitch: () => this.setState({ on2: !this.state.on2 })
            }}
          >
            <div className="room">
              {" "}
              living room
              <Room />
              <WallPlateLivingRoom />
            </div>
            <div className="room">
              {" "}
              hallway
              <Hallway />
              <WallPlateHallway />
            </div>
          </LightCircuit2.Provider>
        </LightCircuit1.Provider>
      </div>
    );
  }
}

export default App;

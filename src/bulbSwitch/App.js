import React, { Component } from "react";
import LightCircuit from "./context";
import LightBulb from "./LightBulb";
import LightSwitch from "./LightSwitch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  render() {
    console.log("LightCircuit", LightCircuit);
    return (
      <LightCircuit.Provider
        value={{
          state: this.state,
          flipSwitch: () => this.setState({ on: !this.state.on })
        }}
      >
        <div className="App">
          <LightBulb />
          <div className="space-20" />
          <LightSwitch />
        </div>
      </LightCircuit.Provider>
    );
  }
}

export default App;

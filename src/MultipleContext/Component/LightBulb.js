import React, { Component } from "react";

class LightBulb extends Component {
  render() {
    return (
      <div className={"light-bulb" + " " + (this.props.valOn ? "on" : "off")} />
    );
  }
}

export default LightBulb;

import React from "react";
import Context from "./Context";
class Provider extends React.Component {
  handleSetState = fn => {
    this.setState(state => ({
      state: fn(state.state)
    }));
  };
  state = {
    state: this.props.initialState,
    setState: this.handleSetState
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Provider;
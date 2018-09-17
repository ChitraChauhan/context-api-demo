import React from "react";
import Context from "./Context";
const Consumer = ({ context, children, actions }) => (
  <Context.Consumer>
    {({ state, setState }) => children({
      ...state[context],
    //   ...mapContextToActions(...)
    })}
  </Context.Consumer>
);
export default Consumer;
import React, { Component } from "react";
import { store, fetchTodos } from "./TodoStore";

const { Provider, Consumer } = React.createContext();

export const connect = (Comp, selector) => () => (
  <Consumer>
    {state => {
      const props = selector(state);
      return <Comp {...props} />;
    }}
  </Consumer>
);

// const connect = selector => Comp => props => (
//     <Consumer>
//       {state => {
//         const myProps = selector(state);
//         return <Comp {...props} {...myProps} />;
//       }}
//     </Consumer>
//   );

// export const connect = selector => Comp => props => (
//     <Consumer>{state => <Comp {...{ ...selector(state), ...props }} />}</Consumer>
//   );

export default class TodoContainer extends Component {
  state = store.state;

  componentWillMount() {
    this.unsubscribe = store.subscribe(state => this.setState(state));
  }

  componentDidMount() {
    fetchTodos();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log("children",this.props.children)
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

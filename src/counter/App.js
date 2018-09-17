import React from "react";
import { Container, Provider } from "constate";

const CounterContainer = props => (
  <Container
    intialState={{ count: 0 }}
    actions={{ increment: () => state => ({ count: state.count + 1 }) }}
    {...props}
  />
);

const CounterButton = () => (
  <CounterContainer context="counter1">
    {({ increment }) => <button onClick={increment}>Increment</button>}
  </CounterContainer>
);

const CounterValue = () => (
  <CounterContainer context="counter1">
    {({ count }) => <div>{count}</div>}
  </CounterContainer>
);

const App = () => (
  <Provider>
    <CounterButton />
    <CounterValue />
  </Provider>
);

export default App;

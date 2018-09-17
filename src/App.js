import React, { Component } from "react";
import "./App.css";
import { Container } from "constate";

const initialState = { count: 0 };

const actions = {
  increment: () => state => ({ count: state.count + 1 })
};

const selectors = {
  getParity: () => state => (state.count % 2 === 0 ? "even" : "odd")
};

const effects = {
  tick: () => ({ setState }) => {
    const fn = () => setState(state => ({ count: state.count + 1 }));
    setInterval(fn, 1000);
  }
};

const Counter = () => (
  <Container
    initialState={initialState}
    effects={effects}
    // actions={actions}
    selectors={selectors}
  >
    {({ count, increment, getParity, tick }) => (
      <button onClick={tick}>
        {count}
        {getParity()}
      </button>
    )}
  </Container>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;

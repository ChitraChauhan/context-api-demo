import React from "react";
import ReactDOM from "react-dom";
import Provider from "./Provider";
const App = () => (
  <Provider>
    ...
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("root"));
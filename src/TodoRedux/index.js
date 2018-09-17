import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { TodoEditor, TodoList } from "./containers";
import { todoApp } from "./reducers";
import { fetchTodos } from "./actions";

const store = createStore(todoApp, applyMiddleware(thunk));

export default class Todos extends Component {
  componentDidMount() {
    store.dispatch(fetchTodos());
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoEditor todo={{ title: "" }} />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Todos />, document.getElementById("root"));

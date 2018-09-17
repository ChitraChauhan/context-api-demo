import React from "react";
import TodoContainer from "./TodoContainer";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

 const App = () => (
  <TodoContainer>
    <div>
      <TodoEditor />
      <TodoList />
    </div>
  </TodoContainer>
);

export default App
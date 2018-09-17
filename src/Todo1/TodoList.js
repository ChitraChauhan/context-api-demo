import React, { PureComponent } from "react";
import { selectTodo, updateTodo } from "./TodoStore";
import { connect } from "./TodoContainer";

class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;
    return (
      <li key={todo.id} onClick={e => selectTodo(todo)}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => updateTodo({ done: !todo.done })}
        />
        {todo.title}
      </li>
    );
  }
}

const TodoListComponent = ({ todos, loading, completed }) => {
  if (loading) return <div>Loading</div>;
  return (
    <React.Fragment>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <div>Completed: {completed}</div>
    </React.Fragment>
  );
};

// class TodoListComponent extends PureComponent {
//   render() {
//     const { todos, loading, completed } = this.props;
//     if (loading) return <div>Loading</div>;
//     return (
//       <React.Fragment>
//         <ul>
//           {todos.map(todo => (
//             <TodoItem todo={todo} key={todo.id} />
//           ))}
//         </ul>
//         <div>Completed: {completed}</div>
//       </React.Fragment>
//     );
//   }
// }

const TodoList = connect(
  TodoListComponent,
  state => ({
    todos: state.todos,
    loading: state.loading,
    completed: state.todos.filter(item => item.done).length
  })
);

export default TodoList;

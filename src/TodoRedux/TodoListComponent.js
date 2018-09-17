import React, { PureComponent } from "react";

// const TodoListComponent = ({ loading, todos, completed, select, toggle }) => {
//   if (loading) return <div>Loading...</div>;
//   return (
//     <React.Fragment>
//       <ul>
//         {todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} select={select} toggle={toggle} />
//         ))}
//       </ul>
//       <div>Completed: {completed}</div>
//     </React.Fragment>
//   );
// };

class TodoListComponent extends PureComponent {
  render() {
    const { loading, todos, completed, select, toggle } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <React.Fragment>
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              select={select}
              toggle={toggle}
            />
          ))}
        </ul>
        <div>Completed: {completed}</div>
      </React.Fragment>
    );
  }
}

// const TodoItem = ({ todo, select, toggle }) => (
//   <li onClick={e => select(todo)}>
//     <input type="checkbox" checked={todo.done} onChange={e => toggle(todo)} />
//     {todo.title}
//   </li>
// );

class TodoItem extends PureComponent {
  render() {
    const { todo, select, toggle } = this.props;
    return (
      <li onClick={e => select(todo)}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => toggle(todo)}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoListComponent;

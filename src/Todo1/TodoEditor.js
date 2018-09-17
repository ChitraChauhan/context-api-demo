import React, { PureComponent } from "react";
import { saveTodo, updateTodo, removeTodo } from "./TodoStore";
import { connect } from "./TodoContainer";

class TodoEditorComponent extends PureComponent {
  input = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    saveTodo().then(() => {
      this.input.current.value = "";
      this.input.current.focus();
    });
  };

  render() {
    const { todo, saving } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={this.input}
          disabled={saving}
          value={todo.title}
          onChange={e => updateTodo({ title: e.target.value })}
        />
        <button disabled={saving}>Add</button>
        {todo.id && (
          <button
            type="button"
            disabled={saving}
            onClick={e => removeTodo(todo)}
          >
            Delete
          </button>
        )}
      </form>
    );
  }
}

const TodoEditor = connect(
  TodoEditorComponent,
  state => ({
    todo: state.todo,
    saving: state.saving,
    updateTodo: state.updateTodo,
    removeTodo: state.removeTodo
  })
);

export default TodoEditor;

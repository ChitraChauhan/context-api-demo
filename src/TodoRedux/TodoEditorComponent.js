import React, { Component } from "react";

export default class TodoEditorComponent extends Component {
  input = React.createRef();

  onSubmit = e => {
    const { create } = this.props;
    e.preventDefault();
    create(this.input.current.value);
    this.input.current.value = "";
    this.input.current.focus();
  };

  render() {
    const { todo, saving, update, remove } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={this.input}
          disabled={saving}
          value={todo.title}
          onChange={e => update(e.target.value)}
        />
        <button disabled={saving}>Add</button>
        {todo.id && (
          <button type="button" disabled={saving} onClick={e => remove(todo)}>
            Delete
          </button>
        )}
      </form>
    );
  }
}

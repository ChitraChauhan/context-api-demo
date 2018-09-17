import TodoEditorComponent from "./TodoEditorComponent";
import TodoListComponent from "./TodoListComponent";
import { connect } from "react-redux";
import { createTodo, updateTodo, deleteTodo, selectTodo } from "./actions";

export const TodoEditor = connect(
  state => ({
    todo: state.todo,
    saving: state.saving
  }),
  dispach => ({
    create: () => dispach(createTodo()),
    update: title => dispach(updateTodo({ title })),
    remove: todo => dispach(deleteTodo(todo))
  })
)(TodoEditorComponent);

export const TodoList = connect(
  state => ({
    todos: state.todos,
    loading: state.loading,
    completed: state.todos.filter(item => item.done).length
  }),
  dispatch => ({
    select: todo => dispatch(selectTodo(todo)),
    toggle: todo => dispatch(updateTodo({ ...todo, done: !todo.done }))
  })
)(TodoListComponent);

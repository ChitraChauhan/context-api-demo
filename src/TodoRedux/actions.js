export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SELECT_TODO = "SELECT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const SAVING = "SAVING";
export const SAVING_DONE = "SAVING_DONE";

export const FETCHING = "FETCHING";
export const FETCHING_DONE = "LOADING_DONE";

export const fetchTodos = () => dispach => {
  return new Promise(resolve => {
    dispach({
      type: FETCHING
    });
    setTimeout(() => {
      dispach({
        type: FETCHING_DONE,
        todos: [
          {
            id: Math.random(),
            title: "Hello...",
            done: false
          },
          {
            id: Math.random(),
            title: "World...",
            done: false
          },
          {
            id: Math.random(),
            title: "Hello World...",
            done: true
          }
        ]
      });
    }, 1000);
  });
};

export const createTodo = () => dispach => {
  return new Promise(resolve => {
    dispach({
      type: SAVING
    });
    setTimeout(() => {
      dispach({
        type: CREATE_TODO
      });
      dispach({
        type: SAVING_DONE
      });
      resolve();
    }, 1000);
  });
};

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    todo
  };
};

export const selectTodo = todo => {
  return {
    type: SELECT_TODO,
    todo
  };
};

export const deleteTodo = todo => {
  return {
    type: DELETE_TODO,
    todo
  };
};

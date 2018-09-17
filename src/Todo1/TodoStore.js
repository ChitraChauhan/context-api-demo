import Store from "./store";

export const store = new Store({
  saving: false,
  loading: false,
  todo: {
    title: "",
    done: false
  },
  todos: []
});

export const fetchTodos = () => {
  store.update(draft => (draft.loading = true));
  // simulate async data fetch
  return new Promise(resolve => {
    setTimeout(() => {
      store.update(draft => {
        draft.todos = [
          { id: Math.random(), title: "Hello...", done: false },
          { id: Math.random(), title: "World...", done: false },
          { id: Math.random(), title: "Hello World...", done: true }
        ];
        draft.loading = false;
        resolve();
      });
    }, 1000);
  });
};

export const saveTodo = () => {
  store.update(draft => (draft.saving = true));
  // simulate async save
  return new Promise(resolve => {
    setTimeout(() => {
      store.update(draft => {
        const todo = draft.todo;
        if (!todo.id) {
          todo.id = Math.random();
          draft.todos.push(todo);
        } else {
          draft.todos = draft.todos.map(
            item => (item.id === todo.id ? todo : item)
          );
        }
        draft.todo = { title: "", done: false };
        draft.saving = false;
        resolve();
      });
    }, 1000);
  });
};

export const updateTodo = todo => {
  store.update(draft => {
    const current = (draft.todo = { ...draft.todo, ...todo });
    if (current.id) {
      draft.todos = draft.todos.map(
        item => (item.id === current.id ? current : item)
      );
    }
  });
};

export const removeTodo = todo => {
  store.update(draft => (draft.saving = true));
  // simulate async delete
  return new Promise(resolve => {
    setTimeout(
      () =>
        store.update(draft => {
          draft.todos = draft.todos.filter(item => item.id !== todo.id);
          draft.todo = { title: "", done: false };
          draft.saving = false;
        }),
      1000
    );
  });
};

export const selectTodo = todo => {
  store.update(draft => {
    draft.todo = todo;
  });
};

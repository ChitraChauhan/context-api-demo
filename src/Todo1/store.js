import produce from "immer";

export default class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = new Set();
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  update(updater) {
    const newState = produce(this.state, draft => {
      updater(draft);
    });
    if (newState && newState !== this.state) {
      this.state = newState;
      this.notify();
    }
  }
}

import React from 'react';
import create from 'zustand';

import Todo from '../Todo';
import { T_Store, T_Todo } from '../types';

const [useStore] = create<T_Store>(set => ({
  todos: [] as T_Todo[],
  input: "",
  setInput: (v: string) => {
    set({ input: v });
  },
  addTodo: (todo: T_Todo) => {
    set(state => ({
      todos: [...state.todos, todo],
      input: ""
    }));
  },
  tickTodo: (todo: T_Todo) => {
    set(state => {
      return {
        todos: state.todos.map(t => {
          if (todo.id === t.id) {
            return { ...t, done: !t.done };
          } else return t;
        })
      };
    });
  }
}));

const ZustandTodo = () => {
  const store = useStore(s => s);
  return <Todo store={store} />;
};

export default ZustandTodo;

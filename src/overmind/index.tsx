import { Action, createOvermind, IConfig } from 'overmind';
import { createHook, Provider } from 'overmind-react';
import React from 'react';

import Todo from '../Todo';
import { T_Store, T_Todo } from '../types';

type State = {
  input: string;
  todos: T_Todo[];
};
const state: State = {
  input: 'overmind',
  todos: [],
};
const setInput: Action<string> = ({ state }, v) => {
  state.input = v;
};
const addTodo: Action<T_Todo> = ({ state }, todo) => {
  state.todos.push(todo);
  state.input = '';
};
const tickTodo: Action<T_Todo> = ({ state }, todo) => {
  const target = state.todos.find(t => t.id === todo.id);
  if (target) {
    target.done = !target.done;
  }
};
const actions = {
  setInput,
  addTodo,
  tickTodo,
};
export const config = {
  state,
  actions,
};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

const app = createOvermind(config);
const useApp = createHook();

const OvermindTodo = () => {
  const { state, actions } = useApp();
  const store = { ...state, ...actions } as T_Store;
  return <Todo store={store} />;
};

export default () => {
  return (
    <Provider value={app}>
      <OvermindTodo />
    </Provider>
  );
};

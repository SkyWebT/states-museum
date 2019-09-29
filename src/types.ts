import { AnyAction, compose } from 'redux';

export interface T_Todo {
  text: string;
  done: boolean;
  id: number;
}

export interface T_Store {
  input: string;
  todos: T_Todo[];
  setInput: (v: string) => void;
  addTodo: (todo: T_Todo) => void;
  tickTodo: (todo: T_Todo) => void;
}

export interface T_Store_Redux {
  todos: T_Todo[];
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
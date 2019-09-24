import { AnyAction } from 'redux';

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
  input: string;
  todos: T_Todo[];
}

export interface UpdateInputAction extends AnyAction {
  type: string;
  payload: string;
}

export interface AddTodoAction extends AnyAction {
  type: string;
  payload: T_Todo;
}

export interface TickTodoAction extends AnyAction {
  type: string;
  payload: T_Todo;
}
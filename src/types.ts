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

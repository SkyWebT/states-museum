import React from 'react';

import Todo from '../Todo';
import { T_Store, T_Todo } from '../types';

const TodoContext = React.createContext({} as T_Store);

const TodowithContext: React.FC = ({ children }) => {
  const [todos, setTodo] = React.useState<T_Todo[]>([]);
  const [input, setInput] = React.useState("");
  const addTodo = (todo: T_Todo) => {
    setTodo([...todos, todo]);
    setInput("");
  };
  const tickTodo = (todo: T_Todo) => {
    setTodo(
      todos.map(t => {
        if (todo.id === t.id) {
          return { ...t, done: !t.done };
        } else return t;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ input, setInput, todos, addTodo, tickTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const ContextTodo = () => {
  const store = React.useContext<T_Store>(TodoContext);
  return <Todo store={store} />;
};
export default () => (
  <TodowithContext>
    <ContextTodo />
  </TodowithContext>
);

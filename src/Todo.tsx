import React from 'react';
import { Box, Button } from 'rebass';

import { Checkbox, Input, Label } from '@rebass/forms';

import { BorderBox } from './primitives';
import { T_Store, T_Todo } from './types';

const Todo: React.FC<{ store: T_Store }> = ({ store }) => {
  const addTodo = () => {
    store.addTodo({
      text: store.input,
      done: false,
      id: Date.now()
    });
  };
  const tickTodo = (todo: T_Todo) => {
    store.tickTodo(todo);
  };
  return (
    <BorderBox>
      <Input
        value={store.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          store.setInput(e.target.value)
        }
      />
      <Button onClick={addTodo}>Add</Button>

      {store.todos.map(todo => (
        <Box key={todo.id}>
          <Label p={1}>
            <Checkbox checked={todo.done} onChange={() => tickTodo(todo)} />
            {todo.text}
          </Label>
        </Box>
      ))}
    </BorderBox>
  );
};

export default Todo;

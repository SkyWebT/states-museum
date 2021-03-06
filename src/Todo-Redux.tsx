import React, { useState, useCallback } from "react";
import { Box, Button } from "rebass";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Checkbox, Input, Label } from "@rebass/forms";

import { BorderBox } from "./primitives";
import { T_Store_Redux, T_Todo } from "./types";
import { store, addTodo, tickTodo } from "./candidates/redux";

const Todo: React.FC = () => {
  const [input, updateInput] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state: T_Store_Redux) => state);

  const handleAddTodo = () => { dispatch(addTodo({text: input,done: false,id: Date.now()})); updateInput("") };

  return (
    <BorderBox>
      <Input value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInput(e.target.value)} />
      <Button onClick={handleAddTodo}>Add</Button>

      {store.todos.map(todo => (
        <Box key={todo.id}>
          <Label p={1}>
            <Checkbox checked={todo.done} onChange={() => dispatch(tickTodo(todo))} />
            {todo.text}
          </Label>
        </Box>
      ))}
    </BorderBox>
  );
};

// Helper to return Redux element
export const ElementConstructor = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

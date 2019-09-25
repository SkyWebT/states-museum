import React from "react";
import { Box, Button } from "rebass";
import {  Provider } from 'react-redux';
import { Checkbox, Input, Label } from "@rebass/forms";

import { BorderBox } from "./primitives";
import { T_Store } from "./types";
import { connect } from "react-redux";
import  {store, updateInput, addTodo, tickTodo } from "./candidates/redux";

const Todo: React.FC<{ store: T_Store; updateInput: any; addTodo: any; tickTodo: any }> = ({
  store,
  updateInput,
  addTodo,
  tickTodo
}) => {
  const handleAddTodo = () => {
    addTodo({
      text: store.input,
      done: false,
      id: Date.now()
    });
  };
  return (
    <BorderBox>
      <Input
        value={store.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInput(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add</Button>

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

// connect

const mapStateToProps = (state: T_Store) => {
  return {
    store: state
  };
};
const actionCreators =  {
  updateInput,
  addTodo,
  tickTodo,
};
const ConnectedTodo = connect(
  mapStateToProps,
  actionCreators
)(Todo);
export default ConnectedTodo;







// Helper to return Redux element
export const ElementConstructor = () => (
  <Provider store={store}>
    <ConnectedTodo />
  </Provider>
);
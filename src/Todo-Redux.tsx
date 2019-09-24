import React from "react";
import { Box, Button } from "rebass";
import { Dispatch } from "redux";

import { Checkbox, Input, Label } from "@rebass/forms";

import { BorderBox } from "./primitives";
import { T_Store, T_Todo } from "./types";
import { connect } from "react-redux";
import Actions from "./candidates/redux";

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
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateInput: (input: string) => dispatch(Actions.updateInputAction(input)),
    addTodo: (todo: T_Todo) => dispatch(Actions.addTodoAction(todo)),
    tickTodo: (todo: T_Todo) => dispatch(Actions.tickTodoAction(todo))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

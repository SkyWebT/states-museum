import { createStore, AnyAction, compose } from "redux";

import { T_Todo, T_Store_Redux, UpdateInputAction, AddTodoAction, TickTodoAction } from "../types";
import React from "react";
// actions enums

export const types = {
  UPDATE_INPUT: "UPDATE_INPUT",
  ADD_TODO: "ADD_TODO",
  TICK_TODO: "TICK_TODO"
};

const initialState: T_Store_Redux = {
  input: "",
  todos: []
};
// action creators

export const updateInput = (payload: string): UpdateInputAction => {
  return {
    type: types.UPDATE_INPUT,
    payload
  };
};
export const addTodo = (payload: T_Todo): AddTodoAction => {
  return {
    type: types.ADD_TODO,
    payload
  };
};
export const tickTodo = (payload: T_Todo): TickTodoAction => {
  return {
    type: types.TICK_TODO,
    payload
  };
};

// reducers
const reducer = (state: T_Store_Redux = initialState, action: AnyAction): T_Store_Redux => {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return {
        ...state,
        input: action.payload
      };
    case types.ADD_TODO:
      return {
        ...state,
        input: "",
        todos: [...state.todos, action.payload]
      };
    case types.TICK_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {
          if (action.payload.id === t.id) {
            return { ...t, done: !t.done };
          } else return t;
        })
      };
    default:
      return state;
  }
};

// store 
export const store = createStore(reducer,
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']()
  );

export default {
  types,
  updateInput,
  addTodo,
  tickTodo
};



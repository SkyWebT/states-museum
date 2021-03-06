import { createStore, AnyAction, compose } from "redux";

import { T_Todo, T_Store_Redux } from "../types";
import React from "react";
// actions enums

export const types = {
  UPDATE_INPUT: "UPDATE_INPUT",
  ADD_TODO: "ADD_TODO",
  TICK_TODO: "TICK_TODO"
};

const initialState: T_Store_Redux = {
  todos: []
};
// action creators

export const addTodo = (payload: T_Todo): AnyAction => {
  return {
    type: types.ADD_TODO,
    payload
  };
};
export const tickTodo = (payload: T_Todo): AnyAction => {
  return {
    type: types.TICK_TODO,
    payload
  };
};

// reducers
const reducer = (state: T_Store_Redux = initialState, action: AnyAction): T_Store_Redux => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
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
  addTodo,
  tickTodo
};



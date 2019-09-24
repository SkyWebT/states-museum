import { createStore, AnyAction } from "redux";
import {  Provider } from 'react-redux';
import { T_Todo, T_Store_Redux, UpdateInputAction, AddTodoAction, TickTodoAction } from "../types";
import React from "react";
import Todo from "../Todo-Redux";
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

const updateInputAction = (payload: string): AnyAction => {
  return {
    type: types.UPDATE_INPUT,
    payload
  };
};
const addTodoAction = (payload: T_Todo): AnyAction => {
  return {
    type: types.ADD_TODO,
    payload
  };
};
const tickTodoAction = (payload: T_Todo): AnyAction => {
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
        input: (action as UpdateInputAction).payload
      };
    case types.ADD_TODO:
      return {
        ...state,
        input: "",
        todos: [...state.todos, (action as AddTodoAction).payload]
      };
    case types.TICK_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {
          if ((action as TickTodoAction).payload.id === t.id) {
            return { ...t, done: !t.done };
          } else return t;
        })
      };
    default:
      return state;
  }
};

// store 
export const store = createStore(reducer);

export default {
  types,
  updateInputAction,
  addTodoAction,
  tickTodoAction
};

export const ElementConstructor = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

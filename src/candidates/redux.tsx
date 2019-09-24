import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import Todo from '../Todo';
import { T_Store, T_Todo } from '../types';

// state
interface State {
  input: string;
  todos: T_Todo[];
}
const initialState: State = {
  input: '',
  todos: [],
};

// actions enums

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const ADD_TODO = 'ADD_TODO';
export const TICK_TODO = 'TICK_TODO';

// actions

interface UpdateInputAction {
  type: typeof UPDATE_INPUT;
  payload: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: T_Todo;
}

interface TickTodoAction {
  type: typeof TICK_TODO;
  payload: T_Todo;
}

type Actions = UpdateInputAction | AddTodoAction | TickTodoAction;

// action creators

const updateInputAction = (payload: string): UpdateInputAction => {
  return {
    type: UPDATE_INPUT,
    payload,
  };
};
const addTodoAction = (payload: T_Todo): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload,
  };
};
const tickTodoAction = (payload: T_Todo): TickTodoAction => {
  return {
    type: TICK_TODO,
    payload,
  };
};

// reducers
const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        input: '',
        todos: [...state.todos, action.payload],
      };
    case TICK_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {
          if (action.payload.id === t.id) {
            return { ...t, done: !t.done };
          } else return t;
        }),
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// connect

interface Props {
  input: string;
  todos: T_Todo[];
  updateInputAction: typeof updateInputAction;
  addTodoAction: typeof addTodoAction;
  tickTodoAction: typeof tickTodoAction;
}
const ReduxTodo_: React.FC<Props> = ({
  input,
  todos,
  updateInputAction,
  addTodoAction,
  tickTodoAction,
}) => {
  const store = {
    input,
    todos,
    setInput: updateInputAction,
    addTodo: addTodoAction,
    tickTodo: tickTodoAction,
  } as T_Store;
  return <Todo store={store} />;
};
const mapStateToProps = (state: State) => {
  return state;
};
const con = connect(
  mapStateToProps,
  {
    updateInputAction,
    addTodoAction,
    tickTodoAction,
  }
);

const ReduxTodo = con(ReduxTodo_);

export default () => (
  <Provider store={store}>
    <ReduxTodo />
  </Provider>
);

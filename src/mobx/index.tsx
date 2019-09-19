import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

import Todo from '../Todo';
import { T_Todo } from '../types';

const ObserverTodo = observer(Todo);

class TodoStore {
  @observable input = "";
  @observable todos: T_Todo[] = [];

  @action setInput(v: string) {
    this.input = v;
  }
  @action addTodo(todo: T_Todo) {
    this.todos.push(todo);
    this.input = "";
  }
  @action tickTodo(todo: T_Todo) {
    const target = this.todos.find(t => t.id === todo.id);
    if (target) {
      target.done = !target.done;
    }
  }
}
const store = new TodoStore();

const MobxTodo = () => {
  return <ObserverTodo store={store} />;
};

export default MobxTodo;

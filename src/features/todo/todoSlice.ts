import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FilterType from './filterType';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';

export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export interface TodoState {
  todos: Todo[],
  filter: FilterType
}

const initialState: TodoState = {
  todos: [],
  filter: FilterType.All,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;

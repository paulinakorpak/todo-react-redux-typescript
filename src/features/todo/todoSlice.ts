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
    toggleCompleted: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo, removeTodo, toggleCompleted, setFilter,
} = todoSlice.actions;

export const selectTodos = (state: RootState) => {
  if (state.todo.filter === FilterType.Active) {
    return state.todo.todos.filter((item: Todo) => !item.completed);
  }
  if (state.todo.filter === FilterType.Done) {
    return state.todo.todos.filter((item: Todo) => item.completed);
  }

  return state.todo.todos;
};

export default todoSlice.reducer;

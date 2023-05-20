import { ITodoAction, ITodoState, TodoActionTypes } from "../types/types";

export const initialState = {
  todos: [],
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: ITodoAction
) => {
  switch (action.type) {
    case TodoActionTypes.CREATE_TODO_SUCCESS:
      return { todos: [...state.todos, action.payload] };
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

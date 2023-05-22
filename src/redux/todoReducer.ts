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

    case TodoActionTypes.GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };

    case TodoActionTypes.COMPLETE_TODO_SUCCESS: {
      const todosArr = [...state.todos]
      const completedIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload);

        if (completedIndex === -1) {
          return state
        }
        todosArr[completedIndex].done = !todosArr[completedIndex].done
        return {...state, todos: todosArr}
    }

    default:
      return state;
  }
};

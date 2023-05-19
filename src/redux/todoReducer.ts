import { ITodoAction, ITodoState, TodoActionTypes } from "../types/types";

export const initialState = {
  todos: []
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: ITodoAction
) => {
    switch (action.type) {
        case TodoActionTypes.CREATE_TODO_SUCCESS:
            return {todos:[...state.todos, action.payload]}    
        default:
            return state;
    }
};

export enum TodoActionTypes {
  GET_TODOS = "GET_TODOS",
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  COMPLETE_TODO = "COMPLETE_TODO",
  CHANGE_TODO = "CHANGE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}


export interface ITodoReducer {
  todoReducer: ITodoState;
}
export interface ICreateTodoAction {
  type: TodoActionTypes.CREATE_TODO_SUCCESS;
  payload: string;
}

export type ITodoAction = ICreateTodoAction

export interface IItemProps {
  todo:ITodo;
}
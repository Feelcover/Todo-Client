export enum TodoActionTypes {
  GET_TODOS = "GET_TODOS",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  COMPLETE_TODO = "COMPLETE_TODO",
  CHANGE_TODO = "CHANGE_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
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

export interface IGetTodosAction {
  type: TodoActionTypes.GET_TODOS_SUCCESS | TodoActionTypes.GET_TODOS;
  payload?: ITodoState;
}
export interface ICreateTodoAction {
  type: TodoActionTypes.CREATE_TODO_SUCCESS | TodoActionTypes.CREATE_TODO;
  payload: string;
}

export interface IDeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO_SUCCESS | TodoActionTypes.DELETE_TODO;
  payload: string;
}

export type ITodoAction =
  | ICreateTodoAction
  | IDeleteTodoAction
  | IGetTodosAction
export interface IItemProps {
  todo: ITodo;
  removeTodo: (arg0: string) => void;
}

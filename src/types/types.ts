export enum TodoActionTypes {
  GET_TODOS = "GET_TODOS",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  COMPLETE_TODO = "COMPLETE_TODO",
  COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS",
  EDIT_TODO = "EDIT_TODO",
  EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS",
  DELETE_TODO = "DELETE_TODO",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
  SHOW_ALERT = "SHOW_ALERT",
  HIDE_ALERT = "HIDE_ALERT",
}

export interface IAlertState {
  alertText: string;
  alertStatus: string;
}

export interface IShowAlertAction {
  type: TodoActionTypes.SHOW_ALERT;
  payload: string;
  status: string;
}

export interface IHideAlertAction {
  type: TodoActionTypes.HIDE_ALERT;
}

export interface IAlertProps {
  props: IAlertState;
}

export interface IAlertReducer {
  alertReducer: IAlertState;
}

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}

export interface IEditTodo {
  title: string;
  id: string;
  done: boolean;
}

export interface ITodoReducer {
  todoReducer: ITodoState;
}

export interface IItemProps {
  todo: ITodo;
  removeTodo: (arg0: string) => void;
  doneTodo: (arg0: string, arg1: boolean) => void;
  changeTodo: (arg0: string, arg1: boolean, arg2: string) => void;
}

export interface IGetTodosAction {
  type: TodoActionTypes.GET_TODOS_SUCCESS | TodoActionTypes.GET_TODOS;
  payload?: ITodoState;
}
export interface ICreateTodoAction {
  type: TodoActionTypes.CREATE_TODO_SUCCESS | TodoActionTypes.CREATE_TODO;
  payload: string;
}

export interface ICompleteTodoAction<T> {
  type: TodoActionTypes.COMPLETE_TODO_SUCCESS | TodoActionTypes.COMPLETE_TODO;
  payload: T;
}

export interface IEditTodoAction {
  type: TodoActionTypes.EDIT_TODO_SUCCESS | TodoActionTypes.EDIT_TODO;
  payload: IEditTodo;
  id: string;
}

export interface IDeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO_SUCCESS | TodoActionTypes.DELETE_TODO;
  payload: string;
}

export type ITodoAction =
  | ICreateTodoAction
  | IDeleteTodoAction
  | IGetTodosAction
  | ICompleteTodoAction<ITodo | string>
  | IEditTodoAction;

export type IAlertAction = IShowAlertAction | IHideAlertAction;

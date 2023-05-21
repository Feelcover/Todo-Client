import {
  ICreateTodoAction,
  IDeleteTodoAction,
  ITodo,
  TodoActionTypes,
} from "../../types/types";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../api";

function* sagaGetTodos(): Generator<Effect, void, ITodo[]> {
  try {
    const todos = yield call(TodoApi.getTodos);

    yield put({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: todos });
  } catch (err) {
    console.log(err);
  }
}

function* sagaCreateTodo(action: ICreateTodoAction): Generator<Effect, void> {
  try {
    const todoObj: Partial<ITodo> = {
      title: action.payload,
      done: false,
    };
    const todo = yield call(TodoApi.createTodo, todoObj);

    yield put({ type: TodoActionTypes.CREATE_TODO_SUCCESS, payload: todo });
  } catch (err) {
    console.log(err);
  }
}

function* sagaDeleteTodo(action: IDeleteTodoAction): Generator<Effect, void> {
  try {
    yield call(TodoApi.deleteTodo, action.payload);

    yield put({
      type: TodoActionTypes.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err) {
    console.log(err);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(TodoActionTypes.GET_TODOS, sagaGetTodos);
  yield takeEvery(TodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(TodoActionTypes.DELETE_TODO, sagaDeleteTodo);
}

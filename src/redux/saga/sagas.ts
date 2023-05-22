import {
  ICompleteTodoAction,
  ICreateTodoAction,
  IDeleteTodoAction,
  IEditTodoAction,
  ITodo,
  TodoActionTypes,
} from "../../types/types";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../api";
import { hideAlert, showAlert } from "../actions";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function* sagaGetTodos(): Generator<Effect, void, ITodo[]> {
  try {
    const todos = yield call(TodoApi.getTodos);

    yield put({ type: TodoActionTypes.GET_TODOS_SUCCESS, payload: todos });
    yield put(showAlert("Задачи получены", "success"));
    yield call(delay, 2000);
    yield put(hideAlert());
  } catch (err) {
    yield put(showAlert("Не удалось получить задачи", "warning"));
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

    yield put(showAlert("Задача создана", "success"));
    yield call(delay, 3000);
    yield put(hideAlert());
  } catch (err) {
    yield put(showAlert("Не удалось создать задачу", "warning"));
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

    yield put(showAlert("Задача удалена", "success"));
    yield call(delay, 2000);
    yield put(hideAlert());
  } catch (err) {
    yield put(showAlert("Ошибка удаления задачи", "warning"));
    console.log(err);
  }
}

function* sagaCompleteTodo(
  action: ICompleteTodoAction<ITodo>
): Generator<Effect, void> {
  try {
    const todoObj = {
      done: action.payload.done,
      id: action.payload.id,
    };
    yield call(TodoApi.completeTodo, todoObj);

    yield put({
      type: TodoActionTypes.COMPLETE_TODO_SUCCESS,
      payload: action.payload.id,
    });

    yield put(
      showAlert(
        `Задача ${action.payload.done ? "завершена" : "возобновлена"}`,
        "success"
      )
    );
    yield call(delay, 2000);
    yield put(hideAlert());
  } catch (err) {
    yield put(showAlert("Ошибка завершения задачи", "warning"));
    console.log(err);
  }
}

function* sagaEditTodo(
  action: IEditTodoAction
): Generator<Effect, void, ITodo> {
  try {
    const todoObj = {
      done: action.payload.done,
      id: action.payload.id,
      title: action.payload.title,
    };
    const todo = yield call(TodoApi.editTodo, todoObj);

    yield put({
      type: TodoActionTypes.EDIT_TODO_SUCCESS,
      payload: todo,
      id: action.payload.id,
    });

    yield put(showAlert("Задача изменена", "success"));
    yield call(delay, 2000);
    yield put(hideAlert());
  } catch (err) {
    yield put(showAlert("Ошибка редактирования задачи", "warning"));
    console.log(err);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(TodoActionTypes.GET_TODOS, sagaGetTodos);
  yield takeEvery(TodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(TodoActionTypes.COMPLETE_TODO, sagaCompleteTodo);
  yield takeEvery(TodoActionTypes.DELETE_TODO, sagaDeleteTodo);
  yield takeEvery(TodoActionTypes.EDIT_TODO, sagaEditTodo);
}

import { ICreateTodoAction, ITodo, TodoActionTypes } from "../../types/types";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../api";


function* sagaCreateTodo(action:ICreateTodoAction): Generator<Effect, void> {
    try {
        const todoObj: Partial<ITodo> = {
            title: action.payload,
            done: false,
        }
        
        const todo = yield call(TodoApi.createTodo, todoObj);

        yield put({type:TodoActionTypes.CREATE_TODO, payload: todo})
    } catch (err) {
        console.log(err);
    }
}

export function* sagaWatcher(): Generator<Effect, void> {
    yield takeEvery(TodoActionTypes.CREATE_TODO, sagaCreateTodo)
}
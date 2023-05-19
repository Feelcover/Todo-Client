import { ICreateTodoAction, ITodo, TodoActionTypes } from "../../types/types";
import { call, Effect, put } from "redux-saga/effects";
import { TodoApi } from "../../api";


function* sagaCreateTodo(action:ICreateTodoAction): Generator<Effect, void> {
    try {
        const todoObj: Partial<ITodo> = {
            title: action.payload,
            done: false,
        }
        
        const todo = yield call(TodoApi.createTodo, todoObj);

        yield put({type:TodoActionTypes.CREATE_TODO, payload: todoObj})
    } catch (err) {
        console.log(err);
        
    }
}
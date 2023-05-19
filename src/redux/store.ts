import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./saga/sagas";

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher)

import { combineReducers } from "redux";
import TodoReducer from './todo';

export const rootReducer = combineReducers({
    todo: TodoReducer
});
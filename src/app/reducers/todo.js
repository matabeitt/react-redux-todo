import { filter, without } from "lodash";
import { TODO_DELETE, TODO_SAVE, TODO_SELECT } from "../constants";

const initialState = {
    list : [],
    current: null,
}

const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case TODO_SAVE:
        return { ...state, list: [...state.list, payload] }
    case TODO_DELETE:
        return {...state, list: filter(state.list, (item) => item.id != payload)}
    case TODO_SELECT:
        return {...state, current: filter(state.list, (item) => item.id == payload)[0]}
    default:
        return state;
    }
}

export const todoSelector = state => state.todo.list;
export const todoCurrentSelector = state => state.todo.current;

export default TodoReducer;
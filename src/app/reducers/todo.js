import { filter, without } from "lodash";
import { TODO_DELETE, TODO_SAVE, TODO_SELECT, TODO_START, TODO_STOP } from "../constants";

const initialState = {
    list : [],
    current: {
        id: '',
        title: '',
        createdOn: '',
    },
}

const TodoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case TODO_SAVE:
        return { ...state, list: [...state.list, payload] }
    case TODO_DELETE:
        return {...state, list: filter(state.list, (item) => item.id != payload)}
    case TODO_SELECT:
        return {...state, current: filter(state.list, (item) => item.id == payload)[0]}
    case TODO_START:
        return {...state, current: {...filter(state.list, (item) => item.id == payload)[0], lastStartedOn: Date.now()}}
    case TODO_STOP:
        const { id, elapsed } = payload
        return {...state, current: {...filter(state.list, (item) => item.id == id)[0], totalTime: (state.current.totalTime || 0) + elapsed}}
    default:
        return state;
    }
}

export const todoSelector = state => state.todo.list;
export const todoCurrentSelector = state => state.todo.current;

export default TodoReducer;
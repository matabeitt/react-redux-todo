import { nanoid } from "@reduxjs/toolkit";
import { TODO_DELETE, TODO_SAVE, TODO_SELECT } from "../constants";

export const saveTodo = (text) => ({
    type: TODO_SAVE,
    payload: {
        title: text,
        id: nanoid(),
        createdOn: Date.now(),
    }
});

export const removeTodo = (id) => ({
    type: TODO_DELETE,
    payload: id
})

export const selectTodo = (id) => ({
    type: TODO_SELECT,
    payload: id
})

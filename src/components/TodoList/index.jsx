import React, { useState } from 'react'
import TodoItem from '../TodoItem';

const TodoList = ({todoList}) => {
    
    const todoListItems = (items) => (
        <>
            {
                items.map(({title, id, createdOn}, idx)=> (
                    <TodoItem key={id} title={title} createdOn={createdOn} id={id}/>
                ))
            }
        </>
    );

    return (
        <div>
            {todoList && todoListItems(todoList)}
        </div>
    )
}

const ListItemActions = () => {

}


export default TodoList;

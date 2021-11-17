import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, selectTodo } from '../../app/actions/todo'
import { 
    PlayIcon,
    PauseIcon,
    CheckCircleIcon
 } from '@heroicons/react/outline';

function TodoItem({title, id, createdOn}) {
    const dispatch = useDispatch();
    
    const handleSelect = () => {
        dispatch(selectTodo(id));
    };

    return (
        <div
        onClick={handleSelect} 
        className={`m-3 py-2 px-3 filter drop-shadow-md rounded text-gray-100 bg-blue-400 flex flex-row`}>
            
            <CheckCircleIcon className={`w-5 h-5`}/>
            <div className={`px-3 flex-grow`}>{title}</div>
            <div className={`flex flex-row`}>
                <PlayIcon className={`w-5 h-5`}/>
                <PauseIcon className={`w-5 h-5`}/>
            </div>
        </div>
    )
}

export default TodoItem

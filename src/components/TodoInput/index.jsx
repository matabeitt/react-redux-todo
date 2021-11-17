import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../app/actions';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [note, setNote] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveTodo(note));
        setNote('');
    }

    return (
        <div className="flex-shrink p-5">
            <form onSubmit={handleSubmit}>
                <input
                value={note}
                onChange={event => setNote(event.target.value)}
                className="p-1 h-8 w-full filter drop-shadow-md" 
                placeholder="Todo Note" 
                type="text"/>
            </form>
        </div>
    )
}

export default TodoInput;

import React, { useEffect, useState } from 'react'
import { useTimer } from '../../app/hooks/useTimer';
import { useSelector } from 'react-redux'
import { todoCurrentSelector } from '../../app/reducers/todo'
import { 
    PlayIcon,
    PauseIcon,
 } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { startTodo, stopTodo } from '../../app/actions/todo';

const TodoTimer = () => {
    const dispatch = useDispatch();
    const {title, id, createdOn} = useSelector(todoCurrentSelector) || {}
    const [time, elapsed, pauseTimer, startContinueTimer] = useTimer(new Date());
    
    const handleStart = () => {
        dispatch(startTodo(id));
        startContinueTimer();
    }

    const handleStop = () => {
        dispatch(stopTodo(id, elapsed));
        pauseTimer();
    }
    const date = new Date(createdOn);

    
    return (
        <div className={`flex-grow flex flex-col justify-around p-5`}>
            <div className={`flex flex-row justify-around`}>
                <PlayIcon onClick={handleStart} className={`w-8 h-8`}/>
                <PauseIcon onClick={handleStop} className={`w-8 h-8`}/>
            </div>
            <Clock className={`text-center`} milliseconds={elapsed} />
            <div className={`text-left text-center`}>
                <h2 className={`text-5xl`}>{title}</h2>
                <p className={`text-xl`}>{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</p>
            </div>
        </div>
    )
}

const Clock = ({milliseconds}) => {
    const converted = Math.floor((milliseconds) / 1000);
    const hours = Math.floor((converted) * (1/60) * (1/60));
    const minutes = Math.floor((converted) * (1/60));
    const seconds = converted % 60;
    return (
        <p className={`text-8xl text-center`}>
            {`${hours}`.padStart(2, 0)}:{`${minutes}`.padStart(2, 0)}:{`${seconds}`.padStart(2, 0)}
        </p>
    )
}



const mapStateToProps = (state, ownProps) => {
    // get props from parent
    // return new props into child
}

export default TodoTimer

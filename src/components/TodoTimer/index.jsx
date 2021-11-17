import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { todoCurrentSelector } from '../../app/reducers/todo'
import { 
    PlayIcon,
    PauseIcon,
 } from '@heroicons/react/outline';

const TodoTimer = () => {
    const {title, id, createdOn} = useSelector(todoCurrentSelector)
    const [time, elapsed, pauseTimer, startContinueTimer] = useTimer(new Date());
    
    const date = new Date(createdOn);

    return (
        <div className={`flex-grow flex flex-col justify-around p-5`}>
            <div className={`flex flex-row justify-around`}>
                <PlayIcon onClick={startContinueTimer} className={`w-8 h-8`}/>
                <PauseIcon onClick={pauseTimer} className={`w-8 h-8`}/>
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

const useTimer = (currentDate) => {
    const [date, setDate] = useState(currentDate);
    const [elapsed, setElapsed] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let ID = setInterval(() => tick(), 1000);
        return () => {clearInterval(ID);}
    });

    const tick = () => {
        if (paused) return;
        setDate(new Date());
        setElapsed(elapsed + 1000);
    }

    const pauseStopTime = () => setPaused(true);
    const startContinueTimer = () => setPaused (false);

    return [date, elapsed, pauseStopTime, startContinueTimer];
}

export default TodoTimer

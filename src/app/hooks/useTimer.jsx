import React from "react";
import { useState, useEffect } from "react";

export const useTimer = (currentDate) => {
    const [date, setDate] = useState(currentDate);
    const [elapsed, setElapsed] = useState(0);
    const [paused, setPaused] = useState(true);

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
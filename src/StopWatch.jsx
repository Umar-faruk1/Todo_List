import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }
        return () => clearInterval(intervalIdRef.current);
    }, [isRunning, elapsedTime]);

    const start = () => {
        setIsRunning(true);
    };
    const stop = () => {
        setIsRunning(false);
    };
    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };
    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, '0');
        let seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
        let milliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className='watch-container'>
            <div className='display'>{formatTime()}</div>
            <div className="controls">
                <button className='start-btn' onClick={start}>Start</button>
                <button className='stop-btn' onClick={stop}>Stop</button>
                <button className='reset-btn' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;

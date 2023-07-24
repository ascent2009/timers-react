import React from 'react';

interface ITimer {
    msec: number;
    sec: number;
    min: number;
    start: boolean;
    startTimer?: () => void;
    resetTimer?: () => void;
}

export const timerDefaultValues: ITimer = {
    msec: 0,
    sec: 0,
    min: 0,
    start: false,
};

export const TimerContext = React.createContext(timerDefaultValues);

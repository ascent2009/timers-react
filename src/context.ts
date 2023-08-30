import React from 'react';

interface ITimer {
    start: boolean;
    startTimer?: () => void;
    resetTimer?: () => void;
}

interface ICountdown extends Omit<ITimer, 'msec'> {
    // inputValues: { minutes: number; seconds: number };
    // startProgress: number;
    // isProgress: boolean;
    // isDisplay: boolean;
    // handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// export const timerDefaultValues: ITimer = {
//     msec: 0,
//     sec: 0,
//     min: 0,
//     start: false,
// };

export const countdownDefaultValues: ICountdown = {
    // sec: 0,
    // min: 0,
    // inputValues: { minutes: 0, seconds: 0 },
    start: false,
    // startProgress: 0,
    // isProgress: false,
    // isDisplay: false,
};

// export const TimerContext = React.createContext(timerDefaultValues);
export const CountdownContext = React.createContext(countdownDefaultValues);

import { useState, useEffect, useCallback, useRef } from 'react';
import useSound from 'use-sound';
import sound from './send.mp3';

type Timer = NodeJS.Timeout | number | string | undefined;

export const useCountdown = () => {
    const secRef = useRef<number>(0);
    const minRef = useRef<number>(0);
    const timerRef = useRef<Timer>(0);
    const displayRef = useRef<boolean>(false);
    const intervalRef = useRef<Timer>(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [start, setStart] = useState(false);
    const [startProgress, setStartProgress] = useState(0);
    const [isProgress, setIsProgress] = useState(false);
    const [play] = useSound(sound);

    useEffect(() => {
        if (start) {
            if (!min && !sec) {
                play();
                return;
            }

            timerRef.current = setTimeout(() => {
                setSec(prev => prev - 1);
                if (!sec) {
                    setMin(min => (min >= 1 ? min - 1 : 0));
                    setSec(59);
                }
            }, 1000);
        }
        secRef.current = sec;
        minRef.current = min;

        return () => clearTimeout(timerRef.current);
    }, [min, sec, play, start]);

    useEffect(() => {
        if (isProgress) {
            if (startProgress >= 100) {
                return;
            }
            let time = ((+inputMinutes * 60 + +inputSeconds) * 1000) / 100;
            intervalRef.current = setTimeout(() => {
                setStartProgress(prev => prev + 1);
            }, time);
        }

        return () => clearTimeout(intervalRef.current);
    }, [inputMinutes, inputSeconds, startProgress, isProgress]);

    const handleInputMinutesChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value;
        minRef.current = value;
        setInputMinutes(value);
    }, []);

    const handleInputSecondsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value;
        secRef.current = value;
        setInputSeconds(value);
    }, []);

    const startTimer = useCallback(() => {
        setStart(start => !start);
        displayRef.current = true;
        setIsProgress(isProgress => !isProgress);
        setMin(minRef.current);
        setSec(secRef.current);
    }, []);

    const resetTimer = useCallback(() => {
        setStart(false);
        setIsProgress(false);
        displayRef.current = false;
        setSec(0);
        setMin(0);
        secRef.current = 0;
        minRef.current = 0;
        setInputMinutes(minRef.current);
        setInputSeconds(secRef.current);
        setStartProgress(0);
    }, []);

    return {
        sec,
        min,
        start,
        startProgress,
        isProgress,
        inputMinutes,
        inputSeconds,
        handleInputMinutesChange,
        handleInputSecondsChange,
        startTimer,
        resetTimer,
        displayRef,
    };
};

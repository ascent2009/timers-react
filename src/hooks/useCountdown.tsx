import { useState, useEffect, useCallback, useRef } from 'react';
import useSound from 'use-sound';
import sound from './send.mp3';

type Timer = NodeJS.Timeout | number | string | undefined;

export const useCountdown = () => {
    const secRef = useRef<number>(0);
    const minRef = useRef<number>(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [start, setStart] = useState(false);
    const [startProgress, setStartProgress] = useState(0);
    const [isProgress, setIsProgress] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);
    const [play] = useSound(sound);

    useEffect(() => {
        let timer: Timer;

        if (start) {
            if (!min && !sec) {
                play();
                return;
            }
            timer = setTimeout(() => {
                setSec(prev => prev - 1);
                if (!sec) {
                    setMin(min => (min >= 1 ? min - 1 : 0));
                    setSec(59);
                }
            }, 1000);
        }
        secRef.current = sec;
        minRef.current = min;

        return () => clearTimeout(timer);
    }, [min, sec, start, play]);

    useEffect(() => {
        let interval: Timer;
        if (isProgress) {
            if (startProgress >= 100) {
                return;
            }
            let time = ((+inputMinutes * 60 + +inputSeconds) * 1000) / 100;

            interval = setTimeout(() => {
                setStartProgress(prev => prev + 1);
            }, time);
        }
        return () => clearTimeout(interval);
    }, [isProgress, inputMinutes, inputSeconds, startProgress]);

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
        setIsDisplay(true);
        setIsProgress(isProgress => !isProgress);
        setMin(minRef.current);
        setSec(secRef.current);
    }, []);

    const resetTimer = useCallback(() => {
        setStart(false);
        setIsProgress(false);
        setIsDisplay(false);
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
        isDisplay,
        inputMinutes,
        inputSeconds,
        handleInputMinutesChange,
        handleInputSecondsChange,
        startTimer,
        resetTimer,
    };
};

import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { SMain } from '../assets/styles/timer.styles';
import { SPageNav } from '../assets/styles/nav.styles';
import Title from './Title';
import { DisplayCountdown } from './Display';
import InputCount from './InputCount';
import Button from './Button';
import Progress from './Progress';
import useSound from 'use-sound';
import sound from '../assets/send.mp3';
import { checkZeroValue } from '../utils/helpers';

type Timer = NodeJS.Timeout | number | string | undefined;

const Countdown: React.FC = memo(() => {
    const defaultFormValue = {
        min: 0,
        sec: 0,
    };
    const [inputValues, setInputValues] = useState(defaultFormValue);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [start, setStart] = useState(false);
    const [startProgress, setStartProgress] = useState(0);
    const [isProgress, setIsProgress] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);
    const [play] = useSound(sound);

    // const checkZeroValue = [min, sec].some(u => u > 0);

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
        return () => clearTimeout(timer);
    }, [min, sec, start, play]);

    useEffect(() => {
        const { min, sec } = inputValues;
        let interval: Timer;
        if (isProgress) {
            if (startProgress >= 100) {
                return;
            }
            let time = ((+min * 60 + +sec) * 1000) / 100;

            interval = setTimeout(() => {
                setStartProgress(prev => prev + 1);
            }, time);
        }
        return () => clearTimeout(interval);
    }, [isProgress, inputValues, startProgress]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const startTimer = () => {
        setStart(!start);
        setIsDisplay(true);
        setIsProgress(!isProgress);
        if (!checkZeroValue([min, sec])) {
            setMin(+inputValues.min);
            setSec(+inputValues.sec);
        }
    };

    const resetTimer = () => {
        setStart(false);
        setIsProgress(false);
        setIsDisplay(false);
        setSec(0);
        setMin(0);
        setStartProgress(0);
        setInputValues(defaultFormValue);
    };

    return (
        <SMain>
            <SPageNav>
                <Link to='/'>На главную</Link>
                <Link to='/timer'>Timer</Link>
            </SPageNav>

            <Title title='Countdown' />
            <InputCount
                onChange={handleInputChange}
                start={start}
                checkZeroValue={checkZeroValue([min, sec])}
                inputValues={inputValues}
                minutes={min}
                seconds={sec}
                isDisplay={isDisplay}
            />

            <DisplayCountdown min={min} sec={sec} isDisplay={isDisplay}>
                <Progress
                    startProgress={startProgress}
                    checkZeroValue={checkZeroValue([min, sec])}
                    isProgress={isProgress}
                    min={min}
                    sec={sec}
                />
            </DisplayCountdown>

            <Button
                inputValues={inputValues}
                start={start}
                startTimer={startTimer}
                resetTimer={resetTimer}
                startProgress={startProgress}
                checkZeroValue={checkZeroValue([min, sec])}
            />
        </SMain>
    );
});

export default Countdown;

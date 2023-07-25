import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { SMain } from '../../assets/styles/timer.styles';
import { SPageNav } from '../../assets/styles/nav.styles';
import Title from '../Title';
import Display from './Display';
import Input from './Input';
import Button from './Button';
import Progress from './Progress';
import useSound from 'use-sound';
import sound from '../../assets/send.mp3';
import { checkZeroValue } from '../../utils/helpers';
import { countdownDefaultValues, CountdownContext } from '../../context';

type Timer = NodeJS.Timeout | number | string | undefined;

const Countdown: React.FC = memo(() => {
    const defaultFormValue = {
        minutes: 0,
        seconds: 0,
    };
    const [inputValues, setInputValues] = useState(defaultFormValue);
    const [sec, setSec] = useState(countdownDefaultValues.sec);
    const [min, setMin] = useState(countdownDefaultValues.sec);
    const [start, setStart] = useState(countdownDefaultValues.start);
    const [startProgress, setStartProgress] = useState(countdownDefaultValues.startProgress);
    const [isProgress, setIsProgress] = useState(countdownDefaultValues.isProgress);
    const [isDisplay, setIsDisplay] = useState(countdownDefaultValues.isDisplay);
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
        return () => clearTimeout(timer);
    }, [min, sec, start, play]);

    useEffect(() => {
        const { minutes, seconds } = inputValues;
        let interval: Timer;
        if (isProgress) {
            if (startProgress >= 100) {
                return;
            }
            let time = ((+minutes * 60 + +seconds) * 1000) / 100;

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
            setMin(+inputValues.minutes);
            setSec(+inputValues.seconds);
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
            <CountdownContext.Provider
                value={{
                    inputValues,
                    sec,
                    min,
                    start,
                    startProgress,
                    isProgress,
                    isDisplay,
                    startTimer,
                    resetTimer,
                    handleInputChange,
                }}
            >
                <Input />

                <Display>
                    <Progress />
                </Display>

                <Button />
            </CountdownContext.Provider>
        </SMain>
    );
});

export default Countdown;

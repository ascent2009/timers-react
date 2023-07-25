import { memo, useState, useEffect } from 'react';
import { SContainer, SField } from '../../assets/styles/display.styles';
import ButtonTimer from './Button';
import { timerDefaultValues, TimerContext } from '../../context';

const Display: React.FC = () => {
    const [msec, setMsec] = useState(timerDefaultValues.msec);
    const [sec, setSec] = useState(timerDefaultValues.sec);
    const [min, setMin] = useState(timerDefaultValues.min);
    const [start, setStart] = useState(timerDefaultValues.start);

    const startTimer = () => {
        setStart(!start);
    };

    const resetTimer = () => {
        setStart(false);
        setMsec(0);
        setSec(0);
        setMin(0);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout | number | string | undefined;
        if (start) {
            timer = setInterval(() => {
                setMsec(msec + 1);
                if (msec === 99) {
                    setSec(sec + 1);
                    setMsec(0);
                }
                if (sec === 59) {
                    setMin(min + 1);
                    setSec(0);
                }
            }, 10);
        }
        return () => clearInterval(timer);
    }, [start, min, sec, msec]);
    return (
        <TimerContext.Provider
            value={{
                min,
                sec,
                msec,
                start,
                startTimer,
                resetTimer,
            }}
        >
            <SContainer border='none' fontSize='120px' padding='80px' flexDirection='row' justifyContent='center'>
                <SField>{min < 10 ? `0${min}` : min}</SField> :<SField>{sec < 10 ? `0${sec}` : sec}</SField> :
                <SField>{msec < 10 ? `0${msec}` : msec}</SField>
            </SContainer>
            <ButtonTimer />
        </TimerContext.Provider>
    );
};

export default memo(Display);

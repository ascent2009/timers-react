import { useState, useCallback, memo, useRef } from 'react';
import Button from './Button';
import Display from './Display';

const Container = () => {
    const startRef = useRef<any>();
    const timerRef = useRef<any>();
    const [start, setStart] = useState(false);

    const startTimer = useCallback(() => {
        setStart(!start);
        startRef.current = !start;
    }, [start]);

    const resetTimer = useCallback(() => {
        setStart(false);
        startRef.current = false;

        clearInterval(timerRef.current);
        timerRef.current = 0;
        console.log(timerRef.current);
    }, []);

    return (
        <>
            <Display start={start} timerRef={timerRef} />
            <Button startTimer={startTimer} resetTimer={resetTimer} startRef={startRef} />
        </>
    );
};

export default memo(Container);

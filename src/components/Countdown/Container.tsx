import { memo, useState, useRef } from 'react';
import Display from './Display';
import Input from './Input';
import Button from './Button';
import { countdownDefaultValues, CountdownContext } from '../../context';

const Container: React.FC = () => {
    const [start, setStart] = useState(countdownDefaultValues.start);
    const displayRef = useRef<any>();
    const progressRef = useRef<any>();
    const inputMinRef = useRef<number | any>(0);

    const startTimer = () => {
        setStart(!start);
        displayRef.current = true;
        progressRef.current = true;
    };

    const resetTimer = () => {
        setStart(false);
        progressRef.current = false;
        displayRef.current = false;
        inputMinRef.current = 0;
    };

    return (
        <CountdownContext.Provider
            value={{
                start,
                startTimer,
                resetTimer,
            }}
        >
            <Input displayRef={displayRef} inputMinRef={inputMinRef} />
            <Display displayRef={displayRef} progressRef={progressRef} inputMinRef={inputMinRef} />
            <Button />
        </CountdownContext.Provider>
    );
};

export default memo(Container);

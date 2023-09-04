import { memo } from 'react';
import Display from './Display';
import Input from './Input';
import Button from './Button';
import Progress from './Progress';
import { useCountdown } from '../../hooks/useCountdown';

const Container: React.FC = () => {
    const {
        inputMinutes,
        inputSeconds,
        sec,
        min,
        start,
        startProgress,
        isProgress,
        isDisplay,
        startTimer,
        resetTimer,
        handleInputMinutesChange,
        handleInputSecondsChange,
    } = useCountdown();

    return (
        <>
            <Input
                start={start}
                isDisplay={isDisplay}
                inputMinutes={inputMinutes}
                inputSeconds={inputSeconds}
                handleInputMinutesChange={handleInputMinutesChange}
                handleInputSecondsChange={handleInputSecondsChange}
                min={min}
                sec={sec}
            />
            <Display isDisplay={isDisplay} min={min} sec={sec}>
                <Progress startProgress={startProgress} isProgress={isProgress} min={min} sec={sec} />
            </Display>
            <Button start={start} startTimer={startTimer} resetTimer={resetTimer} />
        </>
    );
};

export default memo(Container);

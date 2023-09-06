import React, { memo } from 'react';
import { Box } from '@mui/material';
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
        startTimer,
        resetTimer,
        handleInputMinutesChange,
        handleInputSecondsChange,
        displayRef,
    } = useCountdown();

    return (
        <Box
            sx={{
                width: '60%',
                height: '65%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}
        >
            <Input
                start={start}
                displayRef={displayRef}
                inputMinutes={inputMinutes}
                inputSeconds={inputSeconds}
                handleInputMinutesChange={handleInputMinutesChange}
                handleInputSecondsChange={handleInputSecondsChange}
                min={min}
                sec={sec}
            />
            <Display min={min} sec={sec} displayRef={displayRef}>
                <Progress startProgress={startProgress} isProgress={isProgress} min={min} sec={sec} />
            </Display>
            <Button start={start} startTimer={startTimer} resetTimer={resetTimer} />
        </Box>
    );
};

export default memo(Container);

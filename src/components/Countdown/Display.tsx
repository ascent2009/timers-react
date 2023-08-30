import { memo, useEffect, useState, useContext } from 'react';
import { SContainer, SField, SFieldContainer } from '../../assets/styles/display.styles';
import { CountdownContext } from '../../context';
import Progress from './Progress';
import useSound from 'use-sound';
import sound from '../../assets/send.mp3';

interface IDisplay {
    displayRef: any;
    progressRef: any;
    inputMinRef: any;
}

type Timer = NodeJS.Timeout | number | string | undefined;

const Display: React.FC<IDisplay> = ({ displayRef, progressRef, inputMinRef }) => {
    const [sec, setSec] = useState(10);
    const [min, setMin] = useState(1);
    const [startProgress, setStartProgress] = useState(0);
    const [play] = useSound(sound);
    const { start } = useContext(CountdownContext);

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
    }, [min, sec, start, play, inputMinRef]);

    useEffect(() => {
        let interval: Timer;
        if (progressRef.current) {
            if (startProgress >= 100) {
                return;
            }
            // let time = ((+minutes * 60 + +seconds) * 1000) / 100;
            let time = ((min * 60 + sec) * 1000) / 100;

            interval = setTimeout(() => {
                setStartProgress(prev => prev + 1);
            }, time);
        }
        return () => clearTimeout(interval);
    }, [progressRef, inputMinRef, startProgress, min, sec]);

    return (
        <SContainer
            style={{ display: displayRef.current ? 'flex' : 'none' }}
            border='5px solid lightgrey'
            fontSize='100px'
            padding='75px 80px'
            flexDirection='column'
            justifyContent='flex-end'
        >
            <Progress startProgress={startProgress} progressRef={progressRef} />
            <SFieldContainer>
                <SField>{min < 10 ? `0${min}` : min}</SField> :<SField>{sec < 10 ? `0${sec}` : sec}</SField>
            </SFieldContainer>
        </SContainer>
    );
};

export default memo(Display);

import { memo, useState, useEffect } from 'react';
import { SContainer, SField } from '../../assets/styles/display.styles';

const Display: React.FC<{ start: boolean; timerRef: any }> = ({ start, timerRef }) => {
    const [msec, setMsec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

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
        timerRef.current = timer;
        return () => {
            clearInterval(timer);
        };
    }, [start, min, sec, msec, timerRef]);

    return (
        <SContainer border='none' fontSize='120px' padding='80px' flexDirection='row' justifyContent='center'>
            <SField>{timerRef.current === 0 ? '00' : min < 10 ? `0${min}` : min}</SField> :
            <SField>{timerRef.current === 0 ? '00' : sec < 10 ? `0${sec}` : sec}</SField> :
            <SField>{timerRef.current === 0 ? '00' : msec < 10 ? `0${msec}` : msec}</SField>
        </SContainer>
    );
};

export default memo(Display);

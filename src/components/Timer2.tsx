import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { SMain, SButton, SButtonWrap, SImg } from '../assets/styles/timer.styles';
import { SPageNav } from '../assets/styles/nav.styles';
import Title from './Title';
import Button from './Button';
import { DisplayTimer } from './Display';
import PlaySvg from '../assets/icons/play.svg';
import StopSvg from '../assets/icons/stop.svg';
import PauseSvg from '../assets/icons/pause.svg';

const Timer2: React.FC = memo(() => {
    const [msec, setMsec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [start, setStart] = useState(false);

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

    const startTimer = () => {
        setStart(!start);
    };

    const resetTimer = () => {
        setStart(false);
        setMsec(0);
        setSec(0);
        setMin(0);
    };

    const checkZeroValue = [min, sec, msec].some(u => u > 0);

    return (
        <SMain>
            <SPageNav>
                <Link to='/'>На главную</Link>
                <Link to='/countdown'>Countdown</Link>
            </SPageNav>

            <Title title='Timer' />
            <DisplayTimer min={min} sec={sec} msec={msec} />
            {/* <Button>
                <SButton onClick={startTimer}>
                    {!checkZeroValue ? (
                        <SButtonWrap>
                            <SImg src={PlaySvg} alt='play' /> запустить
                        </SButtonWrap>
                    ) : !start ? (
                        <SButtonWrap>
                            <SImg src={PlaySvg} alt='play' /> возобновить
                        </SButtonWrap>
                    ) : (
                        <SButtonWrap>
                            <SImg src={PauseSvg} alt='play' /> пауза
                        </SButtonWrap>
                    )}
                </SButton>
                <SButton disabled={checkZeroValue ? false : true} onClick={resetTimer}>
                    <SButtonWrap>
                        <SImg src={StopSvg} alt='stop' /> сбросить
                    </SButtonWrap>
                </SButton>
            </Button> */}
        </SMain>
    );
});

export default Timer2;

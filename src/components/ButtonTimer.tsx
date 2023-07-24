import { memo, useContext } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../assets/styles/timer.styles';
import PlaySvg from '../assets/icons/play.svg';
import StopSvg from '../assets/icons/stop.svg';
import PauseSvg from '../assets/icons/pause.svg';
import { TimerContext } from '../context';
import { checkZeroValue } from '../utils/helpers';

const Button1: React.FC = () => {
    const { min, msec, sec, start, startTimer, resetTimer } = useContext(TimerContext);

    return (
        <SButtonContainer>
            <SButton onClick={startTimer}>
                {!checkZeroValue([min, sec, msec]) ? (
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
            <SButton disabled={checkZeroValue([min, sec, msec]) ? false : true} onClick={resetTimer}>
                <SButtonWrap>
                    <SImg src={StopSvg} alt='stop' /> сбросить
                </SButtonWrap>
            </SButton>
        </SButtonContainer>
    );
};

export default memo(Button1);

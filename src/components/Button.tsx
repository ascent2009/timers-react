import { memo } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../assets/styles/timer.styles';
import PlaySvg from '../assets/icons/play.svg';
import StopSvg from '../assets/icons/stop.svg';
import PauseSvg from '../assets/icons/pause.svg';

interface IButton {
    inputValues: { sec: number; min: number };
    startProgress: number;
    checkZeroValue: boolean;
    start: boolean;
    startTimer: () => void;
    resetTimer: () => void;
}

const Button: React.FC<IButton> = ({
    inputValues: { min, sec },
    startProgress,
    checkZeroValue,
    start,
    startTimer,
    resetTimer,
}) => (
    <SButtonContainer>
        <SButton disabled={(+sec || +min) && startProgress !== 100 ? false : true} onClick={startTimer}>
            {!checkZeroValue || !start ? (
                <SButtonWrap>
                    <SImg src={PlaySvg} alt='play' /> запустить
                </SButtonWrap>
            ) : (
                <SButtonWrap>
                    <SImg src={PauseSvg} alt='pause' /> пауза
                </SButtonWrap>
            )}
        </SButton>
        <SButton disabled={checkZeroValue || startProgress === 100 ? false : true} onClick={resetTimer}>
            <SButtonWrap>
                <SImg src={StopSvg} alt='stop' /> сбросить
            </SButtonWrap>
        </SButton>
    </SButtonContainer>
);

export default memo(Button);

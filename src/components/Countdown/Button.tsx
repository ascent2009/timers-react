import { memo } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../../assets/styles/timer.styles';
import PlaySvg from '../../assets/icons/play.svg';
import StopSvg from '../../assets/icons/stop.svg';
import PauseSvg from '../../assets/icons/pause.svg';

const Button: React.FC<{
    startTimer: () => void;
    resetTimer: () => void;
    start: boolean;
}> = ({ start, startTimer, resetTimer }) => {
    return (
        <SButtonContainer>
            <SButton onClick={startTimer}>
                {!start ? (
                    <SButtonWrap>
                        <SImg src={PlaySvg} alt='play' /> запустить
                    </SButtonWrap>
                ) : (
                    <SButtonWrap>
                        <SImg src={PauseSvg} alt='pause' /> пауза
                    </SButtonWrap>
                )}
            </SButton>
            <SButton disabled={start ? false : true} onClick={resetTimer}>
                <SButtonWrap>
                    <SImg src={StopSvg} alt='stop' /> сбросить
                </SButtonWrap>
            </SButton>
        </SButtonContainer>
    );
};

export default memo(Button);

import { memo } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../../assets/styles/timer.styles';
import PlaySvg from '../../assets/icons/play.svg';
import StopSvg from '../../assets/icons/stop.svg';
import PauseSvg from '../../assets/icons/pause.svg';

interface IButton {
    startTimer: () => void;
    resetTimer: () => void;
    startRef: any;
}

const Button: React.FC<IButton> = ({ startTimer, resetTimer, startRef }) => {
    return (
        <SButtonContainer>
            <SButton onClick={startTimer} ref={startRef}>
                <SButtonWrap>
                    <SImg src={!startRef.current ? PlaySvg : PauseSvg} alt='play' />
                    {!startRef.current ? 'запустить' : 'пауза'}
                </SButtonWrap>
            </SButton>
            <SButton onClick={resetTimer} ref={startRef} disabled={!startRef.current ? true : false}>
                <SButtonWrap>
                    <SImg src={StopSvg} alt='stop' /> сбросить
                </SButtonWrap>
            </SButton>
        </SButtonContainer>
    );
};

export default memo(Button);

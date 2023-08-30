import { memo, useContext } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../../assets/styles/timer.styles';
import PlaySvg from '../../assets/icons/play.svg';
import StopSvg from '../../assets/icons/stop.svg';
import PauseSvg from '../../assets/icons/pause.svg';
import { CountdownContext } from '../../context';

const Button: React.FC = () => {
    const { startTimer, resetTimer } = useContext(CountdownContext);
    return (
        <SButtonContainer>
            <SButton onClick={startTimer}>
                <SButtonWrap>
                    <SImg src={PlaySvg} alt='play' /> запустить
                </SButtonWrap>
            </SButton>
            <SButton onClick={resetTimer}>
                <SButtonWrap>
                    <SImg src={StopSvg} alt='stop' /> сбросить
                </SButtonWrap>
            </SButton>
        </SButtonContainer>
    );
};

export default memo(Button);

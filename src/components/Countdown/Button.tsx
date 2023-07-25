import { memo, useContext } from 'react';
import { SButtonContainer, SButton, SButtonWrap, SImg } from '../../assets/styles/timer.styles';
import PlaySvg from '../../assets/icons/play.svg';
import StopSvg from '../../assets/icons/stop.svg';
import PauseSvg from '../../assets/icons/pause.svg';
import { checkZeroValue } from '../../utils/helpers';
import { CountdownContext } from '../../context';

const Button: React.FC = () => {
    const {
        inputValues: { minutes, seconds },
        sec,
        min,
        startProgress,
        start,
        startTimer,
        resetTimer,
    } = useContext(CountdownContext);
    return (
        <SButtonContainer>
            <SButton disabled={(+minutes || +seconds) && startProgress !== 100 ? false : true} onClick={startTimer}>
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
            <SButton disabled={checkZeroValue([min, sec]) || startProgress === 100 ? false : true} onClick={resetTimer}>
                <SButtonWrap>
                    <SImg src={StopSvg} alt='stop' /> сбросить
                </SButtonWrap>
            </SButton>
        </SButtonContainer>
    );
};

export default memo(Button);

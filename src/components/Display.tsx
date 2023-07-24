import { memo } from 'react';
import { SContainer, SField, SFieldContainer } from '../assets/styles/display.styles';

interface IDisplay {
    min: number;
    sec: number;
    msec: number;
    checkZeroValue?: boolean;
    children?: React.ReactNode;
    isDisplay?: boolean;
}

type Countdown = Omit<IDisplay, 'msec'>;

export const DisplayTimer: React.FC<IDisplay> = memo(({ min, sec, msec }) => (
    <SContainer border='none' fontSize='120px' padding='80px' flexDirection='row' justifyContent='center'>
        <SField>{min < 10 ? `0${min}` : min}</SField> :<SField>{sec < 10 ? `0${sec}` : sec}</SField> :
        <SField>{msec < 10 ? `0${msec}` : msec}</SField>
    </SContainer>
));

export const DisplayCountdown: React.FC<Countdown> = memo(({ min, sec, checkZeroValue, children, isDisplay }) => (
    <SContainer
        style={{ display: isDisplay ? 'flex' : 'none' }}
        border='5px solid lightgrey'
        fontSize='100px'
        padding='75px 80px'
        flexDirection='column'
        justifyContent='flex-end'
    >
        {children}
        <SFieldContainer>
            <SField>{min < 10 ? `0${min}` : min}</SField> :<SField>{sec < 10 ? `0${sec}` : sec}</SField>
        </SFieldContainer>
    </SContainer>
));

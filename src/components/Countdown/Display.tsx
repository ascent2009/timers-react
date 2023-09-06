import { memo } from 'react';
import { SContainer, SField, SFieldContainer } from '../../assets/styles/display.styles';

interface IDisplay {
    children?: React.ReactNode;
    min: number;
    sec: number;
    displayRef: any | boolean;
}

const Display: React.FC<IDisplay> = ({ children, min, sec, displayRef }) => {
    return (
        <SContainer
            style={{ display: displayRef.current ? 'flex' : 'none' }}
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
    );
};

export default memo(Display);

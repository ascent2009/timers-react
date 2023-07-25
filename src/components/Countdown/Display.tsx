import { memo, useContext } from 'react';
import { SContainer, SField, SFieldContainer } from '../../assets/styles/display.styles';
import { CountdownContext } from '../../context';

interface IDisplay {
    children?: React.ReactNode;
}

const Display: React.FC<IDisplay> = ({ children }) => {
    const { min, sec, isDisplay } = useContext(CountdownContext);
    return (
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
    );
};

export default memo(Display);

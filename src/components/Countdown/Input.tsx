import { memo, useContext } from 'react';
import { SInput, SForm, SLabel, SInputWrap } from '../../assets/styles/form.styles';
import { checkZeroValue } from '../../utils/helpers';
import { CountdownContext } from '../../context';

const Input: React.FC = () => {
    const {
        start,
        inputValues: { minutes, seconds },
        min,
        sec,
        isDisplay,
        handleInputChange,
    } = useContext(CountdownContext);
    return (
        <SForm style={{ display: isDisplay ? 'none' : 'flex' }}>
            <SInputWrap>
                <SLabel htmlFor='min'>Enter minutes:</SLabel>
                <SInput
                    type='number'
                    id='min'
                    name='minutes'
                    min={0}
                    max={12}
                    value={minutes < 10 ? `0${minutes}` : minutes}
                    onChange={handleInputChange}
                    disabled={start || checkZeroValue([min, sec]) ? true : false}
                />
            </SInputWrap>
            <SInputWrap>
                <SLabel htmlFor='sec'>Enter seconds:</SLabel>
                <SInput
                    type='number'
                    id='sec'
                    name='seconds'
                    min={0}
                    max={minutes === 12 ? 0 : 59}
                    value={seconds < 10 ? `0${seconds}` : seconds}
                    disabled={start || checkZeroValue([min, sec]) ? true : false}
                    onChange={handleInputChange}
                />
            </SInputWrap>
        </SForm>
    );
};

export default memo(Input);

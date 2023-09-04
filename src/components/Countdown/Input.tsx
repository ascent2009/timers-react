import { memo } from 'react';
import { SInput, SForm, SLabel, SInputWrap } from '../../assets/styles/form.styles';
import { checkZeroValue } from '../../utils/helpers';

const Input: React.FC<{
    inputMinutes: number;
    inputSeconds: number;
    isDisplay: boolean;
    handleInputMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputSecondsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    start: boolean;
    min: number;
    sec: number;
}> = ({
    inputMinutes,
    inputSeconds,
    isDisplay,
    handleInputMinutesChange,
    handleInputSecondsChange,
    start,
    min,
    sec,
}) => {
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
                    value={inputMinutes < 10 ? `0${inputMinutes}` : inputMinutes}
                    onChange={handleInputMinutesChange}
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
                    max={inputMinutes === 12 ? 0 : 59}
                    value={inputSeconds < 10 ? `0${inputSeconds}` : inputSeconds}
                    disabled={start || checkZeroValue([min, sec]) ? true : false}
                    onChange={handleInputSecondsChange}
                />
            </SInputWrap>
        </SForm>
    );
};

export default memo(Input);

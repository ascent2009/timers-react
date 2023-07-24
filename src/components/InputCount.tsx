import { memo } from 'react';
import { SInput, SForm, SLabel, SInputWrap } from '../assets/styles/form.styles';

interface IInput {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    start: boolean;
    checkZeroValue: boolean;
    inputValues: {
        min: number;
        sec: number;
    };
    minutes: number;
    seconds: number;
    isDisplay: boolean;
}

const InputCount: React.FC<IInput> = memo(
    ({ onChange, start, checkZeroValue, inputValues: { min, sec }, minutes, seconds, isDisplay }) => {
        return (
            <SForm style={{ display: isDisplay ? 'none' : 'flex' }}>
                <SInputWrap>
                    <SLabel htmlFor='min'>Enter minutes:</SLabel>
                    <SInput
                        type='number'
                        id='min'
                        name='min'
                        min={0}
                        max={12}
                        value={min < 10 ? `0${min}` : min}
                        onChange={onChange}
                        disabled={start || checkZeroValue ? true : false}
                    />
                </SInputWrap>
                <SInputWrap>
                    <SLabel htmlFor='sec'>Enter seconds:</SLabel>
                    <SInput
                        type='number'
                        id='sec'
                        name='sec'
                        min={0}
                        max={min === 12 ? 0 : 59}
                        value={sec < 10 ? `0${sec}` : sec}
                        disabled={start || checkZeroValue ? true : false}
                        onChange={onChange}
                    />
                </SInputWrap>
            </SForm>
        );
    }
);

export default InputCount;

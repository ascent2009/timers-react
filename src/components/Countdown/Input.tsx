import { memo, useContext } from 'react';
import { SInput, SForm, SLabel, SInputWrap } from '../../assets/styles/form.styles';
// import { checkZeroValue } from '../../utils/helpers';
import { CountdownContext } from '../../context';

const Input: React.FC<{ displayRef: any; inputMinRef: any }> = ({ displayRef, inputMinRef }) => {
    const { start } = useContext(CountdownContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputMinRef.current = e.target.value;
    };

    return (
        <SForm style={{ display: displayRef.current ? 'none' : 'flex' }}>
            <SInputWrap>
                <SLabel htmlFor='min'>Enter minutes:</SLabel>
                <SInput
                    type='number'
                    id='min'
                    name='minutes'
                    min={0}
                    max={12}
                    onChange={handleInputChange}
                    disabled={start ? true : false}
                    ref={inputMinRef}
                />
            </SInputWrap>
            <SInputWrap>
                <SLabel htmlFor='sec'>Enter seconds:</SLabel>
                <SInput
                    type='number'
                    id='sec'
                    name='seconds'
                    min={0}
                    // max={inputMinRef.current === 12 ? 0 : 59}
                    disabled={start ? true : false}
                    onChange={handleInputChange}
                />
            </SInputWrap>
        </SForm>
    );
};

export default memo(Input);

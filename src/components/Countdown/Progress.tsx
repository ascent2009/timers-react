import React, { memo, useContext } from 'react';
import { SProgress, SProgressPercentage, SProgressResult } from '../../assets/styles/progress.styles';
import { checkZeroValue } from '../../utils/helpers';
import { CountdownContext } from '../../context';

const Progress: React.FC = () => {
    const { startProgress, isProgress, min, sec } = useContext(CountdownContext);
    return startProgress !== 100 ? (
        <>
            <SProgress max={100} completed={startProgress} />
            <SProgressPercentage>
                {isProgress || checkZeroValue([min, sec]) ? `${startProgress}%` : null}
            </SProgressPercentage>
        </>
    ) : (
        <SProgressResult>Finished!</SProgressResult>
    );
};

export default memo(Progress);

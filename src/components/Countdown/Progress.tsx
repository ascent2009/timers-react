import React, { memo } from 'react';
import { SProgress, SProgressPercentage, SProgressResult } from '../../assets/styles/progress.styles';
import { checkZeroValue } from '../../utils/helpers';

const Progress: React.FC<{
    startProgress: number;
    min: number;
    sec: number;
    isProgress: boolean;
}> = ({ startProgress, isProgress, min, sec }) => {
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

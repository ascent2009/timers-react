import React, { memo } from 'react';
import { SProgress, SProgressPercentage, SProgressResult } from '../assets/styles/progress.styles';

interface IProgress {
    startProgress: number;
    checkZeroValue: boolean;
    isProgress: boolean;
    min: number;
    sec: number;
}

const Progress: React.FC<IProgress> = ({ startProgress, checkZeroValue, isProgress, min, sec }) => {
    return startProgress !== 100 ? (
        <>
            <SProgress max={100} completed={startProgress} />
            <SProgressPercentage>{isProgress || checkZeroValue ? `${startProgress}%` : null}</SProgressPercentage>
        </>
    ) : (
        <SProgressResult>Finished!</SProgressResult>
    );
};

export default memo(Progress);

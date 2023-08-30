import React, { memo } from 'react';
import { SProgress, SProgressPercentage, SProgressResult } from '../../assets/styles/progress.styles';

const Progress: React.FC<{ progressRef: any; startProgress: number }> = ({ progressRef, startProgress }) => {
    return startProgress !== 100 ? (
        <>
            <SProgress max={100} completed={startProgress} />
            <SProgressPercentage ref={progressRef}>
                {progressRef.current ? `${startProgress}%` : null}
            </SProgressPercentage>
        </>
    ) : (
        <SProgressResult>Finished!</SProgressResult>
    );
};

export default memo(Progress);

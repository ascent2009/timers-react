import styled from 'styled-components';

export const SProgress = styled.progress<{ completed?: number }>`
    position: relative;
    height: 4px;
    width: 100%;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }

    &::before {
        width: 100%;
        background: lightgrey;
    }

    &::after {
        width: ${props => props.completed}%;
        background: blue;
        transition: width 1000ms ease-out;
    }
`;

export const SProgressPercentage = styled.div<{ completed?: number }>`
    color: blue;
    font-size: 20px;
    font-weight: 600;
    margin: 5px auto 30px;
    display: inline-block;
`;

export const SProgressResult = styled.div`
    color: blue;
    font-weight: 600;
    font-size: 42px;
    margin: 0 auto 30px;
`;

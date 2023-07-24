import styled from 'styled-components';

export const SForm = styled.form`
    display: flex;
    width: 35%;
    height: 20%;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: grey;
    margin: 137px auto 63px;
    font-family: 'Roboto';
    text-align: left;
`;

export const SInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 13px;
`;

export const SLabel = styled.label`
    width: fit-content;
`;

export const SInput = styled.input`
    &::spin-button {
        appearance: none;
        display: none;
    }
    width: 80%;
    background: white;
    border: none;
    outline: none;
    font-size: 5em;
    text-align: center;
    color: grey;
    font-family: 'Roboto';
    &:disabled {
        opacity: 0.5;
        color: grey;
    }
    &:focus {
        color: blue;
    }
`;

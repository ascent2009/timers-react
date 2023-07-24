import styled from 'styled-components';

export const SMain = styled.section`
    display: flex;
    width: 80vw;
    height: 100vh;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const SButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
`;

export const SButton = styled.button`
    background: #af85f2;
    box-shadow: 4px 4px 8px 0px rgba(58, 60, 62, 0.2);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    width: fit-content;
    margin: 20px;
    padding: 20px;
    color: white;
    outline: none;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background: #732ae8;
    }
    &:active {
        transform: translateY(2px);
    }
    &:focus {
        background: #732ae8;
    }
    &:disabled {
        cursor: not-allowed;
        background: #a19d9d;
        transform: translateY(0);
    }
`;

export const SButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
`;

export const SImg = styled.img`
    width: 50px;
    height: 50px;
`;

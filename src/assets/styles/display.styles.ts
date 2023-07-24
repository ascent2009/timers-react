import styled from 'styled-components';

export const SContainer = styled.article<{
    border?: string;
    fontSize?: string;
    padding?: string;
    flexDirection?: string;
    justifyContent?: string;
}>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width: 40%;
    height: 25%;
    justify-content: ${props => props.justifyContent};
    align-items: center;
    font-size: ${props => props.fontSize};
    font-weight: normal;
    border: ${props => props.border};
    outline: none;
    border-radius: 50px;
    color: grey;
    padding: ${props => props.padding};
    margin: 0 auto;
`;

export const SFieldContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
`;

export const SField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background: white;
    margin: auto 20px;
`;

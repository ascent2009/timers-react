import styled from 'styled-components';

export const SHeader = styled.header`
    width: 60%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        width: 230px;
        box-shadow: 4px 4px 8px 0px rgba(58, 60, 62, 0.2);
        color: #dbdbdb;
        font-size: 30px;
        padding: 10px 0;
        border-radius: 30px;
        background: #6a5acd;
        text-decoration: none;
        font-family: 'Roboto';
        &:hover,
        active,
        focus {
            color: white;
        }
    }
`;

export const SPageNav = styled(SHeader)`
    height: auto;
    margin: 25px auto 0;
    a {
        background: none;
        font-size: 20px;
        color: grey;
        &:hover,
        active,
        focus {
            color: blue;
        }
    }
`;

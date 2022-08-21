import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    color: #000;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-template: 1fr auto minmax(150px, 1fr)/ 1fr auto 1fr;

    @media (max-width: 767.98px) {
        grid-template: 1fr auto minmax(150px, 1fr)/ 1fr 6fr 1fr;
    }
`;
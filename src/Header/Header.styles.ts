import styled from "styled-components";

export const StyledHeader = styled.header`
    grid-row: 1/2;
    grid-column: 2/3;
    margin-top: 35px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 767.98px) {
        margin-top: 35px;
        margin-bottom: 20px;
    }

    & > div{
        width: 180px;
        height: 78px;
        position: relative;

        @media (max-width: 767.98px) {
            width: 100px;
            height: 58px;
        }

        img{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`    
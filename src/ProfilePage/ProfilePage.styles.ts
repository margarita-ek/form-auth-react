import styled from "styled-components";

export const StyledProfilePageContainer = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        font-size: 40px;
        @media (max-width: 767.98px) {
            line-height: 1.5;
            text-align: center;
            font-size: 20px;
        }
    }

    & > button {
        margin-top: 50px;
        width: 200px;
        height: 60px;
        border-radius: 8px;
        background-color: #F5F5F5;
        font-weight: 600;
        font-size: 18px;

        &:hover{
            background-color: #efeeee;
        }

        @media (max-width: 767.98px) {
            margin-top: 30px;
            width: 150px;
            height: 45px;
            line-height: 1.5;
            text-align: center;
            font-size: 16px;
        }
    }
`
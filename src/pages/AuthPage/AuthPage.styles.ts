import styled from "styled-components";

type getErrorProps = {
    getError?: boolean
}

export const StyledAuthPageContainer = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    display: grid;

    .auth-content{

        p{
            margin-top: 10px;
            font-size: 14px;
            letter-spacing: 1px;
            color: #E26F6F;        
        }
        
    }
`

export const StyledAuthForm = styled.form`
    grid-row: 2/3;
    grid-column: 2/3;
    margin: 0 auto;               
`

export const StyledAuthWarning = styled.div`
    width: 640px;
    height: 60px;
    margin-top: 10px;
    padding: 20px 24px; 
    border: 1px solid #E26F6F;  
    border-radius: 8px; 
    background-color: #F5E9E9;

    & > span {
        position: relative;
        padding-left: 34px;

        &::before{
            content: "";
            position: absolute;
            top: -2px;
            left: 0;
            width: 20px;
            height: 20px;
            background: url("/img/warning.svg") center center no-repeat;
        }
    }

    @media (max-width: 767.98px) {
        width: 100%;
        height: auto;
    }
`

export const StyledAuthLabel = styled.label`
    margin-top: 23px;
    text-align: left;
    display: block;
`

export const StyledAuthInput = styled.input<getErrorProps>`
    width: 640px;
    height: 60px;
    margin-top: 10px;
    padding: 20px 24px;
    border: 1px solid #F5F5F5;
    caret-color: ${props => (props.getError ? '#E26F6F' : '#000')};    
    border-color: ${props => (props.getError ? '#E26F6F' : '#F5F5F5')};    
    border-radius: 8px;
    background-color: #F5F5F5;
    font-size: 14px;
    letter-spacing: 1px;

    @media (max-width: 767.98px) {
        width: 100%;
        height: 48px;
    }

    &:hover{
        background-color: #efeeee;
    }
    
    &:disabled{
        background-color: #F5F5F5;        
    }    
`

export const StyledAuthLabelForCheck = styled.label.attrs({
    htmlFor: "check-pass"
})`
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #000;
        border-radius: 4px;
        margin-right: 14px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
`

export const StyledAuthInputCheckbox = styled.input.attrs({
    type: "checkbox",
    id: "check-pass"
})`
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked+label::before{
        background: url("/img/block-check.svg") center center no-repeat; 
        background-size: 85%;
    }
`
export const StyledAuthInputSubmit = styled.input.attrs({
    type: "submit",
    value: "Войти"
})`
    width: 640px;
    height: 60px;
    margin-top: 40px;
    border-radius: 8px;
    background-color: #4A67FF;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;    
    cursor: pointer;

    @media (max-width: 767.98px) {
        width: 100%;
        height: 48px;
        margin-top: 20px;
    }

    &:hover{
        background-color: #364DDB;
    }

    &:disabled{
        background-color: #99A9FF;        
    }
`


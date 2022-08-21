import React from "react"
import { StyledHeader } from "./Header.styles"

const Header: React.FC = () => { 
    return (
        <StyledHeader>
            <div>
                <img src="../img/logo.svg" alt="логотип" title="only"/>
            </div>
        </StyledHeader>
    )
}

export default Header
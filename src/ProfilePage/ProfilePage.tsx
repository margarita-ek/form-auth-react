import React from "react"
import { DEFAULT_PERSON } from "../AuthPage/AuthPage"
import { StyledProfilePageContainer } from "./ProfilePage.styles"

type ProfilePageProps = {
    setIsAuthenticated: Function
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => { 
    const { setIsAuthenticated } = props

    return (
        <StyledProfilePageContainer>
            <p>Здравствуйте, <strong title={DEFAULT_PERSON.login}>{DEFAULT_PERSON.login}</strong></p>
            <button title="выйти" onClick={() => setIsAuthenticated(false)}>Выйти</button>
        </StyledProfilePageContainer>
    )
}

export default ProfilePage
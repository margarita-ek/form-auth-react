import React, { useEffect, useState } from "react"
import {
    StyledAuthPageContainer,
    StyledAuthForm,
    StyledAuthLabel,
    StyledAuthInput,
    StyledAuthInputSubmit,
    StyledAuthInputCheckbox,
    StyledAuthLabelForCheck,
    StyledAuthWarning
} from "./AuthPage.styles"

import { useForm } from "react-hook-form"
import { Loader } from "../../components/Loader/Loader"

type AuthPageProps = {
    setIsAuthenticated: Function
}

type TFormValues = {
    login: string
    password: string
}

export const DEFAULT_PERSON = {
    login: "steve.jobs@example.com",
    password: "password"
}

const AuthPage: React.FC<AuthPageProps> = (props) => { 
    const { setIsAuthenticated } = props

    const [loading, setLoading] = useState<boolean>(false)
    const [warning, setWarning] = useState<boolean>(false)
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false)
    const [invalidValue, setInvalidValue] = useState<string>("")

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TFormValues>({
        mode: "onSubmit"
    })

    const makeApiRequest = (data: TFormValues) => { 
        setLoading(true)
        setTimeout(() => {
            if(data.login === DEFAULT_PERSON.login && data.password === DEFAULT_PERSON.password) setIsAuthenticated(true)
            if (data.login === DEFAULT_PERSON.login && data.password !== DEFAULT_PERSON.password) { 
                setInvalidPassword(true)
                setWarning(true)
            }
            if (data.login !== DEFAULT_PERSON.login) { 
                setInvalidValue(data.login)
                setWarning(true)
            }
            setLoading(false)
        }, 2000)
    }
    
    const onSubmit = handleSubmit((data:TFormValues) => {
        makeApiRequest(data)
        reset()
    })

    useEffect(() => {
        setTimeout(() => { 
            setWarning(false)
            setInvalidPassword(false)
            setInvalidValue("")
        }, 3000)
    }, [warning, invalidPassword, invalidValue])

    return (
        <StyledAuthPageContainer>
            { loading ? <Loader /> : null}
            <div className="auth-content">
                <StyledAuthForm onSubmit={onSubmit}>

                    { warning ? <StyledAuthWarning>
                        <span>{invalidPassword ? `???????????????????????? ????????????`: `???????????????????????? ${invalidValue} ???? ????????????????????`}</span>
                    </StyledAuthWarning> : null }
                    
                    <div>
                        <StyledAuthLabel>??????????</StyledAuthLabel>
                        <StyledAuthInput
                            title="??????????"
                            disabled={loading}
                            getError={!!errors?.login}
                            {...register("login", {
                            required: "???????????????????????? ????????",
                            minLength: {
                                value: 2,
                                message: "?????????????? 2 ??????????????"
                            }                            
                        })} placeholder="??????????" />
                        <div>
                            {errors?.login && <p>{errors?.login?.message || "???????????? ????????????"}</p>}      
                        </div>
                    </div>

                    <div>
                        <StyledAuthLabel>????????????</StyledAuthLabel>
                        <StyledAuthInput
                            title="????????????"                            
                            disabled={loading}
                            getError={!!errors?.password}
                            type="password"
                            {...register("password", {
                            required: "?????????????? ????????????",
                            minLength: {
                                value: 6,
                                message: "?????????????? 6 ????????????????"
                            }
                        })} placeholder="????????????" />
                        <div>
                            {errors?.password && <p>{errors?.password?.message || "???????????? ????????????"}</p>}      
                        </div>                 
                    </div>

                    <div>
                        <StyledAuthInputCheckbox disabled={loading} />
                        <StyledAuthLabelForCheck title="?????????????????? ????????????">?????????????????? ????????????</StyledAuthLabelForCheck>
                    </div>

                    <StyledAuthInputSubmit title="??????????" disabled={loading} />
                    
                </StyledAuthForm>
            </div>
        </StyledAuthPageContainer>
    )
}

export default AuthPage
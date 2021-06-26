import React from 'react'
//styles
import * as s from './login.style'
//img
import logo from "../../assets/img/logo.png"
//redux
import { useSelector } from 'react-redux'
import { stateInterface } from '../../state/CombineReducers'
//router
import {Link} from "react-router-dom"



export const Login: React.FC = (): JSX.Element => {

    const state = useSelector((state: stateInterface) => state.login)

    return (
        <s.Container>

            <s.Wrapper className="container">
                <img src={logo} alt="Logomarca" />

                <h1>Login</h1>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email" value={state.email} />
                    <input type="password" name="senha" id="senha" placeholder="Senha" value={state.password} />

                    <Link to="/properties" className="link">
                        <button>Entrar</button>
                    </Link>
                </form>
            </s.Wrapper>

        </s.Container>
    )
}

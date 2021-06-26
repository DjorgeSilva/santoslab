import React from 'react'
//styles
import * as s from './login.style'
//img
import logo from "../../assets/img/logo.png"
//redux
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { stateInterface } from '../../state/CombineReducers'
import { actions } from '../../state'
//packages
import { Link } from "react-router-dom"




export const Login: React.FC = (): JSX.Element => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const state = useSelector((state: stateInterface) => state.login)
    const dispatch = useDispatch();
    const { loginAction } = bindActionCreators(actions, dispatch);

    return (
        <s.Container>

            <s.Wrapper className="container">
                <img src={logo} alt="Logomarca" />

                <h1>Login</h1>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" name="senha" id="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/>

                    <Link to="/properties" className="link">
                        <button onClick={() => loginAction(email, password)}>Entrar</button>
                    </Link>
                </form>
            </s.Wrapper>

        </s.Container>
    )
}

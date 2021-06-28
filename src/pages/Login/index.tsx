import React from 'react'
//styles
import * as s from './login.style'
//img
import logo from "../../assets/img/logo.png"
//redux
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions } from '../../state'
//type
import { stateInterface } from '../../state/CombineReducers'
//packages
import { Link, useHistory } from "react-router-dom"


export const Login: React.FC = (): JSX.Element => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory();


    const state = useSelector((state: stateInterface) => state.login)

    const dispatch = useDispatch();
    const { loginAction, buscar } = bindActionCreators(actions, dispatch);


    // lida com o dispatch e requerimentos dos inputs
    function handleSubmit(): void {

        if (email === "" || password === "") {
            alert('preencha todos os campos!')

        } else {
            loginAction(email, password);
            history.push('/properties');
        }
    }

    return (
        <s.Container>

            <s.Wrapper className="container">
                <img src={logo} alt="Logomarca" />

                <h1>Login</h1>

                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" name="senha" id="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />

                    <button onClick={() => handleSubmit()}>Entrar</button>
                </form>
            </s.Wrapper>

        </s.Container>
    )
}

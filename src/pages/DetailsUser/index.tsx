import React from 'react'
import { useSelector } from 'react-redux'
//styles
import * as s from "./details.style"
import { stateInterface } from '../../state/CombineReducers'

export const Detailsuser: React.FC = (): JSX.Element => {

    const state = useSelector((state: stateInterface) => state.login)

    return (
        <s.Container>
            <s.Wrapper className="container">
                <h1>Propriedades</h1>

                <div className="inner">
                    <p>{JSON.stringify(state)}</p>

                    <p>Email: felipemunhoz@santoslab.com</p>
                    <p>Role: user</p>
                    <p>Nome da properiedade: Fazenda Cereal Amarelo</p>
                    <p>Tipo de plantação: Sojas</p>
                </div>
            </s.Wrapper>
        </s.Container>
    )
}

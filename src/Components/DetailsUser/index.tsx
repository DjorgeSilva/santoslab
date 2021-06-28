import React from 'react'
//reducer
import { useDispatch, useSelector } from 'react-redux'
//styles
import * as s from "./details.style"
//types
import { stateInterface } from '../../state/CombineReducers'
//packages
import { Row, Col } from 'react-bootstrap'
//icons
import {FaMapMarkerAlt} from "react-icons/fa"

export const Detailsuser: React.FC = (): JSX.Element => {

    const state = useSelector((state: stateInterface) => state.login)

    const mapState = useSelector((state: stateInterface) => state.buscar)

    return (
        <s.Container>
            <s.Wrapper className="container">
                <h1>Usuário</h1>

                <div className="inner">

                    {state &&
                        state.map((item: any) => {
                            return (
                                <React.Fragment>
                                    <div className="user-column">
                                        <p>Email: <span>{item.email}</span></p>
                                        <p>usuário: <span>{item.role}</span></p>
                                        <p>ids: <span>{item.propertyIds}</span></p>
                                    </div>
                                </React.Fragment>
                            )
                        })}

                </div>

                <h1>Propriedades</h1>

                <div className="user-column-more-info container">

                    {state &&
                        state.map((item: any) => {
                            return (
                                <Row className="row">
                                    {mapState &&
                                        mapState.map((item: any) => {
                                            return (
                                                <Col xs={12} md={6} className="wrapper-column">
                                                    <div className="wrapper">
                                                        <p>Descrição <span></span>{item.name}</p>
                                                        <p>Tipo: <span>{item.cropType}</span></p>
                                                        <button>mapa <FaMapMarkerAlt className="icone"/></button>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                </Row>
                            )
                        })}
                </div>

                <h1>Mapa</h1>
            </s.Wrapper>
        </s.Container>
    )
}

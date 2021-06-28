import { Dispatch } from "react"
import { actionInterface, actionInterfacePropriedades } from "../actionInterface"


export const loginAction = (email: string, password: string) => {
  return (dispatch: Dispatch<actionInterface>) => {
    dispatch({
      type: 'login',
      payload: {
        email,
        password,
      }
    })
  }
}

export const buscar = (id: number[]) => {
  return (dispatch: Dispatch<actionInterfacePropriedades>) => {
    dispatch({
      type: 'buscar',
      payload: id
    })
  }
}

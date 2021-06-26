import { Dispatch } from "react"
import { actionInterface } from "../actionInterface"


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
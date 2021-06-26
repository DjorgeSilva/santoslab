//interface
import { actionInterface, loginInterface } from "../actionInterface";
//userData
import * as userData from "../../assets/users.json"

export const initialState = userData;


export const reducer = (state: any = initialState, action: actionInterface) => {
    switch (action.type) {

        case 'login':
            return state

        default:
            return state
    }
}

//interface
import { actionInterface, loginInterface } from "../actionInterface";


export const initialState = {
    email: "flanelon18@gmail.com",
    password: "senha"
};


export const reducer = (state: loginInterface = initialState, action: actionInterface) => {
    switch (action.type) {

        case 'login':
            return state

        default:
            return state
    }
}
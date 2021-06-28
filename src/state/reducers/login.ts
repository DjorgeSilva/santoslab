//interface
import { actionInterface, loginInterface } from "../actionInterface";
//userData
import * as userData from "../../assets/users.json"

const data = [{
    email: "felipemunhoz@santoslab.com",
    password: "adminslab",
    role: "admin",
    propertyIds: [0, 1, 4]
},
{
    email: "usuario@santoslab.com",
    password: "123456",
    role: "user",
    propertyIds: [0, 1, 4]
},
{
    email: "outrousuario@santoslab.com",
    password: "qwertyuiop",
    role: "user",
    propertyIds: [2, 3, 5]
}]

export const initialState = [];



export const reducer = (state: any = initialState, action: actionInterface) => {
    switch (action.type) {

        case 'login':
            let result = data.filter((item: loginInterface) =>
                item['email'] === action.payload.email &&
                item['password'] === action.payload.password)

            if (result.length) {
                return result
            } else {
                return false
            }

        default:
            return state
    }
}

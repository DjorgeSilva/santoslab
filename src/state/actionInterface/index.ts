export interface loginInterface {
    email: string;
    password: string;
}

export interface actionInterface {
    type: string;
    payload: {
        email: string;
        password: string;
    }
}


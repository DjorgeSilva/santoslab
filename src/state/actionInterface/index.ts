export interface loginInterface {
    email: string;
    password: string;
    role: string,
    propertyIds?: [];
}

export interface actionInterface {
    type: string;
    payload: {
        email: string;
        password: string;
    }
}


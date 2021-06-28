export interface loginInterface {
    email: string;
    password: string;
    role: string,
    propertyIds?: number[];
}

export interface actionInterface {
    type: string;
    payload: {
        email: string;
        password: string;
    }
}

export interface actionInterfacePropriedades {
    type: string;
    payload: any
    // payload: typePropriedades;
}

export interface Productivity {
    month: number;
    value: number;
}

export interface typePropriedades {
    id: number;
    name: string;
    cropType: string;
    productivity: Productivity[];
    coordinates: number[];
}
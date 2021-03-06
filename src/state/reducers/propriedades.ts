import { actions } from "..";
import { actionInterfacePropriedades, typePropriedades } from "../actionInterface";


const initialState = [
    {
        id: 0,
        name: "Fazenda Cereal Azul",
        cropType: "Soja",
        productivity: [{ month: 5, value: 3 }, { month: 6, value: 5 }, { month: 7, value: 6 }, { month: 8, value: 2 }, { month: 9, value: 1 }, { month: 10, value: 1 }],
        coordinates: [-14, -56]
    }
    , {
        id: 1,
        name: "Fazenda Cereal Vermelho",
        cropType: "Milho",
        productivity: [{ month: 5, value: 4 }, { month: 6, value: 2 }, { month: 7, value: 1 }, { month: 8, value: 3 }, { month: 9, value: 4 }, { month: 10, value: 5 }],
        coordinates: [-13, -56]
    },
    {
        id: 2,
        name: "Fazenda Suculenta",
        cropType: "Algodão",
        productivity: [{ month: 5, value: 1 }, { month: 6, value: 2 }, { month: 7, value: 3 }, { month: 8, value: 4 }, { month: 9, value: 5 }, { month: 10, value: 6 }],
        coordinates: [-18, -52]
    },
    {
        id: 3,
        name: "Fazenda Mini Cacto",
        cropType: "Milho",
        productivity: [{ month: 5, value: 6 }, { month: 6, value: 5 }, { month: 7, value: 4 }, { month: 8, value: 3 }, { month: 9, value: 2 }, { month: 10, value: 1 }],
        coordinates: [-18, -51]
    },
    {
        id: 4,
        name: "Fazenda Cereal Amarelo",
        cropType: "Soja",
        productivity: [{ month: 5, value: 3 }, { month: 6, value: 6 }, { month: 7, value: 5 }, { month: 8, value: 7 }, { month: 9, value: 8 }, { month: 10, value: 9 }],
        coordinates: [-14, -55]
    },
    {
        id: 5,
        name: "Fazenda Leguminosa",
        cropType: "Algodão",
        productivity: [{ month: 5, value: 2 }, { month: 6, value: 1 }, { month: 7, value: 2 }, { month: 8, value: 3 }, { month: 9, value: 4 }, { month: 10, value: 5 }],
        coordinates: [-19, -51]
    }]


export const propriedades = (state: any = initialState, action: actionInterfacePropriedades) => {
    switch (action.type) {
        
        case 'buscar':
            return state;

        default:
            return state;
    }
}
import React from 'react'
//COMPONENTS
import { Map } from '../../Components/Map'
import { Detailsuser } from "../../Components/DetailsUser/index"

export const Properties: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Detailsuser />
            <Map />
        </React.Fragment>
    )
}

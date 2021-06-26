import React from 'react'
//COMPONENTS
import { Map } from '../Map'
import { Detailsuser } from "../DetailsUser/index"

export const Properties: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <Detailsuser />
            <Map />
        </React.Fragment>
    )
}

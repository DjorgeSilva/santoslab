import React from 'react'
//packages
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map: React.FC = (): JSX.Element => {

    const position: [number, number] = [-13, -56];


    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} id="mapid" style={{ height: "50vh" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

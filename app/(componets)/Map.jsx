'use client';
import React, { Children } from 'react'
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const Map = (props) => {
  const position = [props.lat, props.lon]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className=' h-full w-full -z-10 fixed'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

export default Map

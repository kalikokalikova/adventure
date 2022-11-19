import React, { useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapSearch = () => {
    const [viewport, setViewport] = useState({
        latitude: 45.4211, 
        longitude: -75.6903,
        zoom: 9,
        width: '100vw',
        height: '100vh'
    })

    const ctrl = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
        marker:false,
        collapsed: true
    })

    useControl(() => ctrl)
    ctrl.on('result', (e) => {
        setViewport(e.viewport)
        console.log(viewport)
    })

  return (
    null
  )
}

export default MapSearch
import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.79107022782, 
        longitude: -122.43782361688397,
        zoom: 10,
        width: '100vw',
        height: '100vh'
    })
    
  return (
    <ReactMapGL 
        {...viewport} 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onMove={evt => setViewport(evt.viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
    >

    </ReactMapGL>
  )
}

export default Map
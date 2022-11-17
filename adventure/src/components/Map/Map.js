import React, { useState } from 'react'
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
    <div>
        <div>
            <h4>Map here</h4>
            <ReactMapGL 
                {...viewport} 
                mapboxAccessToken='pk.eyJ1IjoiYWxpc29uMjY4NiIsImEiOiJjbGFraHdnajQwbDBxM3FudW41cmYwaGNsIn0.yaK-uA87-9ITmsCQCdrA2w'
                onMove={evt => setViewport(evt.viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
            </ReactMapGL>
        </div>
    </div>
  )
}

export default Map
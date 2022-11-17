import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.79107022782, 
        longitude: -122.43782361688397,
        zoom: 13,
        width: '100vw',
        height: '100vh'
    })

    console.log(viewport)
    
  return (
    <div>
        <div class="border-solid border-2 border-black-900 w-96 h-96">
            <h4>Map here</h4>
            <ReactMapGL 
                {...viewport} 
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onMove={evt => setViewport(evt.viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
            </ReactMapGL>
        </div>
    </div>
  )
}

export default Map
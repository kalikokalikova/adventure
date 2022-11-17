import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.79107022782, 
        longitude: -122.43782361688397,
        zoom: 15,
        width: '100vw',
        height: '100vh'
    })

    const [location, setLocation] = useState([])

    // console.log(viewport)
    console.log(location)

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await axios.get('https://adventure.mocklab.io/api/v1/points')
                setLocation(data.data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    
  return (
    <div>
        <div class='flex items-center justify-center h-center'>
            <div class='border-solid border-2 border-black-600 w-96 h-96'>
                <ReactMapGL 
                    {...viewport} 
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onMove={evt => setViewport(evt.viewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                    {/* {location.data.map(location => (
                        <Marker>
                            <div>Park!</div>
                        </Marker>
                    ))} */}
                </ReactMapGL>
            </div>
        </div>
    </div>
  )
}

export default Map
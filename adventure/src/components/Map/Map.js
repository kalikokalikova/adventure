import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'

const API_URL = 'https://adventure.mocklab.io/api/v1/points'

const getData = () => {
    return axios.get(API_URL).then((res) => res.data)
}

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

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await axios.get('https://adventure.mocklab.io/api/v1/points')
                setLocation(data.data.features)
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    // useEffect(() => {
    //     getData().then((items) =>{
    //         setLocation(items)
    //     })
    // }, [])
    
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
                    {/* {location.features.map(location => (
                        <Marker
                            key={location.properties.id}
                            latitude={location.geometry.coordinates[1]}
                            longitude={location.geometry.coordinates[0]}
                        >
                            <div>Park!</div>
                        </Marker>
                    ))} */}
                    {/* {location.features.map((item, index) => console.log(item))} */}
                    {console.log(location.geometry)}
                </ReactMapGL>
            </div>
        </div>
    </div>
  )
}

export default Map
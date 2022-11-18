import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, {GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import locationData from '../../Utils/mapdata.json'
import point from '../../assets/map-img/walk.svg'
import MapSearch from '../MapSearch/MapSearch'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 45.4211, 
        longitude: -75.6903,
        zoom: 9,
        width: '100vw',
        height: '100vh'
    })

    const [location, setLocation] = useState([])
    const [selectedPt, setSelectedPt] = useState(null)

    useEffect(() => {
        const listener = (e)=> {
            if (e.key === 'Escape') {
                setSelectedPt(null)
            }
        }
        window.addEventListener('keydown', listener)

        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [])


    // console.log(viewport)

    // useEffect(() => {
    //     const getData = async () => {
    //         try{
    //             const data = await axios.get('https://adventure.mocklab.io/api/v1/points')
    //             setLocation(data.data)
    //             // console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getData()
    // }, [])

  return (
    <div>
        <div class='flex items-center justify-center h-screen'>
            <div class='border-solid border-4 border-black-600 w-1/2 h-1/2'>
                <ReactMapGL 
                    {...viewport} 
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onMove={e => setViewport(e.viewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    {locationData.features.map(location => (
                        <Marker
                            key={location.properties.id}
                            latitude={location.geometry.coordinates[1]}
                            longitude={location.geometry.coordinates[0]}
                        >
                            <button 
                                class='bg-transparent border-none cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSelectedPt(location)
                                    console.log(selectedPt)
                                }}
                            >
                                <img class='bg-black border-black border-2 rounded-full w-20 h-20' src={point} alt='point icon' />
                            </button>
                        </Marker>
                    ))}

                    {/* {locationData.features.map((location) => console.log(location.geometry.coordinates[1]))} */}
            

                    {selectedPt ? (
                        <Popup 
                            latitude={selectedPt.geometry.coordinates[1]}
                            longitude={selectedPt.geometry.coordinates[0]}
                            closeButton={true}
                            closeOnClick={false} 
                            closeOnMove={false}
                            onClose={() => {selectedPt(null) }}
                            
                        >
                            <div class=''>
                                <h2 class='text-lg font-bold'>{selectedPt.properties.name}</h2>
                                <p class='text-base'>{selectedPt.properties.description}</p>
                                <p class='text-sm'>Created on: {selectedPt.properties.created_at}</p>
                            </div>
                        </Popup>
                    ) : null}
                    <NavigationControl position='bottom-right' />
                    <GeolocateControl
                        position='top-left'
                        trackUserLocation
                        onGeolocate={e => setViewport(e.viewport)} 
                    />
                    <MapSearch />
                </ReactMapGL>
            </div>
        </div>
    </div>
  )
}

export default Map
import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, {GeolocateControl, Marker, NavigationControl, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import locationData from '../../Utils/mapdata.json'
import point from '../../assets/map-img/walk.svg'
import MapSearch from '../MapSearch/MapSearch'
import {IoMdPhotos} from 'react-icons/io'

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
        <div>
            <div 
            className='mapboxgl-map w-[100%] h-[83vh] bg-white border-solid border-2 md:h-[82vh] lg:w-[100%] '>
                <ReactMapGL 
                    {...viewport} 
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onMove={e => setViewport(e.viewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    
                >
                    {locationData.features.map(location => (
                        <Marker
                            key={location.properties.id}
                            latitude={location.geometry.coordinates[1]}
                            longitude={location.geometry.coordinates[0]}
                        >
                            <button 
                                className='bg-transparent border-none cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSelectedPt(location)
                                    console.log(selectedPt)
                                }}
                            >
                            <IoMdPhotos 
                            className='text-3xl text-white border-solid border-[#e0b94bfb] border-2 bg-[#e9ae0cfd] p-1 rounded-full shadow-lg'/>
                            </button>
                        </Marker>
                    ))}

                    {/* {locationData.features.map((location) => console.log(location.geometry.coordinates[1]))} */}
                                                {/* location, index */}

                    {selectedPt ? (
                        <Popup 
                            latitude={selectedPt.geometry.coordinates[1]}
                            longitude={selectedPt.geometry.coordinates[0]}
                            closeButton={true}
                            closeOnClick={false} 
                            closeOnMove={false}
                            onClose={() => {selectedPt(null) }}
                        
                            
                        >
                            <div className='flex items-center justify-start'>
                                <div className='w-[30%]'>
                                    <img 
                                    className='p-2 w-[100%]'
                                        src={point}
                                            // {selectedPt.properties.image_1} 
                                         alt="image"/>
                                </div>
                                <div className='w-[60%]'>
                                    <h2 className='font-poppins text-lg font-bold py-2'>{selectedPt.properties.name}</h2>
                                        <p className='font-poppins text-md'>{selectedPt.properties.description}</p>
                                        
                                </div>
                                
                                
                            </div>
                        </Popup>
                    ) : null}
                   
                        <NavigationControl 
                    position='bottom-right'
                    
                    />
                   
                    <GeolocateControl
                        position='top-left'
                        trackUserLocation
                        onGeolocate={e => setViewport(e.viewport)} 
                       
                    />
                           
                        {/* <MapSearch 
                        /> */}
                           
                </ReactMapGL>
            </div>
         </div>
     </div>
  )
}



export default Map
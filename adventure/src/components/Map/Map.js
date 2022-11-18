import React, { useState, useEffect } from 'react'
import ReactMapGL, {Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// import axios from 'axios'
import locationData from '../../Utils/mapdata.json'
import skate from '../../assets/skateboarding.svg'

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 45.4211, 
        longitude: -75.6903,
        zoom: 8,
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
        <div class='flex items-center justify-center h-center'>
            <div class='border-solid border-2 border-black-600 w-96 h-96'>
                <ReactMapGL 
                    {...viewport} 
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onMove={evt => setViewport(evt.viewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
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
                                <img class='w-10 h-10' src={skate} alt='skate icon' />
                            </button>
                        </Marker>
                    ))}

                    {/* {locationData.features.map((location) => console.log(location.geometry.coordinates[1]))} */}
            

                    {selectedPt ? (
                        <Popup 
                            latitude={selectedPt.geometry.coordinates[1]}
                            longitude={selectedPt.geometry.coordinates[0]}
                            anchor="bottom"
                            width={300}
                            height={300}
                            closeButton={true}
                            closeOnClick={false} 
                            closeOnMove={false}
                            onClose={ () => {selectedPt(false) }}
                            
                        >
                            <h2>{selectedPt.properties.name}</h2>
                            <p>{selectedPt.properties.description}</p>
                        </Popup>
                    ) : null}
                </ReactMapGL>
            </div>
        </div>
    </div>
  )
}

export default Map
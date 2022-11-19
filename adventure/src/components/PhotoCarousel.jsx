import React from 'react'
import {bridgePiece} from '../assets/carousel-img/bridgepiece.jpg'
import {chinaTown} from '../assets/carousel-img/chinatown.jpg'
import {chinaTownArt} from '../assets/carousel-img/chinatownart.jpg'
import {dogWindow} from '../assets/carousel-img/dogwindow.jpg'
import {garageArt} from '../assets/carousel-img/garageart.jpg'
import {goldenGate} from '../assets/carousel-img/goldengate.jpg'
import {goldSquirrel} from '../assets/carousel-img/goldsquirrel.jpg'
import {houseFlowers} from '../assets/carousel-img/houseflowers.jpg'
import {houseMural} from '../assets/carousel-img/housemural.jpg'
import {littleLibrary} from '../assets/carousel-img/littlelibrary.jpg'
import {motorcycle} from '../assets/carousel-img/motorcycle.jpg'
import {nightBuilding} from '../assets/carousel-img/nightbuilding.jpg'
import {paintedBus} from '../assets/carousel-img/paintedbus.jpg'
import {spiritHouse} from '../assets/carousel-img/spirithouse.jpg'
import {streetArt} from '../assets/carousel-img/streetart.jpg'
import {streetPerformer} from '../assets/carousel-img/streetperformer.jpg'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {useEffect, useState} from 'react'


function PhotoCarousel() {


// const [carousel, setCarousel] = useState([]);

// useEffect(()=> {
//     getCarousel();
// }, []);

// const getCarousel = async () =>{
//     const photosApi = await fetch(``)
//     const data = await photosApi.json();
//     setCarousel(data.results);
// }

  return (
    <div>
      <div>
        <h3 className='font-poppins font-bold text-2xl ml-4'>Community Finds</h3>
        <Splide
            options={{
                arrows:false,
                pagination:false,
                drag:"free",
                gap:'0.25rem',
                mediaQuery:'min',
                breakpoints:{
                    1440:{
                        perPage: 5,
                    },
                    1024:{
                        perPage: 4,
                    },
                    768:{
                        perPage: 2,
                    },
                    640:{
                        perPage: 2,
                    },
                },
            }}
        >
            {/* {PhotoCarousel.map((data) => {
                return(
                    <SplideSlide key={data.id}>
                        <div>
                            <img src={data.image} alt={data.name} />
                            <p> {data.name}</p>
                        </div>
                    </SplideSlide>
                )
            })} */}

            <SplideSlide>
                <div>
                    <img src="../../public/logo192.png" alt="/" />
                </div>
            </SplideSlide>

        </Splide>
      </div>




    </div>
  )
}

export default PhotoCarousel

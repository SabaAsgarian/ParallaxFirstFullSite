"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swipersecond.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import Image from 'next/image';
import one from './img/for-web.webp'
import two from './img/Whats-new-49.webp'
import three from './img/Whats-new-22.webp'
import four from './img/Whats-new-48.webp'
import five from './img/Whats-new-62.webp'
import six from './img/Whats-new-42.webp'
import seven from './img/Whats-new-32.webp'
import eight from './img/Whats-new-23.webp'
import nine from './img/for-web_-.webp'
import ten from './img/Whats-new-25.webp'
import './../globals.css'
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 3000, // Delay between transitions (in milliseconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="swipersecond"
      >
        <SwiperSlide>
            <Box>
                <Image src={one} alt='img1' />
                
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={two} alt='img2'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={three} alt='img3'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={four} alt='img4'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={five} alt='img5'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={six} alt='img6'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={seven} alt='img7'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={eight} alt='img8'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={nine} alt='img9'/>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box>
                <Image src={ten} alt='img10'/>
            </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

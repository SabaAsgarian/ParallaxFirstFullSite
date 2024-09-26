"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

import './swiperfirst.css';
import Image from 'next/image';
import gif from './img/vid.gif'
import b from './img/1.webp'
import c from './img/2.webp'

import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import '../globals.css'
import { Box, Button } from '@mui/material';
export default function Header() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <>
            <Swiper
                 navigation={true}
                pagination={pagination}
            
                keyboard={true}
                autoplay={{ delay: 3000 }}
                modules={[Navigation, Pagination, Keyboard, Autoplay]}
                className="swiper"
                style={{ direction: 'ltr' }}
            >

                <SwiperSlide>
                    <Image src={b} alt='img2' style={{ position: 'relative' }} />
                    <div className='absolute bg-[#2d2d2d57] bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] w-full' >
                        <h1 className='w-full text-[50px] text-white'>COMMUNITY•CONNECTED•CONVENIENT </h1>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                            <Button sx={{
                                borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                                    background: 'white', color: 'black'

                                }
                            }}>DISCOVER</Button>
                        </Box>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={c} alt='img3' style={{ position: 'relative' }} />
                    <div className='absolute bg-[#2d2d2d57] bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] w-full' >
                        <h1 className='w-full text-[50px] text-white'>COMMUNITY•CONNECTED•CONVENIENT </h1>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                            <Button sx={{
                                borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                                    background: 'white', color: 'black'

                                }
                            }}>DISCOVER</Button>
                        </Box>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={gif} alt="GIF"  style={{ position: 'relative' }} />
                    <div className='absolute bg-[#2d2d2d57] bottom-[-2%] left-[50%] translate-x-[-50%] w-full' >
                        <h1 className='w-full text-[50px] text-white'>MAKE•COMPLEXITY•SIMPLE </h1>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%', marginBottom: '2%' }}>
                            <Button sx={{
                                borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                                    background: 'white', color: 'black'

                                }
                            }}>DISCOVER</Button>
                        </Box>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
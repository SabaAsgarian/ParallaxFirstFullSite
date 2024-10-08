"use client"
import React from 'react'
import { useState, useEffect } from 'react';

import Image from "next/image";
import Swipersecond from './components/swipersecond'
import AOS from 'aos';


import './globals.css'
import { Box, Button } from "@mui/material";

import Swiperfirst from './components/swiperfirst'
import Header from './components/header'
import Scrolledcard from './components/scrollcard'
import Scrolledcardtwo from './components/scrollcardtwo'
import Anime from './components/anime';
import Animetwo from './components/animetwo';
import one from './components/img/img_social.webp'
import five from './components/img/img_character.webp'
import three from './components/img/img_social1.webp'
import four from './components/img/img_social2.webp'
import eight from './components/img/img_social3.webp'
import six from './components/img/img_social4.webp'
import seven from './components/img/img_character2.webp'
import two from './components/img/img_character1.webp'
import CustomCard from './components/cardpic'
import Link from 'next/link';
import Footer from './components/footer'
import loading from './components/img/loading.gif'

const cardData = [
  { image: one, },
  { image: two, },
  { image: three, },
  { image: four, },
  { image: five, },
  { image: six, },
  { image: seven, },
  { image: eight, },
];
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    AOS.init();
  }, []);
  

  useEffect(() => {
    // Your page initialization code here
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loading w-full h-full flex justify-center items-center text-center">
          <Image src={loading} alt="Loading" layout="responsive" priority />
        </div>
      </>
    )
  }
  return (

    <>
      <Header />
      <Box sx={{ position: 'relative', top: '-10%', left: '0px', zIndex: '998' }}>
        <Swiperfirst />
      </Box>
      <div data-aos="fade-up"
        data-aos-duration="3000">
        <Box sx={{ marginTop: '10%' }}>
          <h1 className="text-[60px] font-extrabold text-white w-full text-center my-4" id='new' >WHAT'S NEW</h1>
          <Swipersecond />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Button sx={{
              borderRadius: '0px', border: '2px solid white', width: '150px', marginTop: '5%', color: 'white', '&:hover': {
                background: "white", color: 'black'

              }
            }}>VIEW ALL</Button>
          </Box>
        </Box>
      </div>
      <div className="h-auto" id='shop'>
        <Scrolledcard />
      </div>
      <div className="bg-food  bg-cover bg-center h-auto" id='eat'>
        <Scrolledcardtwo />
      </div>
      <Anime />
      <div div data-aos="fade-left"
        data-aos-duration="3000" className="bg-dir w-full h-[100vh] bg-center bg-cover flex justify-center items-center flex-wrap " id='diri'>

        <Box sx={{ width: '100%', height: '30%' }}>
          <h1 className="text-[100px] font-extrabold text-white 
              text-start  w-full mx-10">Directory</h1>

          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', textAlign: 'center', width: '100%', marginLeft: '40px' }}>
            <Button sx={{
              borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                background: 'white', color: 'black'

              }
            }}>DISCOVER</Button>
          </Box>
        </Box>


      </div>
      <Anime />
      <div div data-aos="fade-right"
        data-aos-duration="3000" className="bg-trav w-full h-[100vh] bg-center bg-cover flex justify-center items-center flex-wrap " id='tt'>

        <Box sx={{ width: '100%', height: '30%' }}>
          <h1 className="text-[100px] font-extrabold text-white 
              text-start  w-full mx-10 whitespace-break-spaces">How To
            get here</h1>

          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', textAlign: 'center', width: '100%', marginLeft: '40px' }}>
            <Button sx={{
              borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                background: "white", color: 'black'

              }
            }}>DISCOVER</Button>
          </Box>
        </Box>
      </div>
      <div div data-aos="fade-down"
        data-aos-duration="3000" className="w-full h-auto bg-center bg-cover flex justify-center items-center flex-wrap my-[10%]">
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex', textAlign: 'center' }}>
          <h1 className='text-white text-[50px] font-extrabold'>#SilomComplex</h1>

        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'black', height: 'auto', direction: 'rtl' }} >
          {cardData.map((card, index) => (
            <CustomCard key={index} image={card.image} title={card.title} />
          ))}
        </Box>
      </div>
      <Animetwo />
      <Footer />
    
    </>
  );
}

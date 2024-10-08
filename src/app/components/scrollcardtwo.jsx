import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import imageA from './img/f1.webp';
import imageB from './img/f2.jpg';
import imageC from './img/img_eat1.webp';
import imageD from './img/shop1.webp';
import imageF from './img/shop4.webp';
import Image from 'next/image';
import yourBackgroundImage from './img/bg_eat.jpg'
const MyCardtwo = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const leftColumnStyle = {
        position: 'sticky',
        top: '50%',
        transform: `translateX(-50% + ${scrollPosition * 0.04}px)`,
        transition: 'transform 0.3s ease-in-out',
    };

    const rightColumnStyle = {
        position: 'sticky',
        top: '50%',
        transform: `translateX(-50% - ${scrollPosition * 0.04}px)`,
        transition: 'transform 0.3s ease-in-out',
    };


    return (
        <Box sx={{ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:{xs:'70%',md:'25%'},backgroundImage: `url(${yourBackgroundImage})` }}>
            <Box sx={{ position: 'relative' ,flex: 1, display: 'flex', flexDirection: 'column',}}>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card sx={leftColumnStyle}>
                        <Image src={imageA} style={{ width: '350px' }} alt='a'/>
                    </Card>
                    <Card sx={leftColumnStyle}>
                        <Image src={imageC} style={{ width: '350px' }} alt='a'/>
                    </Card>
                    <Card sx={leftColumnStyle}>
                        <Image src={imageB} style={{ width: '350px' }} alt='a'/>
                    </Card>
                </Box>
               
            <Box sx={{display:'flex' ,flexWrap:"wrap"}}>
            <Typography
                    variant="h1"
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left:{xs:'10%',md:'50%'},
                        transform: `translate(-50%, -50% + ${scrollPosition * 0.04}px)`,
                        zIndex: 999,
                        color: 'white',
                        fontWeight: 'bolder'
                        
                    }}
                >
                    EAT  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Button sx={{
              borderRadius: '0px', border: '2px solid white', width: '150px', marginTop: '5%', color: 'white', '&:hover': {
                background: "white", color: 'black'

              }
            }}>DISCOVER</Button>
          </Box>
                </Typography>
            </Box>
            </Box>
        </Box>
    );
};

export default MyCardtwo;

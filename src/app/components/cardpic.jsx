import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import '../globals.css'
const CustomCard = ({ image, title }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '20%' }, margin: '10px',backgroundColor:'black' }} className="my-10 ">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto',overflow:'hidden' }}>
                    <Image src={image} alt='a'  style={{ objectFit: 'cover',width:'100%',height:'100%',transitionDuration:'1s' ,}} className='page2' />
                </Box>

                
            </CardContent>
        </Card>
    );
};

export default CustomCard;
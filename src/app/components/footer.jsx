"use client"
import './../globals.css'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import pin from './img/pin_map.png'
import Me from './img/me.png'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';
import Paper from '@mui/material/Paper';

import Typography from "@mui/material/Typography";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Link from "next/link";
import '../globals.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'black',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    boxShadow: 'none', // {{ edit_1 }} Remove box shadow
    ...theme.applyStyles('dark', {
        backgroundColor: 'black',
    }),
}));
export default function footer() {
    return (
        <>
            <div className='bg-end w-full h-auto flex justify-center items-center bg-center bg-cover'>
                <div className='w-full lg:w-[50%]  relative'>
                    <Image src={pin} alt="image" style={{ position: 'absolute', top: '50%', left:{ xs:'1.5%', lg:'50%'} }} />

                </div>
                <div className='w-full lg:w-[50%] lg:h-full bg-[#2e2e2e3e] *:text-white *:lg:mx-[5%]'>
                    <h1 className='text-[70px] font-extrabold my-[5%]'>We are here !</h1>
                    <h3 className='text-[40px] font-extrabold my-[5%]'>SERVICE HOURS</h3>
                    <p className='my-[5%] text-[20px]'>Opens daily 10:30 a.m. - 10:00 p.m.</p>
                    <p className='my-[5%] text-[20px]'>02 632 1199</p>
                    <Box sx={{ display: 'flex', width: '100%',marginBottom:'5%' }}>

                        <Button sx={{
                            marginRight: '2%', borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                                background: 'white', color: 'black'

                            }
                        }}>Get Direction</Button>
                        <Button sx={{
                            borderRadius: '0px', border: '2px solid white', width: '150px', color: 'white', '&:hover': {
                                background: 'white', color: 'black'

                            }
                        }}>Map graphic</Button>

                    </Box>
                </div>
            </div>
            <Box sx={{ width: '100%', my: '5%' }}>
                <Stack spacing={2}>
                    <Item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={Me} alt="me" width={100} height={100} style={{marginRight:'4%', borderRadius: '50%', backgroundColor: 'gray', color: 'white' }} />
                        <Typography className="text-white mx-5">Coding By Saba Asgarian</Typography>
                        <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr' target="_blank" >
                            <Box sx={{ background: 'radial-gradient(circle at 33% 100%,#fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                <InstagramIcon sx={{ color: 'white', ml: '2%' }} />
                            </Box>
                        </Link>
                        <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
                            <Box sx={{ backgroundColor: '#0077b5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className=" mx-2 box-hover">
                                <LinkedInIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                            </Box>
                        </Link>
                        <Link href='https://github.com/SabaAsgarian' target="_blank">
                            <Box sx={{ backgroundColor: '#0088cc', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                <GitHubIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                            </Box>
                        </Link>
                        <Link href='mailto:computer.sabaa@gmail.co'>
                            <Box sx={{ backgroundColor: 'red', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className=" mx-2 box-hover">
                                <MailIcon sx={{ color: 'white', ml: '2%', }} /> {/* Set color here */}
                            </Box>
                        </Link>
                    </Item>
                </Stack>
            </Box>
        </>
    )
}


// image logo bts
// Saladaeng Exit 4
// image logo mrt
// Silom Station Exit 2
// SERVICE HOURS
//  Opens daily 10:30 a.m. - 10:00 p.m.
//  02 632 1199
// Get DirectionMap graphic
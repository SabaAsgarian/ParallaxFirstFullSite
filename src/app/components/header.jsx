"use client"
import { Box, Divider, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';




import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from './img/logo.png'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';




import { styled as muiStyled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';

import { useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import './../globals.css'
const drawerWidth = '100%';

const AppBar = styled(MuiAppBar)(({ theme,isFixed }) => ({
    zIndex: 9999,
    position: 'static', // Change to static
    backgroundColor: '#0000008a', // Set background color to white
    color: 'white',
    borderBottom: '1px solid black',
   
    boxShadow: isFixed ? '0 0 50px 0 rgba(0, 0, 0, 0.1)' : 'none',
 
    position: isFixed ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
   
   
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    zIndex: '99999'
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        backgroundColor: 'black', // Set background color to white
        color: 'white', // Set text color to black
    },
    zIndex: '99999',
}));

export default function header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isFixed, setIsFixed] = React.useState(false);
    // const [displayText, setDisplayText] = React.useState('Shine With Rose'); // State for text display
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small or medium

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    // Change display text in an infinite loop
    // React.useEffect(() => {
    //   const texts = ['⭐ Shine With Rose ⭐', '🔄Return Policy After One Month Using🔄'];
    //   let index = 0;

    //   const timer = setInterval(() => {
    //     index = (index + 1) % texts.length; // Cycle through the texts
    //     setDisplayText(texts[index]);
    //   }, 1000); // Change text every second

    //   return () => clearInterval(timer); // Cleanup timer on unmount
    // }, []); // Run once on mount

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div>

            <AppBar isFixed={isFixed}>
                <Toolbar>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',width:'100%',marginLeft:'5%',marginRight:'5%'}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            
                        >
                            <Link href="/" passHref>
                                <Image src={logo} alt="logo" height={50} width={100} />
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            <Link href="#new" style={{transitionDuration:'1s', color: 'white', margin: '0 15px', textDecoration: 'none','&:hover': {
                 color: '#30efc1'

              } }} className='colorlink'>What’s New</Link>
                            <Link href="#shop" style={{transitionDuration:'1s', color: 'white', margin: '0 15px', textDecoration: 'none','&:hover': {
               color: '#30efc1'

              } }} className='colorlink'> Shopping</Link>
                            <Link href="#eat" style={{transitionDuration:'1s', color: 'white', margin: '0 15px', textDecoration: 'none','&:hover': {
                 color: '#30efc1'

              } }} className='colorlink'> EAT EAT EAT </Link>
                            <Link href="#diri" style={{transitionDuration:'1s', color: 'white', margin: '0 15px', textDecoration: 'none','&:hover': {
                 color: '#30efc1'

              } }} className='colorlink'>Directory</Link>
                            <Link href="#tt" style={{transitionDuration:'1s', color: 'white', margin: '0 15px', textDecoration: 'none','&:hover': {
                 color: '#30efc1'

              } }} className='colorlink'>Tourist</Link>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            {isSmallScreen && (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                            <IconButton sx={{ color: 'white' }}>
                                <SearchOutlinedIcon />
                            </IconButton>
                            <Typography>
                                En|Thai
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {isSmallScreen && (
                <StyledDrawer
                    variant="temporary"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#new">
                                <ListItemText primary="What’s New" sx={{transitionDuration:'1s','&:hover': {
                 color: '#30efc1'}}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#shop">
                                <ListItemText primary="Shopping" sx={{transitionDuration:'1s','&:hover': {
                 color: '#30efc1'}}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#eat">
                                <ListItemText primary="Eat Eat Eat" sx={{transitionDuration:'1s','&:hover': {
                 color: '#30efc1'}}} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#diri">
                                <ListItemText primary="Directory" sx={{transitionDuration:'1s','&:hover': {
                 color: '#30efc1'}}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#tt">
                                <ListItemText primary="Tourist" sx={{transitionDuration:'1s','&:hover': {
                 color: '#30efc1'}}}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </StyledDrawer>
            )}
        </div>
    )
}

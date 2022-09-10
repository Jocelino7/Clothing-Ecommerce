import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, useMediaQuery, Drawer, List, ListItem } from '@mui/material';
import { NavLink } from "react-router-dom"

import { createTheme } from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { style } from '@mui/system';



const primary = "#FFBC0D"
const secondary = "#FFFF"

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const theme = createTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (

        <Box sx={{ flexGrow: 1, }} >
            <AppBar position="static" elevation={0} sx={{ backgroundColor: matches ? primary : "transparent", width: "100%" }}>
                {/*========================  only visible in large screens ===========================*/}
                {matches ? "" :

                    <Box>
                        <Box component="img" src={require("../img/roupas.png")}
                            sx={{
                                position: "absolute",
                                width: "100%",
                                opacity: "0.8",
                                height: "300px",
                            }}>


                        </Box>
                        <Box sx={{ width: "100%", height: "300px", position: "absolute", backgroundColor: "black", opacity: "0.5" }}>

                        </Box>

                    </Box>

                }

                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>




                    {/*========================  only visible in until 600px screen size ===========================*/}
                    {matches ?
                        <Box
                            sx={{ display: "flex", justifyContent: "baseline", gap: "0.3rem", alignItems: "center", position: "sticky" }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <ShoppingBagIcon />
                            <Box component="span" sx={{ color: secondary, fontWeight: "bold" }}>
                                Fashion
                            </Box>




                        </Box>
                        : ""


                    }
                    {matches ? "" :
                        <>
                            {/*========================  only visible large screens  ===========================*/}
                            <Typography>
                                <Box
                                    sx={{ display: "flex", justifyContent: "baseline" }}>
                                    <ShoppingBagIcon />
                                    <Box component="span" sx={{ color: primary, fontWeight: "bold" }}>
                                        Fashion
                                    </Box>
                                </Box>
                            </Typography>
                            <Box component="nav">
                                <Typography spacing="1">

                                    <NavLink to="/" style={({ isActive }) =>isActive ? 
                                    { color: secondary, backgroundColor:primary, textDecoration:"none",padding:"0.5rem" } 
                                    : { color: secondary, textDecoration: "none", margin: "1rem" } }> Home</NavLink>
                                <NavLink to="/men" style={({ isActive }) =>isActive ? 
                                    { color: secondary, backgroundColor:primary, textDecoration:"none",padding:"0.5rem" } 
                                    : { color: secondary, textDecoration: "none", margin: "1rem" } } >Men</NavLink>
                                <NavLink to="#" style={{ color: secondary, textDecoration: "none", margin: "1rem" }}>Women</NavLink>
                                <NavLink to="#" style={{ color: secondary, textDecoration: "none", margin: "1rem" }}>Kids</NavLink>

                            </Typography>


                        </Box>
                        </>

                    }

                <Button sx={{ backgroundColor: primary, color: secondary, fontWeight: "bold" }}>Login</Button>
            </Toolbar>
            {
                matches ?
                    <Drawer anchor="top" open={open} sx={{ height: "200px", position: "relative" }}>
                        <ArrowBackIcon sx={{ position: "relative", top: "0", marginBottom: "0.5rem", ml:"0.5rem",fontSize:"2rem", color: primary }} onClick={() => setOpen(false)} />
                        <List>
                            <ListItem onClick={() => setOpen(false)}>
                                <NavLink to="/" style={{ color: "#000", textDecoration: "none", margin: "1rem" }} > Home</NavLink>
                            </ListItem>

                            <ListItem onClick={() => setOpen(false)}>
                                <NavLink to="/men" style={{ color: "#000", textDecoration: "none", margin: "1rem" }} >Men</NavLink>

                            </ListItem>
                            <ListItem onClick={() => setOpen(false)}>
                                <NavLink to="#" style={{ color: "#000", textDecoration: "none", margin: "1rem" }} > Women</NavLink>

                            </ListItem>
                            <ListItem onClick={() => setOpen(false)}>
                                <NavLink to="#" style={{ color: "#000", textDecoration: "none", margin: "1rem" }} >Kids</NavLink>
                            </ListItem>
                        </List>
                    </Drawer>
                    : ""


            }
        </AppBar>
        </Box >

    )
}



export default Navbar










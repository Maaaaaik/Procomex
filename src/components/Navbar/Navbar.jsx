import React from 'react';
import Button from "@mui/material/Button";
import "./Navbar.css";
import ProcomexLogo from "../../assets/Expandida-blanco.png"

const Navbar = () => {
    return (
        <div className='container'>
            <img src={ProcomexLogo} className='logo' alt="Logo" />
            <div className="buttons">
                <Button size="large" disableElevation variant={location.pathname === '/home' ? 'contained' : null} sx={{ fontFamily: "MonserratRegular", borderRadius: 50, color: "white", }}>Inicio</Button>
                <Button disableElevation variant={location.pathname === '/About' ? 'contained' : null} sx={{ fontFamily: "MonserratRegular", borderRadius: 50, color: "white" }}>Nosotros</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ fontFamily: "MonserratRegular", borderRadius: 50, color: "white", }}>Servicios</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ fontFamily: "MonserratRegular", borderRadius: 50, color: "white", }}>Clientes</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ fontFamily: "MonserratRegular", borderRadius: 50, color: "white", }}>Contacto</Button>
            </div>
        </div>
    );
};

export default Navbar;
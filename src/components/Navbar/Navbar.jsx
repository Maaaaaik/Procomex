import React from 'react';
import { motion } from 'framer-motion';
import Button from "@mui/material/Button";
import "./Navbar.css";
import ProcomexLogo from "../../assets/Expandida-blanco.png"

const Navbar = ({ logoRef }) => {
    return (
        <motion.div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <motion.img ref={logoRef} src={ProcomexLogo} alt="Logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            <div className="buttons">
                <Button size="large" disableElevation variant={location.pathname === '/home' ? 'contained' : null} sx={{ borderRadius: 50, color: "white", }}>Inicio</Button>
                <Button disableElevation variant={location.pathname === '/About' ? 'contained' : null} sx={{ borderRadius: 50, color: "white" }}>Nosotros</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ borderRadius: 50, color: "white", }}>Servicios</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ borderRadius: 50, color: "white", }}>Clientes</Button>
                <Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ borderRadius: 50, color: "white", }}>Contacto</Button>
            </div>
        </motion.div>
    );
};

export default Navbar;
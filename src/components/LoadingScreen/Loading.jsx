import React from 'react';
import { motion } from 'framer-motion';
import ProcomexLogo from "../../assets/Expandida-blanco.png";

const LoadingScreen = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <motion.img src={ProcomexLogo} alt="Logo" animate={{ scale: 2 }} />
        </div>
    );
};

export default LoadingScreen;
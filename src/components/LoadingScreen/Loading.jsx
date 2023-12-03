import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { green } from '@mui/material/colors';

const LoadingScreen = () => {
    const controls = useAnimation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            controls.start({ opacity: 0, scale: 0, transition: { duration: 0.7 } }); // Establecer la opacidad y escala a 0 para que desaparezca
        }, 500); // 500 milisegundos = medio segundo

        return () => clearTimeout(timeoutId); // Limpiar el temporizador si el componente se desmonta antes de que transcurran los 500 ms
    }, [controls]);

    return (
        <motion.div
            style={{ backgroundColor: "green", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
            animate={controls} // Aplicar animaciones definidas por controls
            transition={{ duration: 0.5 }}
        >
            {/* Contenido del div */}
        </motion.div>
    );
};

export default LoadingScreen;
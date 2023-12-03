import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Carrousel from "./components/Carrousel/Carrousel.jsx";
import LoadingScreen from './components/LoadingScreen/Loading.jsx';
import './styles.css'



const App = () => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const simulateLoading = async () => {
      // Simula la carga (puedes ajustar el tiempo según tus necesidades)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Oculta el logo de carga
      controls.start({ opacity: 0 });

      // Muestra el logo en la barra de navegación
      await controls.start({ x: 0, y: 0, opacity: 1 });

      // Marca la carga como completa
      setLoading(false);
    };

    simulateLoading();
  }, [controls]);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Carrousel />
        </>
      )}
    </div>
  );
};

export default App;


import { motion } from "framer-motion";
import { useState } from "react";
import "./Carrousel.css";
import service1 from "../../assets/Showcase/service1.jpg";
import service2 from "../../assets/Showcase/service2.jpg";
import service3 from "../../assets/Showcase/service3.jpg";
import service4 from "../../assets/Showcase/service4.jpg";
import service5 from "../../assets/Showcase/service5.jpg";

const Carrousel = () => {
    const [isOnHover, setIsOnHover] = useState(null);

    const handleHovering = (index) => {
        setIsOnHover(index === isOnHover ? -1 : index);
    };

    const cardVariants = {
        expanded: {
            width: "800px"
        },
        collapsed: {
            width: "200px"
        }
    };
    const images = [service1, service2, service3, service4, service5];

    const descriptions = [
        "hola como estas sos muy buenooo",
        "hola como estas sos muy buenooo",
        "hola como estas sos muy buenooo",
        "hola como estas sos muy buenooo",
        "hola como estas sos muy buenooo",
    ];

    const titles = [
        "Tramitacion",
        "Liquidaciones",
        "Comercio exterior y Aduana",
        "Confeccion",
        "Logistica"
    ]

    return (
        <section>
            <div className="card-container">
                {[0, 1, 2, 3, 4].map((index) => (
                    <motion.div
                        className={`card ${index === isOnHover ? "expanded" : "collapsed"}`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={index === isOnHover ? "expanded" : "collapsed"}
                        transition={{ duration: 1, type: "spring" }}
                        onHoverStart={() => handleHovering(index)}
                        onHoverEnd={() => handleHovering(null)}
                        key={index}
                        style={{
                            backgroundImage: `url(${images[index]})`
                        }}
                    >
                        <div className="card-content">
                            <motion.div
                                className="card-footer"
                                initial={{ opacity: 0 }}
                                animate={index === isOnHover ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {index === isOnHover && <h2>{titles[index]}</h2>}
                                {index === isOnHover && <p>{descriptions[index]}</p>}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Carrousel;
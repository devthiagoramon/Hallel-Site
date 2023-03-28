import Img1 from "../../images/fundoCardTeste.jpg";
import Img2 from "../../images/fundoCardTeste.jpg";
import Img3 from "../../images/fundoCardTeste.jpg";
import Img4 from "../../images/fundoCardTeste.jpg";
import Img5 from "../../images/fundoCardTeste.jpg";
import Img6 from "../../images/fundoCardTeste.jpg";
import Img7 from "../../images/fundoCardTeste.jpg";
import "./styleEventos.css";
import 'bulma/css/bulma.min.css'; 

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//  images controls
const SlideEventos = (props) => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const carrosel = useRef();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    
    <div className = "body-eventos">
    
     
    <h1 id = "title">Eventos</h1>
    <div className="containerCarroseulEvent">
   
      <motion.div
        ref={carrosel}
        className="carrousel"
        initial={{x:100}}
        animate={{x:0}}
        transition={{duration: 0.8}}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((imagem2) => {
            return (
              <motion.div
                className="imagem2"
                key={imagem2}
                whileHover={{ scale: "1.02" }}
              >
                
                
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imagem2} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <h1 id = "title-cartao">Título do Evento</h1>
        <div className="content">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ac diam elementum suscipit vel eget dui. In metus est, lobortis at fringilla ac, euismod at metus.</p>
         <time>??/??/????</time> <br/>
         <time>00:00</time>
           
        </div>
      </div>
    </div>


               
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default SlideEventos;
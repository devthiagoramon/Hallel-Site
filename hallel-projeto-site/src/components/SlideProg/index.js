import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../../images/Segunda.png";
import Img2 from "../../images/Terça.png";
import Img3 from "../../images/Quarta.png";
import Img4 from "../../images/Quinta.png";
import Img5 from "../../images/Sexta.png";
import Img6 from "../../images/Sabado.png";
import Img7 from "../../images/Domingo.png";
import "./styleProg.css";

const SlideProg = (props) => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const carrosel = useRef();
  const [width, setWidth] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setWidth(carrosel.current?.offsetWidth);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="body-programacao">
      <h1 id="title">Programação Semanal</h1>
      <div className="containerCarroseulProg">
        <div className="carrousel" ref={carrosel}>
          <motion.div
            className="inner"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(${-currentImage * (100 / images.length)}%)`
            }}
          >
            {images?.map((imagem2, index) => {
              return (
                <motion.div
                  className="imagem2"
                  key={index}
                  whileHover={{ scale: "1.02" }}
                  style={{ flex: `0 0 ${100 / images.length}%` }}
                >
                  <img src={imagem2} alt="img" />
                  <div className="legenda2">
                    <a href="">Saiba mais</a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default SlideProg;

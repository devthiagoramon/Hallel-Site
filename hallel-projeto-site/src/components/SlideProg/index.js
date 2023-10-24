import Img1 from "../../images/progSanta.jpg";
import Img2 from "../../images/terca.jpg";
import Img3 from "../../images/quarta.jpg";
import Img4 from "../../images/quinta.jpg";
import Img5 from "../../images/sexta.jpg";
import Img6 from "../../images/sabado.jpg";
import Img7 from "../../images/domingo.jpg";
import "./styleProg.css";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//  images controls
const SlideProg = (props) => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const carrosel = useRef();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <div className="body-programacao">
      <h1 id="title">Programação Semanal</h1>
      <div className="containerCarroseulProg">
        <motion.div
          ref={carrosel}
          className="carrousel"
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
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
                  <img src={imagem2} alt="img" />

                  <div className="legenda2">
                    <a href="">Saiba mais</a>
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

export default SlideProg;

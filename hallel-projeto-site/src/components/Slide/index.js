import Img1 from "../../images/slide.jpeg";
import Img2 from "../../images/slide3.jpg";
import Img3 from "../../images/slide4.jpeg";
import Img4 from "../../images/slide5.jpeg";
import "./style.css";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//  images controls
const Slide = (props) => {
  const images = [Img1, Img2, Img3, Img4];

  const carrosel = useRef();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <div className="containerCarroseul">
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
          {images.map((imagem) => {
            return (
              <motion.div
                className="imagem"
                key={imagem}
                whileHover={{ scale: "1.02" }}
              >
                <img src={imagem} alt="img" />
                <div className="legenda">
                  <a href="">Testeeeee</a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide;

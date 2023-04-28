import Img1 from "../../images/CantoNovoDeLouvor.jpg";
import Img2 from "../../images/BaileRomantico.jpg";
import Img3 from "../../images/JubileuDePrata.jpg";
import Img4 from "../../images/CercoDeJerico.jpg";
import Img5 from "../../images/SeminarioDeVida.jpg";
import Img6 from "../../images/FriendsDay.jpg";
import Img7 from "../../images/AcampamentoHomem.jpg";
import "./styleEventos.css";
import Card from "react-bootstrap/Card";

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
    <div className="body-eventos">
      <h1 id="title">Eventos</h1>
      <div className="containerCarroseulEvent">
        <motion.div
          ref={carrosel}
          className="carrousel"
          initial={{ x: 100 }}
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
                  <Card style={{ width: "22rem" }}>
                    <Card.Img variant="top" src={imagem2} />

                    <Card.Body>
                      <Card.Title>Título do Evento</Card.Title>
                      <Card.Text>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc sit amet sem ac diam elementum suscipit vel
                          eget dui. In metus est, lobortis at fringilla ac,
                          euismod at metus.
                        </p>
                        <time>??/??/????</time> <br />
                        <time>00:00</time>
                      </Card.Text>
                    </Card.Body>
                  </Card>
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

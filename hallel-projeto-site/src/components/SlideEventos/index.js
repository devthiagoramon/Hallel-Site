import Img1 from "../../images/CantoNovoDeLouvor.jpg";
import Img2 from "../../images/BaileRomantico.jpg";
import Img3 from "../../images/JubileuDePrata.jpg";
import Img4 from "../../images/CercoDeJerico.jpg";
import Img5 from "../../images/SeminarioDeVida.jpg";
import Img6 from "../../images/FriendsDay.jpg";
import Img7 from "../../images/AcampamentoHomem.jpg";
import "./styleEventos.css";
import Card from "react-bootstrap/Card";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LinearProgress, Skeleton } from "@mui/material";

//  images controls
const SlideEventos = (props) => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const carrosel = useRef();
  const [width, setWidht] = useState(0);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  const renderizarEventos = useMemo(() => {
    let url = "http://localhost:8080/api/eventos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((evento) => {
        console.log(evento);
        setEventos(evento);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="body-eventos">
      <h1 id="title">Eventos</h1>
      <div className="containerCarroseulEvent">
        {eventos.length === 0 ? <div className="loaderEventoCarroseul"><Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /></div> :
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
              {eventos.map((evento) => {
                return (
                  <motion.div
                    className="imagem2"
                    key={evento.titulo}
                    whileHover={{ scale: "1.02" }}
                  >
                    <Card style={{ width: "22rem" }}>
                      <Card.Img variant="top" src={evento.imagem} />

                      <Card.Body>
                        <Card.Title>{evento.titulo}</Card.Title>
                        <Card.Text>
                          <p>
                            {evento.descricao}
                          </p>
                          <time>{evento.date}</time> <br />
                          <time>{evento.horario}</time>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>}
      </div>
    </div>
  );
};

export default SlideEventos;

import "./styleArtigos.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {Skeleton } from "@mui/material";
import { eventoListarAdm } from "../../../api/uris/EventosURLS";

//  images controls
const SlideArtigo = (props) => {

  const carrosel = useRef();
  const [width, setWidht] = useState(0);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  useMemo(() => {
    let url = eventoListarAdm();

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
      .then((produto) => {
        setProduto(produto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="body-eventos">
      <h1 id="title">Artigos Personalizados</h1>
      <div className="containerCarroseulEvent">
        {produto.length === 0 ? <div className="loaderEventoCarroseul"><Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /> <Skeleton width={400} height={500} /></div> :
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
              {produto?.map((produtos) => {
                return (
                  <motion.div
                    className="imagem2"
                    key={produtos.titulo}
                    whileHover={{ scale: "1.02" }}
                  >
                    <Card style={{ width: "22rem" }}>
                      <Card.Img variant="top" src={produto.imagem} />

                      <Card.Body>
                        <Card.Title>{produtos.titulo}</Card.Title>
                        <Card.Text>
                          <p>
                            {produtos.descricao}
                          </p>
                          <time>{produtos.date}</time> <br />
                          <time>{produtos.horario}</time>
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
export default SlideArtigo;
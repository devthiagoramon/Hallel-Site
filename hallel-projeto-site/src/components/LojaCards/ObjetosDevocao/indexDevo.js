import "./styleDevo.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {Skeleton } from "@mui/material";
import axios from "axios";
import Img from "../../../images/fundoCardTeste.jpg";


//  images controls
const SlideProdutos = (props) => {

  const carrosel = useRef();
  const [width, setWidht] = useState(0);
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  useEffect(()=>{

    let url = "http://localhost:8080/api/loja/produto";

      axios.get(url, {

        headers:{
          Authorization:localStorage.getItem("token"),
        }
      }).then((res) =>{

        setProduto(res.data);
      }).catch((error) =>{

        console.error("Requisição não concluída, erro: "+ error);
      })
  }, []);

  return (
    <div className="body-card-devocao">
      <h1 id="title">Objetos de Devoção</h1>
      <div className="containerCarroseulCardDev">
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
              {produto.map((produtos) => {
                return (
                  <motion.div
                    className="CardObjetoDevocao"
                    key={produtos.titulo}
                    whileHover={{ scale: "1.02" }}
                  >
                    <Card style={{ width: "20rem" }}>
                      <Card.Img variant="top" src={ produtos.imagem == null ? Img : produtos.imagem
                      } />

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

export default SlideProdutos;

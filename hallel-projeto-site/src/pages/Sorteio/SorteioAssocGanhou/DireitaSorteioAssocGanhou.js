import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@mui/material";

const DireitaSorteioAssocGanhou = () => {
  const [widthCarouselItemGanhos, setWidthCarouselItemGanhos] = useState(0);
  const [widthCarouselItemSorteados, setwidthCarouselItemSorteados] = useState(0);
  const carouselGanho = useRef();
  const carouselSorteados = useRef();

  useEffect(() => {
    setWidthCarouselItemGanhos(
      carouselGanho.current?.scrollWidth - carouselGanho.current?.offsetWidth
    );
  }, [carouselGanho]);

  useEffect(() => {
    setwidthCarouselItemSorteados(
      carouselSorteados.current?.scrollWidth - carouselSorteados.current?.offsetWidth
    );
  }, [carouselSorteados]);

  const arrayItensSorteados = [
    {
      nome: "Carrinho de brinquedo",
      imagem:
        "https://imgs.search.brave.com/pWyVU4rr6hRP1ejHWcYuRIB-81N_-A4deQX6-LlP8aQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF2YW4uY29tLmJy/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS9iMjNlNTMw/NGQxMWRmZjAwNzUw/YzNlOTJlNGIwMzhm/YS9jL2EvY2Fycmlu/aG8tcmFjZXItNTUt/bWsyMDYtZGlzbWF0/XzIyMzI1XzIuanBn",
    },
    {
      nome: "Terço cristão",
      imagem:
        "}https://imgs.search.brave.com/Lqtcl8k1JYEaeeXTAwa0iaX32mkdovK0Sin2pUIHDJo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMzLnRjZG4uY29t/LmJyL2ltZy9pbWdf/cHJvZC8xMDMxNzUv/a2l0XzA1X3RlcmNv/X3Blcm9sYV9kb3Vy/YWRvXzhfbW1fbWFv/c19lbnNhbmd1ZW50/YWRhc19kZV9qZXN1/c19hdGFjYWRvXzEw/ODc5XzFfMjAxOTA3/MTYxNjAzMzQuanBn",
    },
    {
      nome: "Biblia Sagrada",
      imagem:
        "https://imgs.search.brave.com/dm4of8HSlZgbwqNDrEUc4qo_pjgSyZWP6z_y_h1fypo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxUGhSTm41dGVM/LmpwZw",
    },
  ];

  const arrayItensGanhos = [
    {
      nome: "Carrinho de brinquedo",
      imagem:
        "https://imgs.search.brave.com/pWyVU4rr6hRP1ejHWcYuRIB-81N_-A4deQX6-LlP8aQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF2YW4uY29tLmJy/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS9iMjNlNTMw/NGQxMWRmZjAwNzUw/YzNlOTJlNGIwMzhm/YS9jL2EvY2Fycmlu/aG8tcmFjZXItNTUt/bWsyMDYtZGlzbWF0/XzIyMzI1XzIuanBn",
    },
  ];


  return (
    <div className="cont_direita_body_sort_assoc">
      <h3>Itens Sorteados</h3>
      <div className="cont_cards_itens_sort_assoc">
        <motion.div
          ref={carouselSorteados}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner_carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -widthCarouselItemSorteados }}
          >
            {arrayItensSorteados.map((item) => {
              return (
                <motion.div className="item_carousel">
                  <Card className="card_carousel_item">
                    <CardContent>
                      <h5>{item.nome}</h5>
                    </CardContent>
                    <CardContent>
                      <img src={item.imagem} alt="imagem item sorteado" />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <h3>Itens Ganhos</h3>
      <div className="cont_cards_itens_sort_assoc">
        <motion.div
          ref={carouselGanho}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner_carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -widthCarouselItemGanhos }}
          >
            {arrayItensGanhos.map((item) => {
              return (
                <motion.div className="item_carousel">
                  <Card className="card_carousel_item">
                    <CardContent>
                      <h5>{item.nome}</h5>
                    </CardContent>
                    <CardContent>
                      <img src={item.imagem} alt="imagem item sorteado" />
                    </CardContent>
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

export default DireitaSorteioAssocGanhou;

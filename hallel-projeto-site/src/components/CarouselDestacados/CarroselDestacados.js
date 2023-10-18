import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { listarEventosDestacadosHomeAPI } from "../../api/uris/HomeUris";
import { CircularProgress, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import "../CarouselNaoDestacados/styleCarousel.css"

const CarroselDestacados = () => {
  const carrosel = useRef();
  const [eventos, setEventos] = useState([]);
  const [timer, setTimer] = useState(false);
 
  useMemo(() => {
    let url = listarEventosDestacadosHomeAPI();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((evento) => {
        setEventos(evento);
      })
      .catch((error) => {
        console.log(error);
      });
      
      
  }, []);

  useMemo(() => {
    setTimeout(() => {
        if (eventos.length === 0) {
            setTimer(true);
        }
    }, 4000);
}, [setTimer, eventos]);
return (
    <div
        style={{
            display: "block",
            height: 500,
            width: 500,
            padding: 30,
            background: "#ffffff",
        }}
        >
            <h4 style={{textAlign: "left"}}>Em destaque</h4>
            {eventos.length === 0 ? (
                <>
                    {!timer ? (
                        <div className="CircleProgress" style={{top: "10em"}}>
                            <CircularProgress/>
                        </div>
                    ) : (
                        <div className="nenhum-evento-encontrado-cont">
                            <img
                                width="100"
                                height="100"
                                src="https://img.icons8.com/ios/100/nothing-found.png"
                                alt="nothing-found"
                            />
                            <br/>
                            <Typography variant="overline">Nenhum evento em destaque encontrado</Typography>
                        </div>
                    )}
                </>
            ) : (
                <Carousel
                    controls={true}
                    fade
                    indicators
                    slide
                    nextLabel
                    touch
                    showIndicators
                >
                    {eventos.map((evento) => {

evento.destacado == false ? (

  <></>
  ) : (


      <Carousel.Item interval={4000}>
          <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxHeight: "400px",
                  maxWidth: "600px",
              }}
          >
              {evento.imagem == undefined ? (
                  <img
                      src="https://i.pinimg.com/550x/52/f5/12/52f512f99b64f3c5d2ec9441cd7a3fd6.jpg"
                      style={{
                          minWidth: "100%",
                          height: "350px",
                          objectFit: "contain",
                          aspectRatio: "1/6",
                      }}
                      alt="imagem"
                  />
              ) : (
                  <img
                      src={evento.imagem}
                      style={{
                          maxHeight: "100%",
                          height: "350px",
                          objectFit: "contain",
                          aspectRatio: "1/2",
                      }}
                      alt="imagem"
                  />
              )}

<h5>{evento.titulo}</h5>
                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            )}
        </div>
    );     
                  };

export default CarroselDestacados;

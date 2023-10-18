import React, { useMemo, useState, useRef } from "react";
import { eventoListarAdm } from "../../api/uris/EventosURLS";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import ImgDefault from "../../images/IconeCalendario";
import { listarEventosSemDestaqueHomeAPI } from "../../api/uris/HomeUris";

export default function CarouselNaoDestacados() {
  const carrosel = useRef();
  const [eventos, setEventos] = useState([]);
  const [showInfos, setshowInfos] = useState(false);
  const [eventoEspc, setEventoEspc] = useState();
  const [width, setWidht] = useState(0);

  useEffect(() => {
    setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  useMemo(() => {
    let url = listarEventosSemDestaqueHomeAPI();

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
      <h4 style={{ textAlign: "left" }}>Eventos</h4>

      {eventos.length === 0 ? (
        <div className="CircleProgress" style={{ top: "10em" }}>
          <CircularProgress />
        </div>
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
            return (
              <Carousel.Item interval={5000}>
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
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
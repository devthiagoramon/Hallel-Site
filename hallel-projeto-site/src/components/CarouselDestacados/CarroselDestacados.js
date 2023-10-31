import React, {useMemo, useRef, useState} from "react";
import {CircularProgress, Typography} from "@mui/material";
import {Carousel} from "react-bootstrap";
import "../CarouselNaoDestacados/styleCarousel.css"
import "../CarouselDestacados/CarroselDestacados.css"
import {listarEventoComDestaqueService} from "../../service/HomeService";
import Img from '../../images/not-found.png';

const CarroselDestacados = () => {
    const carrosel = useRef();
    const [timer, setTimer] = useState(false);
    const [eventos, setEventos] = useState([]);
    useMemo(() => {
        listarEventoComDestaqueService().then((response)=>{
            setEventos(response)
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
        <div className="master"
            style={{
                display: "block",
                height: 500,
                width: 500,
                padding: 30,
                marginTop: "100px",
                marginBottom: '90px',
                marginRight: '100px',
                borderRadius: '10px',
                background: "#003015",

                
            }}
        >
            <h4 style={{textAlign: "left", color:"white"}}>Em destaque</h4>

            {eventos.length === 0 ? (
                <>
                    {!timer ? (
                        <div className="CircleProgress" style={{top: "10em", color:'white'}}>
                            <CircularProgress/>
                        </div>
                    ) : (
                        <div className="nenhum-evento-encontrado-cont">
                            <img
                                color="white"
                                width="100"
                                height="100"
                                src={Img}
                                alt="nothing-found"
                            />
                            <br/>
                            <Typography variant="overline" style={{color:'white'}}>Nenhum evento em destaque encontrado</Typography>
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

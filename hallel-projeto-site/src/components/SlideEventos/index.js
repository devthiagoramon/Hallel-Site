import Img from "../../images/fundoCardTeste.jpg";
import "./styleEventos.css";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {motion} from "framer-motion";
import {Skeleton} from "@mui/material";
import {Link} from "react-router-dom";
import {listarTodosEventosUsuarioService} from "../../service/EventoService";

//  images controls
const SlideEventos = (props) => {

    function alterarEventoEspc(item) {
        setEventoEspc("");
        setshowInfos(true);
        setEventoEspc(item);
    }

    const carrosel = useRef();
    const [showInfos, setshowInfos] = useState(false);
    const [eventoEspc, setEventoEspc] = useState();
    const [width, setWidht] = useState(0);

    useEffect(() => {
        setWidht(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
    }, []);
    const [eventos, setEventos] = useState()
    useMemo(() => {
        listarTodosEventosUsuarioService().then((response) => {
            setEventos(response);
        });
    }, [])


    return (
        <div className="body-eventos">
            <h1 id="title">Eventos</h1>

            <div className="containerCarroseulEventos">
                {eventos.length === 0 ?
                    <div className="loaderEventoCarroseul"><Skeleton width={300} height={400}/> <Skeleton width={300}
                                                                                                          height={400}/>
                        <Skeleton width={300} height={400}/> <Skeleton width={300} height={400}/> <Skeleton width={300}
                                                                                                            height={400}/>
                    </div> :
                    <motion.div
                        ref={carrosel}
                        className="carrousel"
                        initial={{x: 100}}
                        animate={{x: 0}}
                        transition={{duration: 0.8}}
                        whileTap={{cursor: "grabbing"}}
                    >
                        <motion.div
                            className="inner"
                            drag="x"
                            dragConstraints={{right: 10, left: -width}}
                        >
                            {eventos.map((evento) => {
                                return (

                                    <motion.div
                                        className="imgCartoesEvents"
                                        key={evento.titulo}
                                        whileHover={{scale: "1.02"}}
                                    >
                                        <div className="card" style={{
                                            width: "18rem",
                                            maxHeight: "50em"
                                        }}>
                                            <img src={evento.imagem == null ? Img : evento.imagem}
                                                 className="card-img-top" alt="..." style={{
                                                maxHeight: "200px",
                                                minHeight: "200px"
                                            }}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{evento.titulo}</h5>
                                                <p className="card-text">{evento.descricao}</p>
                                                <button className="btn btn-primary">


                                                    <Link style={{color: "#ffffff", fontWeight: "bold"}} to="/eventos">
                                                        Saiba mais
                                                    </Link>

                                                </button>
                                            </div>
                                        </div>
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

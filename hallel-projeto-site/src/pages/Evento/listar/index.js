import React, { useMemo, useState, useEffect} from "react";
import InfoEventos from "../MaisInformacoes";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Skeleton } from "@mui/material";
import "./eventoUser.css";
import {BsArrowReturnLeft} from "react-icons/bs"

function EventoUser() {
  const [eventos, setEventos] = useState([]);
  const [showInfos, setshowInfos] = useState(false);
  const [eventoEspc, setEventoEspc] = useState();

  function alterarEventoEspc(item) {
    setEventoEspc("");
    setshowInfos(true);
    setEventoEspc(item);
  }

  /*const renderizarEventos = useMemo(() => {
    let url = "http://localhost:8080/api/eventos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
   
      .then((evento) => {
        console.log(evento);
        setEventos(evento);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);  */



  useEffect(() => {
    let url = "http://localhost:8080/api/eventos";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
    .then((r) => r.json())
    .then((object) => {
      setEventos(object);
      console.log(eventos)
      
    })
    .catch((r) => {

      console.log("Erro");
    });
  }, []);


//  const eventosFiltrado = useMemo(() => {
//   let lowerPesquisa = pesquisa.toLowerCase();
//    return eventos.filter((eventos) =>
//       eventos.titulo.toLowerCase().includes(lowerPesquisa)
//     );
//    }, [eventos, pesquisa ,eventoEspc]);

  return (
    <div className="painelEventosUser">

    

      {showInfos ? (
        <InfoEventos evento={eventoEspc} hide={() => setshowInfos(false)} />
      ) : (
        <div>
          <h1 className="TituloEventoUser">Eventos</h1>


          <div className="CorpoEventoUser">


     {eventos.length === 0 ? <div className="loaderEventoCarroseul"><Skeleton width={300} height={450} /> <Skeleton width={300} height={450} /> <Skeleton width={300} height={450} /> <Skeleton width={300} height={450} /> <Skeleton width={300} height={450} /></div> :
          
            eventos.map((evento) => {
              return (
                <div className="card" style={{ width: "18rem",
                                               maxHeight: "480px" }}>
                  <img src={evento.imagem} className="card-img-top" alt="..." style={{maxHeight:"200px",
                                                                                      minHeight:"200px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{evento.titulo}</h5>
                    <p className="card-text">{evento.descricao}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => alterarEventoEspc(evento)}
                    >
                      Saber mais
                    </button>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      )}
    </div>
  );
}

export default EventoUser;

import React, { useMemo, useState, useEffect } from "react";
import InfoEventos from "../MaisInformacoes";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Skeleton, TextField } from "@mui/material";
import "./eventoUser.css";
import dayjs from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
import { listarTodosEventosUsuarioService } from "../../../service/EventoService";

function EventoUser() {
  const [showInfos, setshowInfos] = useState(false);
  const [eventoEspc, setEventoEspc] = useState();
  const [eventos, setEventos] = useState();

  useEffect(() => {
    async function loadEventos() {
      try {
        let response = await listarTodosEventosUsuarioService();
        setEventos(response);
      } catch (e) {
        console.error(e);
      }
    }
    loadEventos();
  }, []);

  function alterarEventoEspc(item) {
    setEventoEspc("");
    setshowInfos(true);
    setEventoEspc(item);
  }

  const filterEventos = (event) => {
    const query = event.target.value;
    var updateList = [...eventos];
    updateList = updateList.filter((item) => {
      return (
        item.titulo.toLowerCase().toString().indexOf(query.toLowerCase()) !== -1
      );
    });
    setEventos(updateList);
  };

  return (
    <div className="painelEventosUser">
      {showInfos ? (
        <InfoEventos
          evento={eventoEspc}
          setEvento={setEventoEspc}
          hide={() => setshowInfos(false)}
        />
      ) : (
        <div className="master">
          <div className="top"> 
          <div className="title" style={{margin:'0 auto'}}>
          <h1 className="TituloEventoUser">Eventos</h1>
          </div>
          <div className="contPesquisaEventoUser">
          <TextField
            id="pesquisaEvents"
            type="text"
            variant="outlined"
            size="small"
            label="Pesquisa..."
            onChange={filterEventos}
            
              sx={{
                  borderRadius: "0px",
                  width: "300px",
                  backgroundColor: '#E6EEE9',
                  border: 'none',
                    }}
                    InputProps={{
                      endAdornment: (
                        <SearchIcon style={{ color: "#003617" }} />
                      ),
                    }}
          />
          </div>
          </div>

          <div className="CorpoEventoUser">
            {eventos?.length === 0 ? (
              <div className="loaderEventoCarroseulEventos">
                <Skeleton width={250} height={500} />{" "}
                <Skeleton width={250} height={500} />{" "}
                <Skeleton width={250} height={500} />{" "}
                <Skeleton width={250} height={500} />{" "}
                <Skeleton width={250} height={500} />
                <Skeleton width={250} height={500} />
                <Skeleton width={250} height={500} />
                <Skeleton width={250} height={500} />
              </div>
            ) : (
              eventos?.map((evento) => {
                return (
                  <div className="grupo-evento">
                    <div
                      className="card"
                      style={{ width: "17rem", maxHeight: "480px",borderRadius:0,
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",}}
                    >
                      <img
                        src={evento.imagem}
                        className="card-img-top"
                        alt="..."
                        style={{ maxHeight: "200px", 
                        minHeight: "200px",
                       }}
                      />
                      <hr style={{marginTop:'0px'}}/>
                      <div className="card-body">
                        <h5 className="card-title" style={
                          {
                            color:'#00471F',
                            fontSize: '25px',
                            marginTop:'-10px'
                          }
                        }>{evento.titulo}</h5>
                        <p className="card-text">{evento.descricao}</p>
                        <br />
                        <p className="card-text">
                          Data: {dayjs(evento.date).format("DD/MM/YYYY")}
                        </p>
                        <br />
                        <button
                          className="btn btn-primary"
                          onClick={() => alterarEventoEspc(evento)}
                        >
                          Saber mais
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventoUser;

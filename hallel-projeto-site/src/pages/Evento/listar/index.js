import React, { useMemo, useState, useEffect } from "react";
import InfoEventos from "../MaisInformacoes";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Skeleton, TextField } from "@mui/material";
import "./eventoUser.css";
import dayjs from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
import { listarTodosEventosUsuarioService } from "../../../service/EventoService";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
            <div className="title" style={{ margin: '0 auto' }}>
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
              eventos?.map((evento) => (
                <EventoCard
              key={evento.id}
              evento={evento}
              alterarEventoEspc={alterarEventoEspc}
            />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const EventoCard = ({ evento, alterarEventoEspc }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`grupo-evento ${expanded ? "expanded" : ""}`} key={evento.id}>
      <div
        className="card"
        style={{
          width: "17rem",
          height: expanded ? "460px" : "400px",
          marginBottom: '2rem',
          borderRadius: 0,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          overflow: 'hidden',
          position: 'relative',
          marginTop: "-4rem"
        }}
      >
        <img
          src={evento.imagem}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "200px",
            minHeight: "200px",
          }}
        />
        <hr style={{ marginTop: '0px' }} />
        <div className="card-body">
          <h5 className="card-title" style={
            {
              color: '#00471F',
              fontSize: '25px',
              marginTop: '-1rem'
            }
          }>{evento.titulo}</h5>
          <p className="card-text" style={{
            color: '#00471F',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
          }}>{evento.descricao}</p>

          <div className="dateLine" style={{
            width: expanded ? '100%' : '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: '0',
            marginLeft: expanded ? '-1rem' : '-1rem',
            borderRadius: expanded ? '12px' : '12px',
          }}>
            <p className="card-text" style={{
              position: 'absolute',
              bottom: '0',
              marginLeft: '0.5rem',
              marginBottom: '0.5rem',
              fontWeight:'600',
              color: '#00471F',
            }}>
              Data: {dayjs(evento.date).format("DD/MM/YYYY")}
            </p>
            
            <button
              className="expand-button"
              onClick={handleExpand}
              style={{ marginLeft: 'auto',marginRight:'0.9rem',backgroundColor:'#003617', borderRadius:'100px',width:'22px',height:'20px',alignItems:'center',display:'flex'}}
            >
              {expanded ? <IoIosArrowUp style={{color:'white',margin:'0 auto'}}/> : <IoIosArrowDown style={{color:'white',margin:'0 auto'}}/>}
            </button>
          </div>
          {expanded && (
            <button className="saber-mais-button" onClick={() => alterarEventoEspc(evento)}>
              Saber mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default EventoUser;

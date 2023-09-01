import React, { Component } from "react";
import "./eventInfo.css";
import {  } from "react-icons/bs";
import { AltRouteRounded, ConnectWithoutContactRounded, OpenInFullOutlined, Padding } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";


const InfoEventos2 = ({evento, hide}) =>{

  const [estado, setEstado] = useState(true);

  return(
        
      <section className="containerEvents">
          <div className="area-infos">
            <Corpo2 evento={evento} estado={estado} hide={hide} setEstado={setEstado}/>
            <hr style={{marginTop: "30px"}}/>
            <Info2 evento={evento} estado={estado} setEstado={setEstado}/>
          </div>
        </section>
  );
}

const Corpo2 = ({evento, estado, setEstado}) =>{


  function mudar(){

    return(

      console.log("blabla"),
      setEstado(!estado)
    ) 
  }
  
  return(

    <div className="corpo_evento">

  <hr style={{marginTop: "30px"}}/>
        <div className="cont_titulo_desc_evento_user">
          <h1 className="titulo_evento">{evento.titulo}</h1>
          <div className="descricao_evento_user">
            <label style={{ justifySelf: "flex-start", fontSize: "1.4em", textIndent: "1.5em" }}>Descrição</label>
            <p style={{wordBreak: "break-word", fontSize: "1.2em"}}>{evento.descricao}</p>
          </div>
        </div>
        <div className="container_imagem_evento_user">
          <img
            className="imagemCp1_evento_user"
            src={evento.imagem}
            alt="imagem"
          />

          <div className="container_participar_evento" onClick={ function(e) {
                mudar(); //can pass arguments this.btnTapped(foo, bar);          
              }
              }>

            <Button
              sx={{ background: "#1a0631" }}
              variant="contained"
              endIcon={<ConnectWithoutContactRounded
              />}
            > Participar do evento 
            </Button>
          </div>
        </div>
  <hr style={{marginTop: "30px", marginBottom: "30px"}}/>
      </div>
  )
}


const Info2 = ({estado, setEstado, evento}) =>{

  return(

    <div className="infos">


{estado == true ?(

<Box
  component="form"
  sx={{
    '& > :not(style)':{m:1, width: '25ch'},
  }}
  noValidate
  autoComplete="off"
  style={{}}

  >

<div style={{display: "block", margin: "auto", background: "#DAE2F3", width: "100%"}}>
    
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  padding={2}
  style={{background: "#F3EFCB", borderRadius: "1em"}}
>

<Grid item xs={6} md={8}>
<label style= {{fontSize: "1.5em", fontWeight:"700"}}>Formulário de inscrição</label>
</Grid>

<Grid item xs={6} md={8}>
    
  <TextField id="outlined-basic" label="Nome" variant="outlined" color="secondary"/>
  </Grid>

  <Grid item xs={6} md={8}>
  <TextField id="outlined-basic" label="Email" variant="outlined" color="secondary"/>
  
  </Grid>

  <Grid  item xs={6} md={8}> 
  <TextField id="outlined-basic" label="Idade" variant="outlined" color="secondary"/>
  </Grid>

      
    <Grid  item xs={6} md={8}> 
            <Button
              color="secondary"
              sx={{color: "#ffffff", fontWeight: "700", display: "flex", justifyContent: "center"}}
              variant="contained"
              endIcon={<ConnectWithoutContactRounded
              />}
            > Confirmar 
              
            </Button>
    </Grid>

</Grid>

</div>

<hr style={{width: "100%"}}/>

</Box>




):(

  <>
  </>
)
}

        <div className="container_infos_desc_evento">
          <div className="subtopicos">
            <label>Informações</label>
            <ul className="topicosInfo">
              <li>Endereço: {evento.localEvento.localizacao}</li>
              <li>Data: {evento.date}</li>
              <li>Horário: {evento.horario}</li>
            </ul>
          </div>
          <div className="participantes">
            <label>Participantes:</label>
            <ul className="topicosInfo">
              {evento.palestrantes?.map((palestrante) => {
                return <li>{palestrante}</li>;
              })}
            </ul>
          </div>
        </div>
    
      </div>
  )
}
export default InfoEventos2;
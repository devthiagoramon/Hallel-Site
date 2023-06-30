import React, { useEffect } from "react";
import InputsBodyAdicionarLocais from "./InputsBodyAdicionarLocais";
import ContainerImagemAdicionarLocais from "./ContainerImagemAdicionarLocais";
import { useState } from "react";
import axios from "axios";

const EsquerdaBodyLocaisEventos = (props) => {
  const [imagemLocal, setImagemLocal] = useState(null);
  const [localizacao, setLocalizacao] = useState("");
  const [isRequestSucessFull, setIsRequestSucessFull] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const enviarRequest = () => {

    let url = "http://localhost:8080/api/locais/create";

    setEnviando(true);

    axios.post(url, {
      imagem: imagemLocal,
      localizacao: localizacao
    },{
      headers:{
        Authorization: localStorage.getItem("token"),
      }
    }).then(() => {
      setIsRequestSucessFull(true);
      setEnviando(false)
      props.setEnviadoSucesso(!props.enviadoSucesso);
    }).catch((error) => {
      console.log(error);
      setIsRequestSucessFull(false);
      setEnviando(false);
    })

  }

  useEffect(() => {
    setTimeout(() => {
      setIsRequestSucessFull(null);
    }, 5000);
  }, [isRequestSucessFull])
  

  return (
    <div className="esquerdaAdicionarLocais">
      <ContainerImagemAdicionarLocais
        imagemLocal={imagemLocal}
        setImagemLocal={setImagemLocal}
      />
      <InputsBodyAdicionarLocais localizacao={localizacao} setLocalizacao={setLocalizacao} enviarRequest={enviarRequest} isRequestSucessFull={isRequestSucessFull} enviando={enviando} />
    </div>
  );
};

export default EsquerdaBodyLocaisEventos;

import React from "react";
import { useRef } from "react";
import "./style.css";


const AdicionarEvento = () => {

  const titulo = useRef();

  return(
    <div>
      <div className="containerPrincipal">
        <div className="headCont">
          <input ref={titulo} className="tituloEvento" type="text" placeholder="Titulo"/>
        </div>
      </div>
    </div>
  )

}

export default AdicionarEvento;

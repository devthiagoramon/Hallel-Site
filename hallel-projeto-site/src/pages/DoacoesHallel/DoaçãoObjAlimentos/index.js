import React from "react";

import "./doacoesObjAlimentos.css";
import SelectDoacao from "../../../components/SelectDoacao";
import { AiFillPlusCircle, AiOutlinePlus } from "react-icons/ai";
import InputDoacao from "../../../components/InputDoacao";
import AddComponentDoacao from "./AddComponent";
import { useState } from "react";

import { GiConfirmed } from "react-icons/gi";
import { exibirNotificacao } from "../../../utils/utilNotification.tsx";
import CompDoacaoObjeto from "./CompDoacaoObjeto/index.js";
import { doarObjetoService } from "../../../service/FinanceiroService.js";
import { useNavigate } from "react-router-dom";

export default function DoacoesObjAlimentos(props) {
  const doacaoObjetoTemplate = {
    emailDoador: props.userDoacao.email,
    nomeDoador: props.userDoacao.nome,
    tipoItem: "roupa",
    quantidade: 0,
  };

  const [isRegistred, setIsRegistred] = useState(false);
  const [doacoesObjeto, setDoacoesObjeto] = useState([doacaoObjetoTemplate]);
  const navigate = useNavigate();

  const replicarComponente = () => {
    if (doacoesObjeto.length < 5) {
      let doacoesPrev = [...doacoesObjeto];
      doacoesPrev.push(doacaoObjetoTemplate);
      setDoacoesObjeto(doacoesPrev);
      console.log(doacoesPrev);
    } else {
      exibirNotificacao("Você só pode doar até 5 itens.", "info");
    }
  };

  function apagarComponente(index) {
    if (doacoesObjeto.length === 1) {
      exibirNotificacao("Você não pode apagar este item.", "warning");
    } else {
      let doacoesPrev = [...doacoesObjeto];
      doacoesPrev.splice(index, 1);
      setDoacoesObjeto(doacoesPrev);
    }
  }

  function handleChangeDoacao(index, variable, value) {
    let doacoesPrev = [...doacoesObjeto];
    switch (variable) {
      case "tipoItem":
        doacoesPrev[index].tipoItem = value;
        break;
      case "quantidade":
        doacoesPrev[index].quantidade = value;
        break;
      default:
        break;
    }
    setDoacoesObjeto(doacoesPrev);
  }

  async function verifyObjetos(doacoesObjeto) {
    let canSave = true;
    doacoesObjeto.forEach((item) => {
      if (item.quantidade <= 0) {
        exibirNotificacao(
          "Defina uma quantidade maior que 0 nos objetos que for doar!",
          "warning"
        );
        canSave = false;
      }
    });
    return canSave;
  }

  const handleRequestSaveDonation = async () => {
    const doacoesObjetoPrev = [...doacoesObjeto];
    let canSave = await verifyObjetos(doacoesObjetoPrev);
    console.log(doacoesObjeto)
    if (canSave) {
      let response = await doarObjetoService(doacoesObjetoPrev);
      if (response) {
        setIsRegistred(true);
        exibirNotificacao("Redirecionando!", "info");
        setTimeout(() => [navigate("/")], 3000);
      } else {
        exibirNotificacao("Erro ao salvar doação. Tente novamente!", "error");
      }
    }
  };

  return (
    <div className="div-main-doacao-obj">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
        }}
      >
        <p id="titleDoacao">Doação de objetos ou alimentos</p>
      </div>

      {doacoesObjeto.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "20vh",
            flexDirection: "column",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        >
          <CompDoacaoObjeto
            key={index}
            infosComp={item}
            index={index}
            handleChangeDoacao={handleChangeDoacao}
            addComp={replicarComponente}
            deleteComp={() => apagarComponente(index)}
          />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
        }}
      >
        <div className="div-button-registrar-doacao">
          <div
            className="button-voltar-doacao"
            onClick={() => props.setEtapa(2)}
          >
            <label>Voltar</label>
          </div>
          <div
            className="button-registrar-doacao"
            onClick={handleRequestSaveDonation}
          >
            <label>Registrar</label>
          </div>
          {isRegistred ? (
            <GiConfirmed style={{ margin: "10px" }} size={30} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

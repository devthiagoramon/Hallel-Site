import { useParams } from "react-router-dom";
import "./styleHistoricoAssociado.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAssociadoById } from "../../../../../api/uris/FinanceiroURLS";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

const Parte2 = ({ associadoObj }) => {
  const op = ["Anual", "Mensal", "Bimestral", "Trimestral", "Semestral"];

  return (
    <div className="container_infos_associado">
      <div className="inner_container_infos_associado">
        <div className="infos_associado">
          <h3>Nome: {associadoObj.nome}</h3>
          <h3>Cpf: {associadoObj.cpf}</h3>
          <h3>Idade: {associadoObj.idade}</h3>
        </div>
        <div className="container_imagem_associado">
          {associadoObj.imagem !== null && associadoObj.imagem !== undefined ? (
            <img src={associadoObj.imagem} />
          ) : (
            <div className="imagem_not_found_container_associado">
              <label>Sem foto</label>
              <IconButton className="btn_imagem_not_found_associado">
                <Edit />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <div className="filtro_historico_associado">
        <select>
          {op.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

const HistoricoAssociado = () => {
  const { idAssociado } = useParams();
  const [associadoObj, setAssociadoObj] = useState();

  useEffect(() => {
    let url = getAssociadoById(idAssociado);
    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setAssociadoObj(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container_historico_associado">
      <div className="header_historico_associado">
        <h1>Historico de pagamentos</h1>
      </div>
      <Parte2 associadoObj={associadoObj} />
    </div>
  );
};

export default HistoricoAssociado;

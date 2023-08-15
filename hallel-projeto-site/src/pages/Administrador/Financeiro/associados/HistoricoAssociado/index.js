import { useParams } from "react-router-dom";
import "./styleHistoricoAssociado.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAssociadoById, getPagamentoAssociadoByMesAndAno } from "../../../../../api/uris/FinanceiroURLS";
import { Button, IconButton, Skeleton } from "@mui/material";
import { Edit, TodayRounded } from "@mui/icons-material";
import dayjs from "dayjs";

const Parte2 = ({ associadoObj, setMesSelecionado, loadFromAPIinfoByPagamentoByMesAndAno }) => {
  return (
    <div className="container_infos_associado">
      <div className="inner_container_infos_associado">
        <div className="infos_associado">
          <h3>Nome: {associadoObj !== null ? associadoObj.nome : ""}</h3>
          <h3>Cpf: {associadoObj !== null ? associadoObj.cpf : ""}</h3>
          <h3>Idade: {associadoObj !== null ? associadoObj.idade : ""}</h3>
        </div>
        <div className="container_imagem_associado">
          {associadoObj !== null && (
            <>
              {associadoObj.imagem !== null &&
                associadoObj.imagem !== undefined ? (
                <img src={associadoObj.imagem} />
              ) : (
                <div className="imagem_not_found_container_associado">
                  <label>Sem foto</label>
                  <IconButton className="btn_imagem_not_found_associado">
                    <Edit />
                  </IconButton>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="filtro_historico_associado">
        <div className="header_meses_pagos">
          <label>Meses pagos</label>
          <TodayRounded />
        </div>
        <div className="container_meses_pagos">
          {associadoObj !== null && (
            <>
              {associadoObj.mesesPagos.map((date) => {
                return (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setMesSelecionado(dayjs(date).format("MM/YYYY"));
                      loadFromAPIinfoByPagamentoByMesAndAno(dayjs(date).format("MM/YYYY"))
                    }}
                  >
                    {dayjs(date).format("MM/YYYY")}
                  </Button>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HistoricoAssociado = () => {
  const { idAssociado } = useParams();
  const [associadoObj, setAssociadoObj] = useState(null);
  const [mesSelecionado, setMesSelecionado] = useState("");
  const [pagamentoMesSelecionado, setPagamentoMesSelecionado] = useState(null);

  useEffect(() => {
    let url = getAssociadoById(idAssociado);
    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setAssociadoObj(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function loadFromAPIinfoByPagamentoByMesAndAno(date) {
    let dateString = String(date);
    let mes = dateString.substring(0, 2);
    let ano = dateString.substring(3);

    let url = getPagamentoAssociadoByMesAndAno(idAssociado, mes, ano);

    axios.get(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data);
    })
  }
  return (
    <div className="container_historico_associado">
      <div className="header_historico_associado">
        <h1>Historico de pagamentos</h1>
      </div>
      <Parte2
        associadoObj={associadoObj}
        setMesSelecionado={setMesSelecionado}
        loadFromAPIinfoByPagamentoByMesAndAno={loadFromAPIinfoByPagamentoByMesAndAno}
      />
      <div className="container_info_pagamento_mes">
        <div className="header_info_pagamento_mes">
          <h3 style={{ textAlign: "left" }}>Informação do pagamento do mês </h3>
          <label>
            {mesSelecionado !== "" ? "Mês selecionado: " + mesSelecionado : "Nenhum mês selecionado"}
          </label>
        </div>
        <div className="body_info_pagamento_mes">
          <div className="container_comprovante_pagamento_associado">
            <Skeleton variant="rounded" width={"100%"} height={375} />
          </div>
          <div className="container_info_pagamento_mes">
            <label>{pagamentoMesSelecionado !== null ? "Método de pagamento: " + pagamentoMesSelecionado.metodoPagamento : ""}</label>
            <label>{pagamentoMesSelecionado !== null ? "Data do pagamento: " + pagamentoMesSelecionado.date : ""}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricoAssociado;

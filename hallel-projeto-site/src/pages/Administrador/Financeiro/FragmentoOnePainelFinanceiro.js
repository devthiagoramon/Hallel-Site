import React, { useEffect, useState } from "react";
import IconeCalendario from "../../../images/IconeCalendario";
import MetaEntradaComponentPainelFinanceiro from "./MetaEntradaComponentPainelFinanceiro";
import { Table } from "react-bootstrap";

const FragmentoOnePainelFinanceiro = () => {
  const [mesAtual, setmesAtual] = useState("");

  useEffect(() => {
    let dataObj = new Date();
    let mesAtualString = (dataObj.getMonth() + 1).toString();
    let anoAtualString = dataObj.getFullYear().toString();

    let mesAtualStringConverted =
      mesAtualString.length === 1 ? "0" + mesAtualString : mesAtualString;

    let stringResultado = "" + mesAtualStringConverted + "/" + anoAtualString;
    setmesAtual(stringResultado);
  }, [mesAtual]);
  return (
    <div className="cont_fragmento_one_painel_financeiro">
      <div className="cont_esquerda_fragmento_one">
        <div className="header_info_mes_painel_financeiro">
          <span>Mês {mesAtual}</span>
          <IconeCalendario />
        </div>
        <MetaEntradaComponentPainelFinanceiro />
      </div>
      <div className="cont_direita_fragmento_one">
        <div className="cont_infos_fragmentos_one">
          <div className="container_info_fragmentos_one_painel_financeiro">
            <label>R$ 3.000,00</label>
            <span>Entrada Mensal</span>
            <a href="/administrador/painelFinanceiro">Saber mais</a>
          </div>
          <div className="container_info_fragmentos_one_painel_financeiro">
            <label>R$ 750,00</label>
            <span>Saida Mensal</span>
            <a href="/administrador/painelFinanceiro">Saber mais</a>
          </div>
        </div>
        <div className="cont_tabelas_ultimas_painel_financeiro">
          <label>Ultimas Entradas</label>
          <Table
            hover
            style={{
              width: "100%",
              maxWidth: "100%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <thead>
              <tr>
                <th>Descrição da renda</th>
                <th>Objeto</th>
                <th>Data da receita</th>
                <th>Feito por</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FragmentoOnePainelFinanceiro;

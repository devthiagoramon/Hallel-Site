import React, {useEffect, useMemo, useState} from "react";
import IconeCalendario from "../../../images/IconeCalendario";
import MetaEntradaComponentPainelFinanceiro from "./MetaEntradaComponentPainelFinanceiro";
import {Table} from "react-bootstrap";
import {LinearProgress} from "@mui/material";
import {entradaUltimasEntradasService} from "../../../service/FinanceiroService";

const FragmentoOnePainelFinanceiro = () => {
  const [mesAtual, setmesAtual] = useState("");
  const [utlimasEntradas, setUltimasEntradas] = useState([])
  useMemo(() => {
       entradaUltimasEntradasService().then((response) => {
         setUltimasEntradas(response)
       });
  }, []);

  // Load atual mes

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
            <span>Entrada Mensal</span>
            <a href="/administrador/painelFinanceiro/entradas">Saber mais</a>
          </div>
          <div className="container_info_fragmentos_one_painel_financeiro">
            <span>Saida Mensal</span>
            <a href="/administrador/painelFinanceiro/saidas">Detalhar</a>
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
                <th>Descrição da entrada</th>
                <th>Valor da entrada</th>
              </tr>
            </thead> 
            <tbody>
              {utlimasEntradas.length !== 0 ? (
                <>
                  {utlimasEntradas.map((entrada) => {
                    return (
                      <tr>
                        <td>{entrada.descricaoEntrada}</td>
                        <td>
                          {entrada.valorEntrada.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <LinearProgress sx={{ backgroundColor: "#1A0631" }} />
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FragmentoOnePainelFinanceiro;

import React from "react";
import "./gastos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import Add from "./../../../../images/addCircle.svg";
import { useMemo } from "react";
import { useState } from "react";
import ModalAddDespesa from "./addModal";
import gastosPDF from "../../../../Reports/gastos/saidas";
import { MoreVertRounded, SaveAlt } from "@mui/icons-material";
import { Table } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";

const SaidasFinanceirasADM = () => {
  const [gastos, setgastos] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");
  const [lastSaidas, setLastSaidas] = useState([]);

  const [openModalAddDespesas, setopenModalAddDespesas] = useState(false);

  useMemo(() => {
    let url;
    switch (datasToBePushed) {
      case "todos":
        url = "http://localhost:8080/api/financeiro/gastos";
        break;
      case "dia":
        url = "http://localhost:8080/api/financeiro/gastos/thisDay";
        break;
      case "semana":
        url = "http://localhost:8080/api/financeiro/gastos/thisWeek";
        break;
      default:
        url = "http://localhost:8080/api/financeiro/gastos";
        break;
    }

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((gastos) => {
        setgastos(gastos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [datasToBePushed]);

  useMemo(() => {
    let url = "http://localhost:8080/api/financeiro/ultimasSaida";
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    fetch(url, {
      headers: myHeaders,
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((lastSaidas) => {
        setLastSaidas(lastSaidas);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function getSaldoTotal() {
    let saldoTotal = 0;
    gastos.forEach((item) => {
      saldoTotal += item.valor;
    });
    return saldoTotal;
  }

  function dataAtual() {
    let date = new Date();
    let dia = String(date.getDay());
    let mes = String(date.getMonth());
    let ano = String(date.getFullYear());

    return dia + "/" + mes + "/" + ano;
  }

  function abrirMenuDate(event) {
    setAnchorEl(event.currentTarget);
  }

  function closeMenuDate() {
    setAnchorEl(null);
  }

  function mudarListagem(select) {
    if (select === "dia") {
      setdatasToBePushed("dia");
    } else if (select === "semana") {
      setdatasToBePushed("semana");
    } else if (select === "todos") {
      setdatasToBePushed("todos");
    }
  }
  return (
    <div className="containerGasto">
      <div className="cabecalhoGasto">
        <a>Saidas</a>
      </div>
      <div className="containerTabela">
        <div className="headContTabela">
          <div className="tituloHeadContTabela">
            <a>Tabela de saidas</a>
          </div>
          <div className="iconsHeadContTabela">
            <IconButton
              style={{ width: "50px", height: "50px" }}
              onClick={() => setopenModalAddDespesas(true)}
            >
              <img style={{ width: "40px", height: "40px" }} src={Add} />
            </IconButton>
            <IconButton style={{ width: "50px", height: "50px" }}>
              <SaveAlt
                style={{ width: "30px", height: "30px", color: "#333" }}
                className="icons"
                onClick={() => gastosPDF(gastos)}
              />
            </IconButton>
            <span>
              <IconButton
                onClick={(e) => abrirMenuDate(e)}
                sx={{ width: "50px", height: "50px" }}
              >
                <MoreVertRounded
                  sx={{ width: "30px", height: "30px", color: "#252525" }}
                />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openDateMenu}
                onClose={() => closeMenuDate()}
              >
                <MenuItem
                  onClick={() => {
                    mudarListagem("dia");
                  }}
                >
                  Dia
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    mudarListagem("semana");
                  }}
                >
                  Semana
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    mudarListagem("todos");
                  }}
                >
                  Todos
                </MenuItem>
              </Menu>
            </span>
          </div>
        </div>
        {gastos.length === 0 ? (
          <div style={{ width: "65vw" }}>
            <LinearProgress sx={{ width: "100%" }} />
            <Table style={{ width: "100%" }} borderless hover>
              <thead>
                <tr>
                  <th>Descrição da saida</th>
                  <th>Para</th>
                  <th>Data da saida</th>
                  <th>Feito por</th>
                  <th>Valor</th>
                </tr>
              </thead>
            </Table>
          </div>
        ) : (
          <Table style={{ width: "65vw", height: "100%" }} hover>
            <thead>
              <tr>
                <th>Descrição da saida</th>
                <th>Para</th>
                <th>Data da saida</th>
                <th>Feito por</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((item) => {
                return (
                  <tr>
                    <td>{item.descricaoGasto}</td>
                    <td>{item.finalidadeGasto}</td>
                    <td>{item.dataGasto}</td>
                    <td>{item.usuarioGasto}</td>
                    <td>
                      {item.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
      <div className="containerUltGastos">
        <div className="headUltGastos">
          <p>Ultimas saidas</p>
        </div>
        <div className="containerTabelaUltGasto">
          {lastSaidas.length === 0 ? (
            <div>
              <LinearProgress sx={{ width: "90%" }} />
              <Table borderless hover>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
              </Table>
            </div>
          ) : (
            <Table hover>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {lastSaidas.map((item) => {
                  return (
                    <tr>
                      <td>{item.descricaoSaida}</td>
                      <td>
                        {item.valorSaida.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>

      <ModalAddDespesa
        openModalAddDespesas={openModalAddDespesas}
        setopenModalAddDespesas={setopenModalAddDespesas}
      />
    </div>
  );
};

export default SaidasFinanceirasADM;

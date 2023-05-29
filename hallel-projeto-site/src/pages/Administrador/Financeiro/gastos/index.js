import React from "react";
import "./gastos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import Add from "./../../../../images/addCircle.svg";
import { useMemo } from "react";
import { useState } from "react";
import ModalAddDespesa from "./addModal";
import gastosPDF from "../../../../Reports/gastos/gastos";
import { MoreVertRounded, SaveAlt } from "@mui/icons-material";
import { Table } from "react-bootstrap";
import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";

const Gasto = () => {
  const [gastos, setgastos] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");

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
        <a>Gastos</a>
      </div>
      <div className="containerTabela">
        <div className="headContTabela">
          <div className="tituloHeadContTabela">
            <a>Tabela de gasto</a>
          </div>
          <div className="iconsHeadContTabela">
            <span>
              <IconButton
                style={{ width: "50px", height: "50px" }}
                onClick={() => setisModalOpen(true)}
              >
                <img style={{ width: "40px", height: "40px" }} src={Add} />
              </IconButton>
            </span>
            <span>
              <IconButton style={{ width: "50px", height: "50px" }}>
                <SaveAlt
                  style={{ width: "30px", height: "30px", color: "#333" }}
                  className="icons"
                  onClick={() => gastosPDF(gastos)}
                />
              </IconButton>
            </span>
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
            <Table style={{ width: "100%" }} striped borderless hover>
              <thead>
                <tr>
                  <th>Descrição do gasto</th>
                  <th>Para</th>
                  <th>Data do gasto</th>
                  <th>Feito por</th>
                  <th>Valor</th>
                </tr>
              </thead>
            </Table>
          </div>
        ) : (
          <Table style={{ width: "65vw", height: "100%" }} striped hover>
            <thead>
              <tr>
                <th>Descrição do gasto</th>
                <th>Para</th>
                <th>Data do gasto</th>
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
                    <td>R$ {item.valor}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
      <div className="containerUltGastos">
        <div className="headUltGastos">
          <p>Ultimos Gastos</p>
        </div>
        <div className="containerTabelaUltGasto">
          <table>
            <tr>
              <td>Teste</td>
              <td>Teste</td>
            </tr>
          </table>
        </div>
      </div>

      <ModalAddDespesa
        open={isModalOpen}
        onClose={() => setisModalOpen(false)}
      />
    </div>
  );
};

export default Gasto;

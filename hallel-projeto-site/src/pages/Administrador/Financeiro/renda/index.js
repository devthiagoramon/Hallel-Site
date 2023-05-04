import React from "react";
import "./renda.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";
import rendasPDF from "../../../../Reports/rendas/rendas";
import { MoreVertRounded, SaveAlt } from "@mui/icons-material";
import { Table } from "react-bootstrap";
import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";

const Renda = () => {
  const [receitas, setReceitas] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");

  const [lastReceitas, setlastReceitas] = useState([]);

  useMemo(() => {
    let url;
    switch (datasToBePushed) {
      case "todos":
        url = "http://localhost:8080/api/financeiro/receita";
        break;
      case "dia":
        url = "http://localhost:8080/api/financeiro/receita/thisDay";
        break;
      case "semana":
        url = "http://localhost:8080/api/financeiro/receita/thisWeek";
        break;
      default:
        url = "http://localhost:8080/api/financeiro/receita";
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
      .then((receitas) => {
        setReceitas(receitas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [datasToBePushed]);

  useMemo(() => {
    let url = "http://localhost:8080/api/financeiro/ultimasReceitas";
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
      .then((lastReceitas) => {
        setlastReceitas(lastReceitas);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
    <div className="containerRenda">
      <div className="cabecalho">
        <a>Rendas</a>
      </div>
      <div className="containerTabelaRenda">
        <div className="headContTabelaRenda">
          <div className="tituloHeadContTabelaRenda">
            <a>Tabela de receitas</a>
          </div>
          <div className="iconsHeadContTabelaRenda">
            <a href="#">
              <SaveAlt
                style={{ width: "55px", height: "55px", color: "#333" }}
                className="icons"
                onClick={() => rendasPDF(receitas)}
              />
            </a>
            <span>
              <IconButton
                onClick={(e) => abrirMenuDate(e)}
                sx={{ width: "60px", height: "60px" }}
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
        {receitas.length === 0 ? (
          <div style={{ width: "65vw" }}>
            <LinearProgress sx={{ width: "100%" }} />
            <Table style={{ width: "100%" }} striped borderless hover>
              <thead>
                <tr>
                  <th>Descrição da renda</th>
                  <th>Objeto</th>
                  <th>Data da receita</th>
                  <th>Feito por</th>
                  <th>Valor</th>
                </tr>
              </thead>
            </Table>
          </div>
        ) : (
          <Table style={{ width: "65vw" }} striped borderless hover>
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
              {receitas.map((item) => {
                return (
                  <tr>
                    <td>{item.descricaoReceita}</td>
                    <td>{item.objeto === false ? "Não" : "Sim"}</td>
                    <td>{item.dataReceita}</td>
                    <td>{item.usuarioReceita}</td>
                    <td>R$ {item.valor}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
      <div className="containerUltRenda">
        <div className="headUltRenda">
          <p>Ultimas Rendas</p>
        </div>
        <div className="containerTabelaUltRenda">
          {lastReceitas.length === 0 ? (
            <div>
              <LinearProgress sx={{width: "90%"}}/>
              <Table striped borderless hover>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
              </Table>
            </div>
          ) : (
            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {lastReceitas.map((item) => {
                  return (
                    <tr>
                      <td>{item.descricaoReceita}</td>
                      <td>R$ {item.valor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Renda;

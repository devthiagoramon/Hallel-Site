import React from "react";
import "./doacoesAdm.css";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";
import {Table} from "react-bootstrap";
import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";
import { MoreVert, MoreVertRounded } from "@mui/icons-material";

const DoacoesDinheiroAdm = () => {
  const [doacoes, setdoacoes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");

  useMemo(() => {
    let url;
    if (datasToBePushed === "todos") {
      url = "http://localhost:8080/api/doacao/list";
    } else if (datasToBePushed === "dia") {
      url = "http://localhost:8080/api/doacao/list/thisDay";
    } else if (datasToBePushed === "semana") {
      url = "http://localhost:8080/api/doacao/list/thisWeek";
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
      .then((doacoes) => {
        setdoacoes(doacoes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [datasToBePushed]);

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
    <div className="containerDoacoesAdm">
      <div className="cabecalhoDoacoesAdm">
        <a>Doações</a>
      </div>
      <div className="containerTabelaDoacoesAdm">
        <div className="headContTabelaDoacoesAdm">
          <div className="tituloHeadContTabelaDoacoesAdm">
            <a>Tabela de Doações</a>
          </div>
          <div className="iconsHeadContTabelaDoacoesAdm">
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
          </div>
        </div>

        
        {doacoes.length === 0 ? (

          <div style={{width: "94vw"}}>


            <LinearProgress sx={{width: "100%"}}/>
            <Table style={{ width: "100%" }} striped hover>
              <thead>
                <tr>
                  <th>Email do Doador</th>
                  <th>Descrição</th>
                  <th>Tipo</th>
                  <th>Data da Doação</th>
                  <th>Valor da Doação</th>
                </tr>
              </thead>
            </Table>
          </div>
        ) : (
          <Table style={{ width: "94vw" }} striped hover>
            <thead>
              <tr>
                <th>Email do Doador</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Data da Doação</th>
                <th>Valor da Doação</th>
              </tr>
            </thead>
            <tbody>
              {doacoes.map((item) => {
                return (
                  <tr>
                    <td>{item.emailDoador}</td>
                    <td>{item.descricao}</td>
                    <td>{item.tipo}</td>
                    <td>{item.dataDoacao}</td>
                    <td>{item.valorDoacao}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default DoacoesDinheiroAdm;

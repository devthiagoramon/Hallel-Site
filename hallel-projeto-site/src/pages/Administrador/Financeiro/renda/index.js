import React, { useMemo, useState } from "react";
import "./renda.css";
import rendasPDF from "../../../../Reports/rendas/entradas";
import { MoreVertRounded, SaveAlt } from "@mui/icons-material";
import { Table } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";
import { receitasListarAPI, receitasListarDiaAPI, receitasListarSemanaAPI } from "../../../../api/uris/FinanceiroURLS";
import { getMesAndAnoAtual } from "../../../../utils/utilData";
import { entradaUltimasEntradasService } from "../../../../service/FinanceiroService";

const EntradasFinanceiroAdm = () => {
    const [entradas, setEntradas] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const openDateMenu = Boolean(anchorEl);

    const [datasToBePushed, setDatasToBePushed] = useState("todos");

    const lastEntradas = useMemo(() => {
        return entradaUltimasEntradasService();
    }, [entradas]);

    useMemo(() => {
        let auxData = getMesAndAnoAtual();

        let url;
        switch (datasToBePushed) {
            case "todos":
                url = receitasListarAPI(auxData.mes, auxData.ano);
                break;
            case "dia":
                url = receitasListarDiaAPI();
                break;
            case "semana":
                url = receitasListarSemanaAPI();
                break;
            default:
                url = receitasListarAPI(auxData.mes, auxData.mes);
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
                setEntradas(receitas);
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
            setDatasToBePushed("dia");
        } else if (select === "semana") {
            setDatasToBePushed("semana");
        } else if (select === "todos") {
            setDatasToBePushed("todos");
        }
    }

    return (
        <div className="containerRenda">
            <div className="cabecalho">
                <a>Entradas</a>
            </div>
            <div className="containerTabelaRenda">
                <div className="headContTabelaRenda">
                    <div className="tituloHeadContTabelaRenda">
                        <a>Tabela de entradas</a>
                    </div>
                    <div className="iconsHeadContTabelaRenda">
                        <IconButton
                            sx={{width: "50px", height: "50px"}}
                            onClick={() => rendasPDF(entradas)}
                        >
                            <SaveAlt
                                style={{width: "30px", height: "30px", color: "#333"}}
                                className="icons"
                            />
                        </IconButton>
                        <span>
              <IconButton
                  onClick={(e) => abrirMenuDate(e)}
                  sx={{width: "50px", height: "50px"}}
              >
                <MoreVertRounded
                    sx={{width: "30px", height: "30px", color: "#252525"}}
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
                {entradas.length === 0 ? (
                    <div style={{width: "65vw"}}>
                        <LinearProgress sx={{width: "100%"}}/>
                        <Table style={{width: "100%"}} striped hover>
                            <thead>
                            <tr>
                                <th>Descrição da entrada</th>
                                <th>Objeto</th>
                                <th>Data da entrada</th>
                                <th>Feito por</th>
                                <th>Valor</th>
                            </tr>
                            </thead>
                        </Table>
                    </div>
                ) : (
                    <Table style={{width: "65vw"}} hover>
                        <thead>
                        <tr>
                            <th>Descrição da entrada</th>
                            <th>Objeto</th>
                            <th>Data da entrada</th>
                            <th>Feito por</th>
                            <th>Valor</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(entradas) && entradas.length > 0 && entradas.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.descricaoReceita}</td>
                                    <td>{item.objeto === false ? "Não" : "Sim"}</td>
                                    <td>{item.dataReceita}</td>
                                    <td>{item.usuarioReceita}</td>
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
            <div className="containerUltRenda">
                <div className="headUltRenda">
                    <p>Ultimas Entradas</p>
                </div>
                <div className="containerTabelaUltRenda">
                    {Array.isArray(lastEntradas) && lastEntradas.length > 0 ? (
                        <Table hover>
                            <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                            </thead>
                            <tbody>
                            {lastEntradas.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.descricaoEntrada}</td>
                                        <td>
                                            {item.valorEntrada.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    ) : (
                        <div>
                            <LinearProgress sx={{width: "90%"}}/>
                            <Table borderless hover>
                                <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                                </thead>
                            </Table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EntradasFinanceiroAdm;

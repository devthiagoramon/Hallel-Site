import React, { useEffect } from "react";
import "./gastos.css";
import Printer from "./../../../../images/impressora-svg.svg";
import Arrow from "./../../../../images/arrow-icon.svg";
import Add from "./../../../../images/addCircle.svg";
import { useMemo } from "react";
import { useState } from "react";
import ModalAddDespesa from "./addModal";
import gastosPDF from "../../../../Reports/gastos/saidas";
import {
  Delete,
  MoreVertRounded,
  SaveAlt,
  Visibility,
} from "@mui/icons-material";
import { Table } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuSpecCodigo from "./MenuSpecCodigo";
import { Edit } from "lucide-react";
import ModalDeleterSaida from "./ModalDeletar";
import ModalMostrarImagemSaida from "./addModal/ModalMostrarImagemSaida";
import {
  gastosListarAPI,
  gastosListarDiaAPI,
  gastosListarSemanaAPI,
  gastosUltimasSaidasAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import { getMesAndAnoAtual } from "../../../../utils/utilData";

const SaidasFinanceirasADM = () => {
  const [gastos, setgastos] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");
  const [lastSaidas, setLastSaidas] = useState([]);
  const [alterou, setAlterou] = useState(false);
  const [anchorMenuSpec, setAnchorMenuSpec] = useState(null);
  const [codigoVisualizar, setCodigoVisualizar] = useState(null);

  const [idSaida, setIdSaida] = useState("");
  const [openModalDeletar, setOpenModalDeletar] = useState(false);

  const [openModalAddDespesas, setopenModalAddDespesas] = useState(false);
  const [openModalAnexoSaida, setopenModalAnexoSaida] = useState(false);
  const [imagemAnexoSelecionada, setimagemAnexoSelecionada] = useState("");

  useEffect(() => {
    let dataAux = getMesAndAnoAtual();

    let url;
    switch (datasToBePushed) {
      case "todos":
        url = gastosListarAPI(dataAux.mes, dataAux.ano);
        break;
      case "dia":
        url = gastosListarDiaAPI();
        break;
      case "semana":
        url = gastosListarSemanaAPI();
        break;
      default:
        url = gastosListarAPI(dataAux.mes, dataAux.ano);
        break;
    }

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setgastos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [alterou, datasToBePushed]);

  useEffect(() => {
    let url = gastosUltimasSaidasAPI();

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLastSaidas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [alterou]);

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

  function openMenuSpecCodigo(e, codigo) {
    setAnchorMenuSpec(e.currentTarget);
    setCodigoVisualizar(codigo);
  }

  function handleOpenModalDeletar(id) {
    setIdSaida(id);
    setOpenModalDeletar(true);
  }

  function handleOpenModalMostrarImagem(imagem) {
    setopenModalAnexoSaida(true);
    setimagemAnexoSelecionada(imagem);
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
                  <th>Comprovante</th>
                  <th>Opções</th>
                </tr>
              </thead>
            </Table>
          </div>
        ) : (
          <Table style={{ width: "65vw", height: "100%" }} hover>
            <thead>
              <tr>
                <th>Código #</th>
                <th>Descrição da saida</th>
                <th>Para</th>
                <th>Data da saida</th>
                <th>Feito por</th>
                <th>Valor</th>
                <th>Comprovante</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((item) => {
                return (
                  <tr key={item.id}>
                    <Tooltip title="Clique para ver mais sobre o código">
                      <td
                        onClick={(e) =>
                          openMenuSpecCodigo(e, item.codigo.numCodigo)
                        }
                        className="td_hover_codigo_saida"
                      >
                        #{item.codigo.numCodigo}
                      </td>
                    </Tooltip>
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
                    <td style={{ textAlign: "center" }}>
                      <IconButton
                        onClick={() =>
                          handleOpenModalMostrarImagem(item.imagemAnexo)
                        }
                        sx={{ height: "20px", color: "#252525" }}
                      >
                        <Visibility />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton sx={{ height: "20px", color: "#252525" }}>
                        <Edit />
                      </IconButton>
                      <IconButton
                        sx={{ height: "20px", color: "#252525" }}
                        onClick={() => {
                          handleOpenModalDeletar(item.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
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
        alterou={alterou}
        setAlterou={setAlterou}
      />
      <MenuSpecCodigo
        anchorMenuSpec={anchorMenuSpec}
        setAnchorMenuSpec={setAnchorMenuSpec}
        codigoVisualizar={codigoVisualizar != null ? codigoVisualizar : 0}
        setCodigoVisualizar={setCodigoVisualizar}
      />
      <ModalDeleterSaida
        idSaida={idSaida}
        openModalDeletar={openModalDeletar}
        setOpenModalDeletar={setOpenModalDeletar}
        setAlterou={setAlterou}
        alterou={alterou}
      />
      <ModalMostrarImagemSaida
        imagemAnexoSrc={imagemAnexoSelecionada}
        openModalAnexoSaida={openModalAnexoSaida}
        setOpenModalAnexoSaida={setopenModalAnexoSaida}
      />
    </div>
  );
};

export default SaidasFinanceirasADM;

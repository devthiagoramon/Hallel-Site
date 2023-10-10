import React from "react";
import "./doacoesAdm.css";
import { useMemo } from "react";
import { useState } from "react";
import { CircularProgress, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from "cdbreact";
import {
  doacaoListarDiaAPI,
  doacaoListarSemanaAPI,
  doacaoListarTodosAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import { getMesAndAnoAtual } from "../../../../utils/utilData";
import {listDoacoesService} from "../../../../service/FinanceiroService";

const DoacoesDinheiroAdm = () => {
  const [doacoes, setdoacoes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDateMenu = Boolean(anchorEl);

  const [datasToBePushed, setdatasToBePushed] = useState("todos");

  useMemo(() => {
    const dataAux = getMesAndAnoAtual();
    let response = listDoacoesService(dataAux, datasToBePushed);
    setdoacoes(response);
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

  const data = () => {
    return {
      columns: [
        {
          label: "E-mail",
          field: "email",
          width: 50,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "E-mail do Doador",
          },
        },
        {
          label: "Descrição",
          field: "descricao",
          width: 100,
        },
        {
          label: "Tipo",
          field: "tipo",
          width: 150,
        },
        {
          label: "Data da Doacao",
          field: "dataDoacao",
          width: 150,
        },
        {
          label: "Valor da doação",
          field: "dataDoacao",
          width: 150,
        },
      ],

      rows: doacoes.map((item) => ({
        email: item.emailDoador,
        descricao: item.descricao,
        status: item.localidade,
        tipo: item.tipo,
        dataDoacao: item.dataDoacao,
        valorDoacao: item.valorDoacao,
      })),
    };
  };

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

        {doacoes.length == 0 ? (
          <div className="Progressobar">
            <CircularProgress />
          </div>
        ) : (
          <CDBContainer>
            <CDBCard>
              <CDBCardBody>
                <CDBDataTable
                  entriesLabel="Mostrar doações"
                  searchLabel="Pesquisar"
                  paginationLabel={["Anterior", "Próximo"]}
                  infoLabel={["Mostrando de", "até", "de", "doações"]}
                  noRecordsFoundLabel="Nenhuma doação encontrada"
                  hover
                  materialSearch
                  bordered
                  entriesOptions={[10, 20, 30]}
                  entries={15}
                  pagesAmount={4}
                  maxHeight="10vh"
                  fixed
                  theadColor="#BF25E6"
                  data={data()}
                />
              </CDBCardBody>
            </CDBCard>
          </CDBContainer>
        )}
      </div>
    </div>
  );
};

export default DoacoesDinheiroAdm;

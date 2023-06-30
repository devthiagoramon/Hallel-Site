import React from "react";
import "./doacoesAdm.css";
import Arrow from "./../../../../images/arrow-icon.svg";
import { useMemo } from "react";
import { useState } from "react";
import {Table} from "react-bootstrap";
import { CircularProgress, IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";
import { MoreVert, MoreVertRounded } from "@mui/icons-material";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';

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


  const data = () => {
    return {
      columns: [
        {
          label: 'E-mail',
          field: 'email',
          width: 50,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'E-mail do Doador',
          },
        },
        {
          label: 'Descrição',
          field: 'descricao',
          width: 100,
        },
        {
          label: 'Tipo',
          field: 'tipo',
          width: 150,
        },
        {
          label: 'Data da Doacao',
          field: 'dataDoacao',
          width: 150,
        },
        {
          label: 'Valor da doação',
          field: 'dataDoacao',
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

        
        {doacoes.length == 0 ? 

            <div className="Progressobar">

                <CircularProgress/>
            </div>
         : 
                <CDBContainer>
                    <CDBCard>
                      <CDBCardBody>
                        <CDBDataTable 
                        entriesLabel="Mostrar eventos" 
                        searchLabel="Pesquisar"
                          paginationLabel={["Anterior", "Próximo"]}
                          infoLabel={["Mostrando de", "até", "de", "eventos"]}
                          noRecordsFoundLabel="Nenhum evento encontrado"
                          hover
                          materialSearch
                          bordered
                          entriesOptions={[10, 20, 30]}
                          entries={15}
                          pagesAmount={4}
                          maxHeight = "10vh"
                          fixed
                        theadColor="#BF25E6"
                          data={data()}
                        />
                      </CDBCardBody>
                    </CDBCard>
          </CDBContainer>
        }
      </div>
    </div>
  );
};

export default DoacoesDinheiroAdm;

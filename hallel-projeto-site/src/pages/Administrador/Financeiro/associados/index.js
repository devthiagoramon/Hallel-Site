import React, { useMemo, useState } from 'react'
import { CircularProgress } from '@mui/material';
import './associadosadm.css'
import {CgProfile} from "react-icons/cg"
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import { useNavigate } from 'react-router-dom';

const AssociadosADM = () => {
 const [associados, setassociados] = useState([]);

 const navigate = useNavigate();

  useMemo(() => {
    let url = "http://localhost:8080/api/associados";

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
      .then((associados) => {
        setassociados(associados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = () => {
    return {
      columns: [
        {
          label: 'Nome',
          field: 'nome',
          width: 50,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Nome',
          },
        },
        {
          label: 'Data de nascimento',
          field: 'dataNascimento',
          width: 150,
        },
        {
          label: 'Status',
          field: 'status',
          width: 150,
        },
        {
          label: 'Visualizar',
          field: 'vizualizar',
          width: 150,
        },
      ],

      rows: associados.map((item) => ({
        nome: item.nome,
        dataNascimento: item.dataNascimentoAssociado,
        status: item.isPago == true ? "Quitado" : "Pendente",
        vizualizar: (
          <div style={{display: "flex", justifyContent:"center"}}>
            <CgProfile onClick={ () => navigate("/administrador/associado/historicoAssociado")} style={{width:"1.2em", height:"1.2em"}}/>
          </div>
        )
        
        
      })),
    }; 
  };

  return (
    <div className="containerViewAssociados">
      <div className="cabecalhoPagamentos">
        <a>Associados</a>
      </div>

      {associados.length == 0 ?

    <div className='CircleProgress' style={{top: "10em"}} >

      <CircularProgress/>

      </div>
      :
      <div className="containerTabelaPagamentos">
        <div className="headContTabelaPagamentos">
          <div className="tituloHeadContTabelaPagamentos">
            <a>Tabela de Associados</a>
          </div>
  
        </div>
        <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable 
          entriesLabel="Mostrar associados" 
          searchLabel="Pesquisar"
            paginationLabel={["Anterior", "Próximo"]}
            infoLabel={["Mostrando de", "até", "de", "associados"]}
            noRecordsFoundLabel="Nenhum associado encontrado"
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
      </div>
      }
    </div>
  );
}
export default AssociadosADM;
import React, { useMemo, useState } from 'react'
import { Form} from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import './associadosadm.css'
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';

const AssociadosADM = () => {
 const [associados, setassociados] = useState([]);
 const [pesquisa, setPesquisa] = useState("");

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

  // const associadosFiltrado = useMemo(() => {
  //   let lowerPesquisa = pesquisa.toLowerCase();
  //   return associados.filter((associado) =>
  //     associado.nome.toLowerCase().includes(lowerPesquisa)
  //   );
  // }, [associados, pesquisa]);


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
          label: 'E-mail',
          field: 'email',
          width: 100,
        },
        {
          label: 'Participando do evento',
          field: 'participandoDoEvento',
          width: 150,
        },
        {
          label: 'Status',
          field: 'status',
          width: 150,
        },
        {
          label: 'Pago',
          field: 'pago',
          width: 150,
        },
      ],

      rows: associados.map((item) => ({
        nome: item.nome,
        email: item.email,
        participandoDoEvento: item.eventoParticipando,
        status: item.isAssociado,
        pago: item.isPago ? "Sim" : "Não",
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
          {/* <div className="pesquisaHeadContTabelaPagamentos">
            <Form.Control
              onChange={(e) => {
                setPesquisa(e.target.value);
              }}
              placeholder="Pesquisar Associado"
            />
          </div> */}
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
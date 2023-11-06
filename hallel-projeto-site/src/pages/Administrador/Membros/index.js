import "./style.css";
import {useMemo, useState} from "react";
import Select from "react-bootstrap/FormSelect";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {CDBCard, CDBCardBody, CDBContainer, CDBDataTable} from 'cdbreact';
import {CircularProgress} from "@mui/material";
import {membroListarAdmService} from "../../../service/MembroService";

function Filtro() {
    return (
        <div className="filtro">


            <div className="right-area">
                <div className="select-area">
                    <Select className="select" aria-label="Selecione">
                        <option value="all">Filtrar por</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="pendente">Pendente</option>
                    </Select>
                </div>

                <div className="buttonArea">
                    <button className="adicionarBt">Adicionar</button>

                </div>
            </div>
        </div>
    );
}

function MembrosAdministrador() {
    const [membro, setMembro] = useState()


    
    useMemo(() => {
         membroListarAdmService().then((response) => {
            setMembro(response);
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
                    label: 'E-mail',
                    field: 'email',
                    width: 100,
                },
                {
                    label: 'Status',
                    field: 'status',
                    width: 150,
                },

            ],

            rows: membro?.map((item) => ({
                nome: item.nome,
                email: item.email,
                status: item.status,
            })),

        };
    };

    return (
        <section className="sessaoMembro">

            {/* <div className="left-area">
        <Search className="searchbar">
          <input
            type="search"
            name="q"
            placeholder="Pesquisar.."
            className="form-control"
          />

          <Button type="button" className="primary">
            <i>
              <AiOutlineSearch />
            </i>
          </Button>
        </Search>
      </div> */}
            <label>Membros</label>
            {membro?.length === 0 ?
                <div className="progressCircle" style={{marginBottom: "10em"}}>
                    <CircularProgress/>
                </div>
                :
                <CDBContainer>
                    <CDBCard>
                        <CDBCardBody>
                            <CDBDataTable
                                entriesLabel="Mostrar membros"
                                searchLabel="Pesquisar"
                                paginationLabel={["Anterior", "Próximo"]}
                                infoLabel={["Mostrando de", "até", "de", "membros"]}
                                noRecordsFoundLabel="Nenhum membro encontrado"
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

            }
        </section>
    );
}

export default MembrosAdministrador;

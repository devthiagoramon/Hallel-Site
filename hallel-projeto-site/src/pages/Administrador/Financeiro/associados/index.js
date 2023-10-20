import React, {useMemo, useState} from "react";
import {CircularProgress} from "@mui/material";
import "./associadosadm.css";
import {CgProfile} from "react-icons/cg";
import {CDBCard, CDBCardBody, CDBDataTable, CDBContainer} from "cdbreact";
import {useNavigate} from "react-router-dom";
import {
    associadosListByMesAnoAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import VisualizarPorMesAssociados from "./VisualizarPorMesAssociados";
import dayjs from "dayjs";
import {useEffect} from "react";
import {associadoListByMesAnoService} from "../../../../service/FinanceiroService";

const AssociadosADM = () => {
    const [associados, setassociados] = useState([]);
    const [mesSelecionado, setMesSelecionado] = useState(dayjs(new Date()));

    const navigate = useNavigate();

    useEffect(() => {
        let StringDate = String(mesSelecionado.format("MM/YYYY"))
        associadoListByMesAnoService(StringDate.substring(0, 2), StringDate.substring(3))
            .then((response) => {
            setassociados(response);
        });
    }, [mesSelecionado]);

    const data = () => {
        return {
            columns: [
                {
                    label: "Nome",
                    field: "nome",
                    width: 50,
                    attributes: {
                        "aria-controls": "DataTable",
                        "aria-label": "Nome",
                    },
                },
                {
                    label: "Data do Pagamento",
                    field: "dataPagamento",
                    width: 150,
                },
                {
                    label: "Status",
                    field: "status",
                    width: 150,
                },
                {
                    label: "Visualizar",
                    field: "vizualizar",
                    width: 150,
                },
            ],

            rows: associados.map((item) => ({
                nome: item.nome,
                dataPagamento:
                    item.dataPagamento !== null
                        ? dayjs(item.dataPagamento).format("DD/MM/YYYY")
                        : "Não pago",
                status: item.status === "PAGO" ? "Quitado" : "Pendente",
                vizualizar: (
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <CgProfile
                            onClick={() =>
                                navigate("/administrador/associado/historicoAssociado/" + item.id)
                            }
                            style={{width: "1.2em", height: "1.2em"}}
                        />
                    </div>
                ),
            })),
        };
    };

    return (
        <div className="containerViewAssociados">
            <div className="cabecalhoPagamentos">
                <a>Associados</a>
            </div>

            {associados.length == 0 ? (
                <div className="CircleProgress" style={{top: "10em"}}>
                    <CircularProgress/>
                </div>
            ) : (
                <div className="containerTabelaPagamentos">
                    <div
                        className="headContTabelaPagamentos"
                        style={{marginBottom: "3rem"}}
                    >
                        <div className="tituloHeadContTabelaPagamentos">
                            <a>Tabela de Associados</a>
                        </div>
                    </div>
                    <VisualizarPorMesAssociados
                        mesSelecionado={mesSelecionado}
                        setMesSelecionado={setMesSelecionado}
                    />
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
                                    entries={10}
                                    pagesAmount={4}
                                    onPageChange={(e) => {
                                        console.log(e)
                                    }}
                                    maxHeight="10vh"
                                    fixed
                                    theadColor="#BF25E6"
                                    data={data()}
                                />
                            </CDBCardBody>
                        </CDBCard>
                    </CDBContainer>
                </div>
            )}
        </div>
    );
};
export default AssociadosADM;

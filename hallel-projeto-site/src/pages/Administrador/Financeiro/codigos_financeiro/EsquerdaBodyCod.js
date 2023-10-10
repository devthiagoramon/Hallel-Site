import {ListRounded} from "@mui/icons-material";
import {
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";
import SelectTipoCodigoFinanceiro from "./SelectTipoCodigoFinanceiro";
import {useEffect} from "react";
import {
    codigoEntradaListarAPI,
    codigoSaidaListarAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import {useState} from "react";
import {codigoEntradaListarService, codigoSaidaCriarService} from "../../../../service/FinanceiroService";

const EsquerdaBodyCodFinanceiro = ({
                                       entradaSelecionada,
                                       setEntradaSelecionada,
                                       setSaidaSelecionada,
                                       saidaSelecionada,
                                   }) => {
    const [codigos, setCodigos] = useState([]);

    useEffect(() => {
        let response;
        if (entradaSelecionada) {
            response = codigoEntradaListarService();
        } else if (saidaSelecionada) {
            response = codigoSaidaCriarService();
        }
        setCodigos(response);
    }, [
        setEntradaSelecionada,
        setSaidaSelecionada,
        entradaSelecionada,
        saidaSelecionada,
    ]);

    return (
        <div className="esquerda_body_cf">
            <SelectTipoCodigoFinanceiro
                entradaSelecionada={entradaSelecionada}
                setEntradaSelecionada={setEntradaSelecionada}
                setSaidaSelecionada={setSaidaSelecionada}
            />
            <div className="header_esquerda_cf">
                <h3>Lista de Códigos</h3>
                <ListRounded sx={{width: "30px", height: "30px", color: "#252525"}}/>
            </div>
            <div className="body_esquerda_cf">
                <TableContainer sx={{maxWidth: "100%"}} component={Paper}>
                    <Table sx={{width: "100%"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Número do código</TableCell>
                                <TableCell>Descrição</TableCell>
                            </TableRow>
                        </TableHead>
                        {codigos.length !== 0 ? (
                            <>
                                {codigos.map((codigo) => {
                                    return (
                                        <TableBody>
                                            <TableCell>{codigo.numeroCodigo}</TableCell>
                                            <TableCell>{codigo.nomeCodigo}</TableCell>
                                        </TableBody>
                                    );
                                })}
                            </>
                        ) : (
                            <LinearProgress/>
                        )}
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default EsquerdaBodyCodFinanceiro;

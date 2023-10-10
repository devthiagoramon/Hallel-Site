import {SaveRounded} from "@mui/icons-material";
import {Box, Button, Modal, TextField} from "@mui/material";
import React, {useState} from "react";
import {adicionarCodigoSaidaService} from "../../../../../service/FinanceiroService";

const ModalCodigoAdicionar = (props) => {
    const styleInnerModal = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        bgcolor: "#F2F2F8",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
    };

    const [codigosSaida, setCodigosSaida] = useState({
        numCodigo: null,
        nomeCodigo: null,
    });

    const [errorRequestNum, setErrorRequestNum] = useState(false);
    const [errorRequestNum2, seterrorRequestNum2] = useState(false);
    const [errorRequestNome, setErrorRequestNome] = useState(false);

    const handleCloseModalAdicionarCodigo = () => {
        props.setOpenAdicionarCodigo(false);
    };

    const adicionarCodigo = () => {
        if (codigosSaida.numCodigo === null) {
            setErrorRequestNum(true);
        }
        if (codigosSaida.nomeCodigo === null) {
            setErrorRequestNome(true);
        }

        if (codigosSaida.numCodigo === null || codigosSaida.nomeCodigo === null) {
            setTimeout(() => {
                setErrorRequestNome(false);
                setErrorRequestNum(false);
            }, 3000);
        } else {
            let response = adicionarCodigoSaidaService(codigosSaida);
            if (response) {
                props.setOpenAdicionarCodigo(false);
                setCodigosSaida({
                    numCodigo: null,
                    nomeCodigo: null,
                });
                setErrorRequestNome(false);
                setErrorRequestNum(false);
                seterrorRequestNum2(false);
            } else {
                seterrorRequestNum2(true);
            }
        }
    };

    return (
        <Modal
            open={props.openAdicionarCodigo}
            onClose={handleCloseModalAdicionarCodigo}
        >
            <Box sx={styleInnerModal}>
                <div className="container_adicionar_codigo_saida">
                    <label
                        style={{
                            alignSelf: "flex-start",
                            fontSize: "18px",
                            fontWeight: "600",
                        }}
                    >
                        Adicionar codigo
                    </label>
                    {errorRequestNum && (
                        <TextField
                            size="small"
                            type="number"
                            value={codigosSaida.numCodigo}
                            onChange={(e) => {
                                setCodigosSaida((prev) => {
                                    return {...prev, numCodigo: e.target.value};
                                });
                            }}
                            error
                            helperText={"Preencha o número"}
                            label="Número do código"
                        />
                    )}
                    {errorRequestNum2 && (
                        <TextField
                            size="small"
                            type="number"
                            value={codigosSaida.numCodigo}
                            onChange={(e) => {
                                setCodigosSaida((prev) => {
                                    return {...prev, numCodigo: e.target.value};
                                });
                            }}
                            error
                            helperText={"Código já existente"}
                            label="Número do código"
                        />
                    )}
                    {!errorRequestNum && !errorRequestNum2 && (
                        <TextField
                            size="small"
                            type="number"
                            value={codigosSaida.numCodigo}
                            onChange={(e) => {
                                setCodigosSaida((prev) => {
                                    return {...prev, numCodigo: e.target.value};
                                });
                            }}
                            label="Número do código"
                        />
                    )}
                    {errorRequestNome ? (
                        <TextField
                            size="small"
                            label="Nome do código"
                            placeholder="Ex: (Manutenção Igreja)"
                            value={codigosSaida.nomeCodigo}
                            onChange={(e) => {
                                setCodigosSaida((prev) => {
                                    return {...prev, nomeCodigo: e.target.value};
                                });
                            }}
                            error
                            helperText={"Preencha o nome"}
                        />
                    ) : (
                        <TextField
                            size="small"
                            label="Nome do código"
                            placeholder="Ex: (Manutenção Igreja)"
                            value={codigosSaida.nomeCodigo}
                            onChange={(e) => {
                                setCodigosSaida((prev) => {
                                    return {...prev, nomeCodigo: e.target.value};
                                });
                            }}
                        />
                    )}

                    <Button
                        variant="contained"
                        sx={{backgroundColor: "#1a0631"}}
                        endIcon={<SaveRounded/>}
                        onClick={adicionarCodigo}
                    >
                        Adicionar Código
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalCodigoAdicionar;

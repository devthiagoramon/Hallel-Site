import {CancelRounded, EditNoteRounded} from "@mui/icons-material";
import {Alert, CircularProgress, IconButton, Skeleton, Snackbar, TextField,} from "@mui/material";
import React, {useMemo, useState} from "react";
import {
    metaAlterarPorMesAnoService,
    metaGetPorcentagemPorMesEAnoService,
    metaListarPorMesAnoService
} from "../../../service/FinanceiroService";

const MetaEntradaComponentPainelFinanceiro = () => {
    const [porcentagem, setporcentagem] = useState(100);

    const [alterarMeta, setAlterarMeta] = useState(false);
    const [metaValue, setMetaValue] = useState("");
    const [metaValueDefault, setMetaValueDefault] = useState("");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [textoSnackBar, setTextoSnackBar] = useState("");
    const [corSnackBar, setCorSnackBar] = useState("");

    useMemo(() => {
        let data = new Date();
        let mesString =
            data.getMonth() + 1 >= 10
                ? String(data.getMonth() + 1)
                : "0" + String(data.getMonth() + 1);
        let anoString = String(new Date().getFullYear());
        metaGetPorcentagemPorMesEAnoService().then((response) => {
            setporcentagem(response);
        });
    }, [setporcentagem]);

    useMemo(() => {
        let data = new Date();
        let mesString =
            data.getMonth() + 1 >= 10
                ? String(data.getMonth())
                : "0" + String(data.getMonth() + 1);
        let anoString = String(new Date().getFullYear());
        metaListarPorMesAnoService(mesString, anoString).then((response) =>{
            setMetaValue(response.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }));
            setMetaValueDefault(response.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }));
        });
    }, [setMetaValue, setMetaValueDefault]);

    const handleOnChangeMetaValue = (e) => {
        setMetaValueDefault(e.target.value);
    };

    const handleAlterarMeta = () => {
        setAlterarMeta(true);
    };

    const cancelarAlterarMeta = () => {
        setAlterarMeta(false);
        setMetaValue(metaValue);
    };

    function handleChangeMetaConfirmed() {
        setAlterarMeta(false);
        setMetaValue(metaValueDefault);
        let metaValueProv = metaValueDefault;

        let data = new Date();
        let mesString =
            data.getMonth() + 1 >= 10
                ? String(data.getMonth() + 1)
                : "0" + String(data.getMonth() + 1);
        let anoString = String(new Date().getFullYear());
        metaAlterarPorMesAnoService(mesString, anoString, metaValueProv).then((response) => {
            if (response) {
                showSnackBarResponse("Meta atualizada com sucesso", "success");
            } else {
                showSnackBarResponse("Error na atualização da Meta", "error");
            }
        });
    }

    function showSnackBarResponse(texto, cor) {
        setCorSnackBar(cor);
        setTextoSnackBar(texto);
        setShowSnackBar(true);
    }

    const handleCloseSnackBar = () => {
        setCorSnackBar("");
        setTextoSnackBar("");
        setShowSnackBar(false);
    };

    return (
        <div className="container_meta_painel_financeiro">
            <div className="container_circular_progress">
                <CircularProgress
                    style={{
                        width: "350px",
                        height: "350px",
                        maxWidth: "350px",
                        maxHeight: "350px",
                    }}
                    sx={{color: "#1A0631"}}
                    variant="determinate"
                    value={porcentagem}
                />
                <label>
                    <span style={{fontSize: "36px"}}>{porcentagem}</span>%
                </label>
            </div>
            <div className="container_info_circular_progress">
                {!alterarMeta && (
                    <>
                        {" "}
                        <label>
                            <span>Meta:</span>
                            <br/> {metaValue}
                        </label>
                        <IconButton
                            onClick={handleAlterarMeta}
                            sx={{color: "#252525", mb: 1}}
                        >
                            <EditNoteRounded/>
                        </IconButton>
                    </>
                )}
                {alterarMeta && (
                    <>
                        <label>
                            <span>Meta:</span>
                            <br/>{" "}
                            <TextField
                                size="small"
                                value={metaValueDefault}
                                onChange={handleOnChangeMetaValue}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleChangeMetaConfirmed();
                                    }
                                }}
                            />
                            <IconButton
                                sx={{color: "#252525", mb: 1}}
                                onClick={cancelarAlterarMeta}
                            >
                                <CancelRounded/>
                            </IconButton>
                        </label>
                    </>
                )}
                {metaValueDefault === "" && (
                    <Skeleton
                        sx={{ml: 3, width: "100%", height: "30px"}}
                        variant="text"
                    />
                )}
            </div>
            <Snackbar
                open={showSnackBar}
                onClose={handleCloseSnackBar}
                autoHideDuration={3000}
            >
                <Alert severity={corSnackBar}>{textoSnackBar}</Alert>
            </Snackbar>
        </div>
    );
};

export default MetaEntradaComponentPainelFinanceiro;

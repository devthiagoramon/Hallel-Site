import {Send} from "@mui/icons-material";
import {Alert, Button, Snackbar, Tooltip,} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {FormControl} from "react-bootstrap";
import addImageIcon from "./../../../../../images/addImage.svg";
import "./add_doacao_obj.css";
import {doarObjetoService} from "../../../../../service/FinanceiroService";

const AddDoacaoObjetoAdm = () => {

    const imagemDiv = useRef();
    const [imagemInput, setImagemInput] = useState("");
    const imagemLabelInformativoDiv = useRef();
    const imagemLabelInformativoLabel = useRef();
    const [btnHabilitado, setbtnHabilitado] = useState(false);
    const [enviadoSucesso, setenviadoSucesso] = useState(false);
    const [enviadoErro, setEnviadoErro] = useState(false);

    const doacaoTemplate = {
        email: "",
        descricao: "",
        dataDoacao: "",
        quantidade: 0,
    };

    const [doacaoObjeto, setdoacaoObjeto] = useState(doacaoTemplate);

    useEffect(() => {
        if (
            doacaoObjeto.email !== "" &&
            doacaoObjeto.descricao !== "" &&
            doacaoObjeto.dataDoacao !== "" &&
            doacaoObjeto.quantidade !== 0
        ) {
            setbtnHabilitado(true);
        } else {
            setbtnHabilitado(false);
        }
        if (isNaN(doacaoObjeto.quantidade)) {
            setdoacaoObjeto((prevState) => {
                return {...prevState, quantidade: 0};
            });
        }
    }, [doacaoObjeto]);

    const dropImagemDiv = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImagemInput(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const imagemSobreDiv = (event) => {
        event.preventDefault();
    };

    function onImageSelected(e) {
        var selectedFile = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            setImagemInput(e.target.result);
        };

        reader.readAsDataURL(selectedFile);
    }

    function fecharAviso() {
        enviadoSucesso === true
            ? setenviadoSucesso(false)
            : setenviadoSucesso(false);
        enviadoErro === true ? setEnviadoErro(false) : setEnviadoErro(false);
    }

    function enviarDoacaoObjeto() {
        let doacaoObjeto = {
            emailDoador: doacaoObjeto.email,
            descricao: doacaoObjeto.descricao,
            dataDoacao: doacaoObjeto.dataDoacao,
            imagem: imagemInput,
            quantidade: doacaoObjeto.quantidade,
        }
        let response = doarObjetoService(doacaoObjeto);
        if (response) {
            setenviadoSucesso(true);
            setTimeout(() => {
                window.location.href =
                    "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto";
            }, 4000);
        } else {
            setEnviadoErro(true);
        }
    }

    return (
        <div className="contAddDoacaoObjetoAdm">
            <div className="headAddDoacaoObjetoAdm">
                <label>Adicionar Doação (Objeto)</label>
            </div>
            <div className="bodyAddDoacaoObjetoAdm">
                <div className="formDoacaoObjetoAdm">
                    <div className="outerContImagemDoacaoObjeto">
                        <div ref={imagemDiv} className="contImagemDoacaoObjetoAdm">
                            {imagemInput === "" ? (
                                <div
                                    className="innerImagemDoacao"
                                    onDrop={dropImagemDiv}
                                    onDragOver={imagemSobreDiv}
                                    ref={imagemLabelInformativoDiv}
                                >
                                    <label
                                        className="labelInputImagem"
                                        style={{textAlign: "center", width: "100%"}}
                                        for="selecao-arquivo"
                                    >
                                        <img src={addImageIcon}/>
                                    </label>
                                    <label
                                        className="labelInformativoImagem"
                                        ref={imagemLabelInformativoLabel}
                                        style={{textAlign: "center", width: "100%"}}
                                    >
                                        Clique no icone ou arraste a foto
                                        <br/>
                                    </label>
                                    <input
                                        className="inputImagem"
                                        type="file"
                                        id="selecao-arquivo"
                                        onChange={onImageSelected}
                                    />
                                </div>
                            ) : (
                                <img
                                    className="imagemDoacaoObjeto"
                                    alt="Imagem da doação"
                                    src={imagemInput}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="inputsAddDoacoesObjeto">
                    <div>
                        <label>
                            Email do doador <span>*</span>
                        </label>
                        <FormControl
                            placeholder="Email"
                            type="email"
                            value={doacaoObjeto.email}
                            onChange={(e) =>
                                setdoacaoObjeto((prevState) => {
                                    return {...prevState, email: e.target.value};
                                })
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Descrição <span>*</span>
                        </label>
                        <FormControl
                            placeholder="Descrição"
                            type="text"
                            value={doacaoObjeto.descricao}
                            onChange={(e) =>
                                setdoacaoObjeto((prevState) => {
                                    return {...prevState, descricao: e.target.value};
                                })
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Data da doação <span>*</span>
                        </label>
                        <FormControl
                            type="date"
                            value={doacaoObjeto.dataDoacao}
                            onChange={(e) =>
                                setdoacaoObjeto((prevState) => {
                                    return {...prevState, dataDoacao: e.target.value};
                                })
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Quantidade <span>*</span>
                        </label>
                        <FormControl
                            placeholder="Quantidade"
                            type="text"
                            value={doacaoObjeto.quantidade}
                            onChange={(e) =>
                                setdoacaoObjeto((prevState) => {
                                    return {...prevState, quantidade: parseInt(e.target.value)};
                                })
                            }
                        />
                    </div>
                </div>
                <div className="btnAddDoacoesObjeto">
                    {btnHabilitado === false ? (
                        <Tooltip title="Preencha todos os campos obrigatorios com *">
              <span>
                <Button
                    variant="contained"
                    color="success"
                    endIcon={<Send/>}
                    disabled
                    sx={{gap: "20px"}}
                >
                  Salvar
                </Button>
              </span>
                        </Tooltip>
                    ) : (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={enviarDoacaoObjeto}
                            endIcon={<Send/>}
                            sx={{gap: "20px"}}
                        >
                            Salvar
                        </Button>
                    )}
                </div>
            </div>
            <div>
                <Snackbar
                    open={enviadoSucesso}
                    autoHideDuration={3000}
                    onClose={fecharAviso}
                >
                    <Alert severity="success" sx={{width: "100%"}}>
                        Enviado com sucesso, redirecionando...
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={enviadoErro}
                    autoHideDuration={3000}
                    onClose={fecharAviso}
                >
                    <Alert severity="error" sx={{width: "100%"}}>
                        Error no envio
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default AddDoacaoObjetoAdm;

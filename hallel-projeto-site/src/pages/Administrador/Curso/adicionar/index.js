import { AddCircleOutline, AddCircleOutlineOutlined, Label, RemoveCircle } from '@mui/icons-material'
import { Alert, Button, CircularProgress, IconButton, Snackbar } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import "./addCurso.css"
import addImageIcon from "./../../../../images/addImage.svg";
import { useEffect } from 'react'

const AdicionarCursoAdm = () => {

    const [requisitosInputs, setRequisitosInputs] = useState([]);
    const [nomeInput, setNome] = useState("");
    const [lastId, setLastId] = useState(0);
    const [imagemInput, setImagemInput] = useState("");
    const imagemDiv = useRef();
    const imagemLabelInformativoDiv = useRef();
    const imagemLabelInformativoLabel = useRef();
    const [btnHabilitado, setbtnHabilitado] = useState();

    const [enviando, setenviando] = useState(false);
    const [enviadoSucesso, setenviadoSucesso] = useState(false);
    const [enviadoErro, setEnviadoErro] = useState(false);

    useEffect(() => {
        if (
            nomeInput !== "" &&
            imagemInput !== ""
        ) {
            setbtnHabilitado(true)
        } else {
            setbtnHabilitado(false)
        }
    }, [imagemInput, nomeInput]);

    function fecharAviso() {
        enviadoSucesso === true ? setenviadoSucesso(false) : setenviadoSucesso(false)
        enviadoErro === true ? setEnviadoErro(false) : setEnviadoErro(false)
    }


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

    function removerInput(id) {
        let inputs = requisitosInputs;
        inputs.splice(
            inputs.findIndex((item) => {
                return item.id === id;
            }),
            1
        );
        inputs = [...inputs];
        setRequisitosInputs(inputs);
    }

    function solicitaçao(){
        let arrayRequisitos = []

        requisitosInputs.map((item) => {
            arrayRequisitos.push(item.text);
        })

        let url = "http://localhost:8080/api/cursos/create";

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem("token"));


        fetch(url, {
            headers: myHeaders,
            method: "POST",
            body: JSON.stringify({
                nome: nomeInput,
                image: imagemInput,
                requisitos: arrayRequisitos
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((object) => {
                setenviadoSucesso(true);
                console.log(object)
                /*
                setTimeout(() => {
                    window.location.href = "/administrador/cursos"
                }, 3000);
                */
            })
            .catch((error) => {
                console.warn(error);
                setEnviadoErro(true);
                /*
                setTimeout(() => {
                    setenviado(false);
                }, 3000);
                */
            });
    }

    function cadastrarCurso() {
        setenviando(true);
        solicitaçao();

        setTimeout(() => {
            setenviando(false);
        }, 3000);
    }

    return (
        <div className='contAddCursoAdm'>
            <div className='headerAddCurso'>
                <label>Adicionar Curso</label>
            </div>
            <div className='bodyAddCurso'>
                <div className="headCont">
                    <div className='outImagemAddCurso'>
                        <div ref={imagemDiv} className="contImagemAddCurso">
                            {imagemInput === "" ? (
                                <div
                                    className="innerImagem"
                                    onDrop={dropImagemDiv}
                                    onDragOver={imagemSobreDiv}
                                    ref={imagemLabelInformativoDiv}
                                >
                                    <label className="labelInputImagem" for="selecao-arquivo">
                                        <img src={addImageIcon} />
                                    </label>
                                    <label
                                        className="labelInformativoImagem"
                                        ref={imagemLabelInformativoLabel}
                                    >
                                        Clique no icone ou arraste a foto
                                        <br />
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
                                    className="imagemEvento"
                                    alt="Imagem do Evento"
                                    src={imagemInput}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='outContInputsAddCurso'>
                    <div className='contInputsAddCurso'>
                        <div>
                            <label>Nome do curso</label>
                            <FormControl onChange={(e) => setNome(e.target.value)} style={{ width: "80%" }} />
                        </div>
                        <div>
                            <label>Requisitos
                                <IconButton sx={{ color: "#333" }} onClick={() => {
                                    setRequisitosInputs((value) => [...value, { id: lastId, text: "" }]
                                    );
                                    setLastId(lastId + 1);
                                }}>
                                    <AddCircleOutline />
                                </IconButton>
                            </label>
                            {requisitosInputs.map((item) => {
                                return (
                                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #ced4da", width: "100%", borderRadius: "0.375rem", marginTop: "1.1rem" }}>
                                        <FormControl key={item} style={{ width: "95%", alignSelf: "center" }}
                                            onChange={(e) => {
                                                if (e.nativeEvent.inputType !== "deleteContentBackward") {
                                                    let requisitos = requisitosInputs;
                                                    requisitos[item.id].text = requisitos[item.id].text + e.nativeEvent.data;
                                                    setRequisitosInputs();
                                                    setRequisitosInputs(requisitos);
                                                } else {
                                                    let requisitos = requisitosInputs;
                                                    requisitos[item.id].text = requisitos[item.id].text.slice(0, requisitos[item.id].text.length - 1);
                                                    setRequisitosInputs();
                                                    setRequisitosInputs(requisitos);
                                                }
                                            }}
                                        />
                                        <IconButton sx={{ color: "#333" }} onClick={() => removerInput(item.id)}>
                                            <RemoveCircle />
                                        </IconButton>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerAddCurso'>
                <div className='contEnviarAddCurso'>
                    {enviando ? <CircularProgress /> :
                        <div>
                            {btnHabilitado ? <Button variant='contained' color='success' onClick={() => cadastrarCurso()}>Enviar</Button> : <Button variant='contained' color='success' disabled>Enviar</Button>}

                        </div>
                    }
                </div>
            </div>

            <Snackbar open={enviadoErro}
                autoHideDuration={3000}
                onClose={fecharAviso}>
                <Alert severity="success" sx={{ width: "100%" }}>
                    Enviado com sucesso, redirecionando...
                </Alert>
            </Snackbar>
            <Snackbar open={enviadoErro}
                autoHideDuration={3000}
                onClose={fecharAviso}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    Error no envio
                </Alert>
            </Snackbar>

        </div>
    )
}

export default AdicionarCursoAdm
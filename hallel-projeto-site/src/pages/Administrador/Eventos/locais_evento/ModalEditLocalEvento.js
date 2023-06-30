import { DoneRounded, EditRounded, ErrorOutlineRounded } from '@mui/icons-material';
import { Box, Button, CircularProgress, Modal, TextField } from '@mui/material'
import axios from 'axios';
import { MuiFileInput } from 'mui-file-input';
import React, { useEffect, useState } from 'react'

const ModalEditLocalEvento = (props) => {

    const { idLocalEvento, setIdLocalEvento } = props;
    const [idLocalEventoModal, setIdLocalEventoModal] = useState("");
    const [local, setLocal] = useState({
        localizacao: "",
        imagem: "",
    });
    const [isRequestSucessFull, setisRequestSucessFull] = useState(null);
    const [enviando, setEnviando] = useState(false);
    const [novoTextoLocalizacao, setnovoTextoLocalizacao] = useState("");

    const [localNovo, setLocalNovo] = useState({
        localizacao: "",
        imagem: "",
    })

    const styleInnerModal = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#F2F2F8",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
    }

    const handleCloseModal = () => {
        setIdLocalEvento("");
        setLocal({
            localizacao: "",
            imagem: "",
        })
        setIdLocalEventoModal("");
        props.setOpenModal(false);
    }

    useEffect(() => {
        if (idLocalEvento !== "") {
            setIdLocalEventoModal(idLocalEvento);
        }
    }, [idLocalEvento])

    useEffect(() => {
        if (idLocalEventoModal !== "") {
            loadLocalEvento(idLocalEventoModal);
            props.setOpenModal(true);
        }
    }, [idLocalEventoModal])

    function loadLocalEvento(id) {
        axios.get("http://localhost:8080/api/locais/" + id + "/list", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setLocal(res.data);
            setLocalNovo(res.data);
            console.log(res.data);
            setnovoTextoLocalizacao(res.data.localizacao);
        }).catch((error) => {
            console.error("Error requerindo o local para editar: " + error);
        })
    }

    const handleChangeImagem = (e) => {
        const file = e;

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const dataURL = e.target.result;
                setLocalNovo((prevState) => {
                    return { ...prevState, imagem: dataURL }
                })
            };

            reader.readAsDataURL(file);
        }
    };

    const enviarRequestEdit = () => {
        let url = "http://localhost:8080/api/locais/" + idLocalEventoModal + "/edit";

        setEnviando(true);

        axios.put(url, {
            imagem: localNovo.imagem,
            localizacao: novoTextoLocalizacao
        }, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        }).then(() => {
            setisRequestSucessFull(true);
            setEnviando(false)
            props.setEnviadoSucesso(!props.enviadoSucesso);
        }).catch((error) => {
            console.log(error);
            setisRequestSucessFull(false);
            setEnviando(false);
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setisRequestSucessFull(null);
        }, 5000);
        setTimeout(() => {
            handleCloseModal();
        }, 6000)
    }, [isRequestSucessFull])



    return (
        <>
            <Modal open={props.openModal} onClose={handleCloseModal}>
                <Box sx={styleInnerModal}>
                    {local.localizacao !== "" &&
                        <div className='container_inner_modal_editar_local'>
                            <div className='container_imagem_modal_editar_local'>
                                <img alt={local.localizacao} src={localNovo.imagem} />
                                <label style={{ marginTop: "2rem" }}>Editar imagem:</label>
                                <MuiFileInput sx={{ mb: 3 }} size='small' onChange={handleChangeImagem} />
                            </div>
                            <label>Localização: </label><br />
                            <TextField
                                sx={{ width: "100%" }}
                                size='small'
                                value={novoTextoLocalizacao}
                                onChange={(e) => { setnovoTextoLocalizacao(e.target.value) }}
                            />
                            <div className='container_btn_modal_editar_local'>
                                {isRequestSucessFull === true &&
                                    <Button
                                        variant="contained"
                                        onClick={enviarRequestEdit}
                                        endIcon={<DoneRounded />}
                                        color="success"
                                    >
                                        Sucesso
                                    </Button>
                                }
                                {isRequestSucessFull === null &&
                                    <Button
                                        variant="contained"
                                        onClick={enviarRequestEdit}
                                        endIcon={enviando ? <CircularProgress sx={{ color: "#FAF4F4" }} /> : <EditRounded />}

                                    >
                                        Editar
                                    </Button>
                                }
                                {isRequestSucessFull === false &&
                                    <Button
                                        variant="contained"
                                        onClick={enviarRequestEdit}
                                        endIcon={<ErrorOutlineRounded />}
                                        color="error"
                                    >
                                        Error
                                    </Button>
                                }

                            </div>
                        </div>
                    }
                    {local.localizacao === "" && <div className='load_modal_edit_local'>
                        <CircularProgress />
                    </div>}
                </Box>
            </Modal>
        </>
    )
}

export default ModalEditLocalEvento
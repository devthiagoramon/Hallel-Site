import {AddCircle} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    IconButton,
    LinearProgress,
    Modal,
    Skeleton,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {useMemo} from "react";
import "./doacao_objeto.css";
import {
    doacaoListarObjetoIdAPI,
    doacaoListarObjetosAPI,
    doacaoObjetoNaoRecebidoAPI,
    doacaoObjetoRecebidoAPI,
} from "../../../../api/uris/FinanceiroURLS";
import axios from "axios";
import {
    listDoacaoObjetoPorIdService,
    listDoacoesObjetosService,
    recebiObjetoDoacaoService
} from "../../../../service/FinanceiroService";

const DoacaoObjetoADM = () => {
    const [doacoesObjeto, setDoacoesObjeto] = useState()
    useMemo(() => {
        listDoacoesObjetosService().then((response) => {
            setDoacoesObjeto(response);
        });
    }, []);
    const [atualizando, setAtualizando] = useState(false);

    const templateDadoDoacaoModal = {
        descricao: "",
        recebido: false,
        dataDoacao: "",
        imagem: "",
        quantidade: "",
        dataRecebida: "Não recebida",
        email: "",
    };

    const styleModal = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const [dadoDoacaoModal, setDadoDoacaoModal] = useState(
        templateDadoDoacaoModal
    );
    const [isModalAberto, setIsModalAberto] = useState(false);

    function abrirDescricao(id) {
        listDoacaoObjetoPorIdService(id).then((response) => {

            let modelo = {
                descricao: response.descricao,
                recebido: response.isRecebido,
                dataDoacao: response.dataDoacao,
                imagem: response.imagem,
                quantidade: response.quantidade,
                dataRecebida: response.dataRecebida,
                email: response.emailDoador,
            };
            setDadoDoacaoModal(modelo);
            setIsModalAberto(true);
        });
    }

    function closeModal() {
        setIsModalAberto(false);
        setDadoDoacaoModal(templateDadoDoacaoModal);
    }

    function recebido(id, isRecebido) {
        recebiObjetoDoacaoService(id, isRecebido).then((response) => {
          if (response) {
            setAtualizando(true);
            setTimeout(() => {
              window.location.href =
                  "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto";
            }, 3000);
          }
        });


    }

    return (
        <div>
            <div className="containerDoacaoObj">
                <div className="containerCardsDoacaoObj">
                    <div className="headerCardsDoacaoObj">
                        <label>Doações de objeto</label>
                        <div className="addDoacaoHeaderCardsDoacao">
                            <IconButton
                                color="secundary"
                                aria-label="Add doação"
                                onClick={() =>
                                    (window.location.href =
                                        "http://localhost:3000/administrador/painelFinanceiro/doacoes/objeto/add")
                                }
                            >
                                <AddCircle style={{width: "55px", height: "55px"}}/>
                            </IconButton>
                            <span>Adicionar doação</span>
                        </div>
                        <button style={{display: "none"}}></button>
                    </div>
                    <div className="bodyCardsDoacaoObj">
                        {doacoesObjeto.length === 0 ? (
                            <div className="bodyCardsDoacaoObj">
                                <Skeleton
                                    sx={{bgcolor: "grey.300"}}
                                    variant="rounded"
                                    width={300}
                                    height={350}
                                />
                                <Skeleton
                                    sx={{bgcolor: "grey.300"}}
                                    variant="rounded"
                                    width={300}
                                    height={350}
                                />
                                <Skeleton
                                    sx={{bgcolor: "grey.300"}}
                                    variant="rounded"
                                    width={300}
                                    height={350}
                                />
                                <Skeleton
                                    sx={{bgcolor: "grey.300"}}
                                    variant="rounded"
                                    width={300}
                                    height={350}
                                />
                                <Skeleton
                                    sx={{bgcolor: "grey.300"}}
                                    variant="rounded"
                                    width={300}
                                    height={350}
                                />
                            </div>
                        ) : (
                            <div className="bodyCardsDoacaoObj">
                                {doacoesObjeto?.map((objeto) => {
                                    return (
                                        <Card
                                            key={objeto.id}
                                            sx={{
                                                minWidth: 250,
                                                maxWidth: 300,
                                                backgroundColor: "#fafafa",
                                            }}
                                        >
                                            {atualizando === false ? (
                                                <div>
                                                    {objeto.recebido ? (
                                                        <Button
                                                            variant="h2"
                                                            component="div"
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                backgroundColor: "#77EB7F",
                                                                fontWeight: "700",
                                                            }}
                                                            onClick={() => recebido(objeto.id, true)}
                                                        >
                                                            Recebido
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="h2"
                                                            component="div"
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                backgroundColor: "#FA444A",
                                                                fontWeight: "700",
                                                            }}
                                                            onClick={() => recebido(objeto.id, false)}
                                                        >
                                                            Não recebido
                                                        </Button>
                                                    )}{" "}
                                                </div>
                                            ) : (
                                                <div>
                                                    <LinearProgress sx={{width: "100%"}}/>
                                                </div>
                                            )}
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="auto"
                                                    image={objeto.imagem}
                                                    alt="Imagem card"
                                                    onClick={() => abrirDescricao(objeto.id)}
                                                />
                                            </CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {objeto.descricao}
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                >
                                                    Quantidade: {objeto.quantidade}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                {isModalAberto === false ? (
                    ""
                ) : (
                    <div>
                        <Modal
                            style={{borderRadius: "10px"}}
                            open={isModalAberto}
                            onClose={closeModal}
                        >
                            {dadoDoacaoModal.email === "" ? (
                                <Box style={styleModal} className="loadingModalDescricaoObjeto">
                                    <CircularProgress/>
                                </Box>
                            ) : (
                                <Box style={styleModal} className="modalDescricaoObjeto">
                                    <Typography variant="h4" component="h3" sx={{mt: 4, mb: 2}}>
                                        Descrição do Objeto
                                    </Typography>
                                    <Typography variant="label" sx={{mt: 3}}>
                                        <b>E-mail:</b> {dadoDoacaoModal.email}
                                    </Typography>
                                    <br/>
                                    <Typography variant="label" sx={{mt: 3}}>
                                        <b>Descrição:</b> {dadoDoacaoModal.descricao}
                                    </Typography>
                                    <br/>
                                    <Typography variant="label" sx={{mt: 3}}>
                                        <b>Data da doação:</b> {dadoDoacaoModal.dataDoacao}
                                    </Typography>
                                    <br/>
                                    <Typography variant="label" sx={{mt: 3}}>
                                        <b>Quantidade:</b> {dadoDoacaoModal.quantidade}
                                    </Typography>
                                    <br/>
                                    <Typography variant="label" sx={{mt: 3}}>
                                        <b>Data recebida:</b>{" "}
                                        {dadoDoacaoModal.dataRecebida === ""
                                            ? "Não recebido"
                                            : dadoDoacaoModal.dataRecebida}
                                    </Typography>
                                </Box>
                            )}
                        </Modal>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoacaoObjetoADM;
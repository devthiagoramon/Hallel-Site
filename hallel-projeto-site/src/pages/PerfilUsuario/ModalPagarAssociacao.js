import {Box, Button, MenuItem, Modal, Select} from "@mui/material";
import React, {useEffect, useState} from "react";
import InputsPagamentoByCartao from "./InputsPagamentoByCartao";
import {SendRounded} from "@mui/icons-material";
import {associadoGetCartaoCreditoService, associadoPagarAssociacaoService} from "../../service/AssociadoService";

const ModalPagarAssociacaoPerfil = ({
                                        mesSelecionado,
                                        openModalPagarAssociacao,
                                        setOpenModalPagarAssociacao,
                                    }) => {
    const styleInnerModal = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 450,
        bgcolor: "#F2F2F8",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
    };

    const [infoBancariaAssociado, setInfoBancariaAssociado] = useState(null);

    const [numMetodoPagamento, setNumMetodoPagamento] = useState(0);
    const handleCloseModal = () => {
        setOpenModalPagarAssociacao(false);
    };

    const handleChangeNumMetodoPagamento = (event) => {
        setNumMetodoPagamento(event.target.value);
    };

    const pagarAssociacao = () => {
        let dateString = mesSelecionado.toString();
        let mesString = dateString.substring(0, 2);
        let anoString = dateString.substring(3);

        let bodyRequest = {
            idAssociado: localStorage.getItem("HallelId"),
            numMetodoPagamento: numMetodoPagamento,
            cartaoAssociado: infoBancariaAssociado,
            mes: mesString,
            ano: anoString,
        };
        associadoPagarAssociacaoService(bodyRequest).then((response) => {
            if (response) {
                // Deu certo
            } else {
                // Deu errado
            }
        });

    };

    // Pegar o cartão do associado quando for pra debito e credito
    useEffect(() => {
        if (numMetodoPagamento === 3 || numMetodoPagamento === 4) {
            associadoGetCartaoCreditoService(localStorage.getItem("HallelId")).then((response) => {
                setInfoBancariaAssociado(response)
            });
        }
    }, [numMetodoPagamento]);

    return (
        <Modal
            open={openModalPagarAssociacao}
            onClose={handleCloseModal}
            tabIndex={-1}
        >
            <Box sx={{...styleInnerModal, overflowY: "auto", maxHeight: "500px"}}>
                <div className="head_edit_despesas_evento">
                    <label>Pagar Associação</label>
                </div>
                <div className="body_modal_pagar_associacao mt-3">
                    <label>Selecione como você vai pagar</label>
                    <Select
                        value={numMetodoPagamento}
                        onChange={handleChangeNumMetodoPagamento}
                        sx={{width: "40%", height: "50px"}}
                    >
                        <MenuItem value={1}>PIX</MenuItem>
                        <MenuItem value={3}>Debito</MenuItem>
                        <MenuItem value={4}>Crédito</MenuItem>
                    </Select>
                    {numMetodoPagamento === 1 && <></>}
                    {numMetodoPagamento === 3 && (
                        <InputsPagamentoByCartao
                            infoBancariaAssociado={infoBancariaAssociado}
                        />
                    )}
                    {numMetodoPagamento === 4 && <></>}
                    <div className="footer_modal_pag_assoc mt-3">
                        {numMetodoPagamento === 0 ? (
                            <Button disabled variant="contained">
                                Pagar Associação
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                sx={{backgroundColor: "#52BE80"}}
                                endIcon={<SendRounded/>}
                                onClick={pagarAssociacao}
                            >
                                Confirmar Pagamento
                            </Button>
                        )}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalPagarAssociacaoPerfil;

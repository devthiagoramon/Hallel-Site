import React from "react";
import {motion} from "framer-motion";
import {CheckCircleOutlineRounded, CreditCard, PermIdentityRounded, SendRounded,} from "@mui/icons-material";
import dayjs from "dayjs";
import {Button} from "@mui/material";
import {virarAssociadoService} from "../../../service/MembroService";

const VirarAssociadoP3 = ({setIndexParte, novoAssociado}) => {

    const confirmarPagamento = () => {
        virarAssociadoService({
            idMembro: localStorage.getItem("HallelId"),
            ...novoAssociado,
            metodoPagamentoNum: 3,
        }).then((response) => {
            if (response) {
                // Deu certo
            } else {
                // Deu errado
            }
        });
    };

    return (
        <motion.div
            animate={{x: 0}}
            initial={{x: -50}}
            transition={{type: "spring"}}
            className="cont_first_part_VA"
        >
            <div className="header_cont_principal_VA">
                <h1>Virar associado</h1>
            </div>
            <div className="headers_parts_VA">
                <h3>Confirmar Pagamento</h3>
                <CheckCircleOutlineRounded sx={{ml: 2}}/>
            </div>
            <div className="body_parts_VA">
                <div className="info_pessoais_cont_VA">
                    <div className="header_info_confirmar_pagamento_VA">
                        <h4>Informações pessoais</h4>
                        <PermIdentityRounded sx={{ml: 2}}/>
                    </div>
                    <div className="body_info_confirmar_pagamento_VA">
                        <label>Nome: {novoAssociado.nome}</label>
                        <label>Email: {novoAssociado.email}</label>
                        <label>CPF: {novoAssociado.cpf}</label>
                        <label>Telefone: {novoAssociado.telefone}</label>
                        <label>
                            Data de Aniversário:{" "}
                            {dayjs(novoAssociado.dataNascimento).format("DD/MM/YYYY")}
                        </label>
                    </div>
                </div>
                <div className="info_cartao_cont_VA">
                    <div className="body_info_confirmar_pagamento_VA">
                        <div className="header_info_confirmar_pagamento_VA">
                            <h4>Informações pagamento</h4>
                            <CreditCard sx={{ml: 2}}/>
                        </div>
                        <div className="body_info_confirmar_pagamento_VA">
                            <label>Número do cartão: {novoAssociado.numCartao}</label>
                            <label>
                                Data de Validade:{" "}
                                {dayjs(novoAssociado.dataValidadeCartao).format("MM/YY")}
                            </label>
                            <label>CVC: {novoAssociado.cvcCartao}</label>
                            <label>Nome do titular: {novoAssociado.nomeTitularCartao}</label>
                            <label>Endereço: {novoAssociado.enderecoCartao}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2_parts_VA">
                <h5>Assosiação Hallel - 1 mês</h5>
                <div className="cont_valor_pagamento_VA">
                    <label>
                        Valor: <span>R$ 25,00</span>
                    </label>
                </div>
                <div className="cont_btn_footer2_parts_VA">
                    <Button
                        style={{backgroundColor: "#6c3483"}}
                        variant="contained"
                        onClick={() => {
                            setIndexParte(1);
                        }}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        onClick={confirmarPagamento}
                        endIcon={<SendRounded/>}
                    >
                        Confirmar Pagamento
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default VirarAssociadoP3;

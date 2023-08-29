import {
  CheckCircleOutlineRounded,
  CreditCard,
  PermIdentityRounded,
  SendRounded,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const PagOutroAssociadoP3 = ({ setParte, presentearAssoc }) => {
  const confirmarPagamento = () => {};
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_first_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Presentear associação</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Confirmar Pagamento</h3>
        <CheckCircleOutlineRounded sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="info_pessoais_cont_VA">
          <div className="header_info_confirmar_pagamento_VA">
            <h4>Informação</h4>
            <PermIdentityRounded sx={{ ml: 2 }} />
          </div>
          <div className="body_info_confirmar_pagamento_VA">
            <label>Email: {presentearAssoc.email}</label>
          </div>
        </div>
        <div className="info_cartao_cont_VA">
          <div className="body_info_confirmar_pagamento_VA">
            <div className="header_info_confirmar_pagamento_VA">
              <h4>Informações pagamento</h4>
              <CreditCard sx={{ ml: 2 }} />
            </div>
            <div className="body_info_confirmar_pagamento_VA">
              <label>Número do cartão: {presentearAssoc.numCartao}</label>
              <label>
                Data de Validade:{" "}
                {dayjs(presentearAssoc.dataValidadeCartao).format("MM/YY")}
              </label>
              <label>CVC: {presentearAssoc.cvcCartao}</label>
              <label>
                Nome do titular: {presentearAssoc.nomeTitularCartao}
              </label>
              <label>Endereço: {presentearAssoc.enderecoCartao}</label>
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
            style={{ backgroundColor: "#6c3483" }}
            variant="contained"
            onClick={() => {
              setParte(1);
            }}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            onClick={confirmarPagamento}
            endIcon={<SendRounded />}
          >
            Confirmar Pagamento
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PagOutroAssociadoP3;

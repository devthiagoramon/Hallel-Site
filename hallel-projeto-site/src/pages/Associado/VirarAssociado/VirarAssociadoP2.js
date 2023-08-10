import React from "react";
import { motion } from "framer-motion";
import { CreditCard } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const VirarAssociadoP2 = ({
  setIndexParte,
  novoAssociado,
  setNovoAssociado,
}) => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -50 }}
      transition={{ type: "spring" }}
      className="cont_second_part_VA"
    >
      <div className="header_cont_principal_VA">
        <h1>Virar associado</h1>
      </div>
      <div className="headers_parts_VA">
        <h3>Pagamento</h3>
        <CreditCard sx={{ ml: 2 }} />
      </div>
      <div className="body_parts_VA">
        <div className="input_bodys_VA">
          <label>Número do Cartão</label>
          <input
            id="num_cartao_associado"
            type="text"
            value={novoAssociado.num_cartao}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, num_cartao: e.target.value };
              });
            }}
          />
        </div>
        <div className="input_bodys2_VA">
          <label>Data de Validade</label>
          <label>CVC</label>
          <DatePicker
            views={["year", "month"]}
            id="data_validade_associado"
            format="MM/YY"
            sx={{ width: "60%", height: "50px", padding: 0 }}
            value={novoAssociado.data_validade_cartao}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, data_validade_cartao: e };
              });
            }}
          />
          <Tooltip title="Código de Segurança">
            <input
              id="cvc_associado"
              type="number"
              style={{ width: "90%" }}
              value={novoAssociado.cvc_cartao}
              onChange={(e) => {
                setNovoAssociado((prev) => {
                  return { ...prev, cvc_cartao: e.target.value };
                });
              }}
            />
          </Tooltip>
        </div>
        <div className="input_bodys_VA">
          <label>Nome do Titular</label>
          <input
            id="nome_titular_associado"
            type="text"
            value={novoAssociado.nome_titular_cartao}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, nome_titular_cartao: e.target.value };
              });
            }}
          />
        </div>
        <div className="input_bodys_VA">
          <label>Endereço</label>
          <input
            id="endereco_cartao_associado"
            type="text"
            value={novoAssociado.endereco_cartao}
            onChange={(e) => {
              setNovoAssociado((prev) => {
                return { ...prev, endereco_cartao: e.target.value };
              });
            }}
          />
        </div>
      </div>
      <div className="footer_parts_VA">
        <Button
          onClick={() => {
            setIndexParte(0);
          }}
          className="btn_virar_associado_voltar"
          variant="contained"
        >
          Voltar
        </Button>
        <Button
          onClick={() => {
            setIndexParte(2);
          }}
          variant="contained"
        >
          Próximo
        </Button>
      </div>
    </motion.div>
  );
};

export default VirarAssociadoP2;

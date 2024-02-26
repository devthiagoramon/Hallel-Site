import React from "react";
import { OutlinedButtonHallel } from "../../../../components/BtnHallel";
import { useNavigate } from "react-router-dom";

const InfoUserDoacao = (props) => {

  const navigate = useNavigate();

  const handleAlterarClick = () => {
    props.setEtapa(2)
  };

  return (
    <div className="cont-pagamento-doacao">
      <div className="cont-info-user-pagamento-doacao">
        <label className="label-doacao-hallel-strong">
          Informações sobre a doação
        </label>
        <div className="cont-infos-pagamento-doacao">
          <label className="label-doacao-hallel">
            Doador:
            <span className="label-doacao-hallel-strong">
              Gisele Saraiva Vieira
            </span>
          </label>
          <label style={{ justifySelf: "end" }} className="label-doacao-hallel">
            Valor:
            <span className="label-doacao-hallel-strong">R$20,00</span>
          </label>
          <label className="label-doacao-hallel">
            Período:
            <span className="label-doacao-hallel-strong">Pontualmente</span>
          </label>
          <OutlinedButtonHallel 
            style={{ padding: "0.5rem", width: "30%", justifySelf: "end" }}
            onClick={handleAlterarClick}
          >
            Alterar
          </OutlinedButtonHallel>
        </div>
      </div>
    </div>
  );
};

export default InfoUserDoacao;

import { MuiFileInput } from "mui-file-input";
import React from "react";

const ContainerImagemAdicionarLocais = (props) => {
  const handleChangeImagem = (e) => {
    const file = e;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        props.setImagemLocal(dataURL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="inputAdicionarLocaisContainer">
      <label>Adicionar Imagem do Local</label>
      {props.imagemLocal != null && (
        <div className="container_imagem_local_evento">
          <img
            className="imagem_local_evento"
            alt="Imagem do Local"
            src={props.imagemLocal}
          />
        </div>
      )}

      <MuiFileInput onChange={handleChangeImagem} size="small" />
    </div>
  );
};

export default ContainerImagemAdicionarLocais;

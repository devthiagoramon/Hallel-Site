import React from "react";
import InputsBodyAdicionarLocais from "./InputsBodyAdicionarLocais";
import { useState } from "react";
import { useEffect } from "react";
import TabelaEnderecosAdicionarLocais from "./TabelaEnderecosAdicionarLocais";

const EsquerdaBodyAdicionarLocais = () => {
  const [isClicked, setisClicked] = useState(false);
  const [pesquisar, setpesquisar] = useState("");

  return (
    <div className="esquerdaAdicionarLocais">
      <InputsBodyAdicionarLocais setisClicked={setisClicked} />
      <TabelaEnderecosAdicionarLocais />
    </div>
  );
};

export default EsquerdaBodyAdicionarLocais;

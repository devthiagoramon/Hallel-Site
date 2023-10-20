import React, {useEffect} from "react";
import InputsBodyAdicionarLocais from "./InputsBodyAdicionarLocais";
import ContainerImagemAdicionarLocais from "./ContainerImagemAdicionarLocais";
import {useState} from "react";
import axios from "axios";
import {localEventoAdicionar} from "../../../../api/uris/EventosURLS";
import {eventoAdicionarLocalEventoService} from "../../../../service/EventoService";

const EsquerdaBodyLocaisEventos = (props) => {
    const [imagemLocal, setImagemLocal] = useState(null);
    const [localizacao, setLocalizacao] = useState("");
    const [isRequestSucessFull, setIsRequestSucessFull] = useState(null);
    const [enviando, setEnviando] = useState(false);

    const enviarRequest = () => {
        setEnviando(true);
        let localEvento = {
            imagem: imagemLocal,
            localizacao: localizacao
        }
        eventoAdicionarLocalEventoService(localEvento).then((response) => {
            if (response) {
                setIsRequestSucessFull(true);
                setEnviando(false)
                props.setEnviadoSucesso(!props.enviadoSucesso);
            } else {
                setIsRequestSucessFull(false);
                setEnviando(false);
            }
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setIsRequestSucessFull(null);
        }, 5000);
    }, [isRequestSucessFull])


    return (
        <div className="esquerdaAdicionarLocais">
            <ContainerImagemAdicionarLocais
                imagemLocal={imagemLocal}
                setImagemLocal={setImagemLocal}
            />
            <InputsBodyAdicionarLocais localizacao={localizacao} setLocalizacao={setLocalizacao}
                                       enviarRequest={enviarRequest} isRequestSucessFull={isRequestSucessFull}
                                       enviando={enviando}/>
        </div>
    );
};

export default EsquerdaBodyLocaisEventos;

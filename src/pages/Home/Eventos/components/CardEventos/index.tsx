import dayjs from "dayjs";
import { MapPin } from "phosphor-react";
import { ListEventsDTO } from "types/dtoTypes";
import SemImagemEvento from "../../../../../assets/Sem_imagem_eventos_Hallel.png";
import {
    CardEventosContainer,
    InfoCardEventosContainer,
} from "./style";

interface CardEventosProps {
    evento: ListEventsDTO;
}

const CardEventos = ({ evento }: CardEventosProps) => {
    return (
        <CardEventosContainer>
            {evento.imagem ? (
                <img
                    src={evento.imagem}
                    alt={`evento-${evento.titulo}-image`}
                />
            ) : (
                <img
                    src={SemImagemEvento}
                    alt={`sem-imagem-${evento.titulo}`}
                />
            )}
            <InfoCardEventosContainer>
                <label className="date">
                    {dayjs(evento.date).format("DD/MM/YYYY")}
                </label>
                <h4 className="title">{evento.titulo}</h4>
                {evento.localEvento && (
                    <span className="local">
                        <MapPin size={14} /> {evento.localEvento.localizacao}
                    </span>
                )}
            </InfoCardEventosContainer>
        </CardEventosContainer>
    );
};

export default CardEventos;

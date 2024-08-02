import { Empty } from "@phosphor-icons/react";
import TitleH from "components/TitleH";
import CardEventos from "pages/Home/Eventos/components/CardEventos";
import { ListEventsAdmDTO } from "types/admDTOTypes";
import { ListEventsDTO } from "types/dtoTypes";
import {
    CardAdmEventsContainer,
    CardAdmEventsNotFoundContainer,
} from "./style";

interface CardAdmEventsProps {
    events: ListEventsAdmDTO[];
}

const CardAdmEvents = ({ events }: CardAdmEventsProps) => {
    return (
        <div style={{ width: "100%" }}>
            {events.length > 0 && (
                <CardAdmEventsContainer>
                    {events.map((event) => {
                        return <CardEventos evento={event as ListEventsDTO} />;
                    })}
                </CardAdmEventsContainer>
            )}
            {events.length <= 0 && (
                <CardAdmEventsNotFoundContainer>
                    <Empty size={120} color="#F44336" />
                    <TitleH color="black" size="medium">
                        Nenhum evento adicionado!
                    </TitleH>
                </CardAdmEventsNotFoundContainer>
            )}
        </div>
    );
};

export default CardAdmEvents;

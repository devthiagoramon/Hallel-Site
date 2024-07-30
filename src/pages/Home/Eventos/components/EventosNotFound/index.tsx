import { Empty } from "@phosphor-icons/react";
import { EventosNotFoundContainer } from "./style";

const EventosNotFound = () => {
    return (
        <EventosNotFoundContainer>
            <Empty size={128} weight="bold" />
            <span>Nenhum evento encontrado</span>
        </EventosNotFoundContainer>
    );
};

export default EventosNotFound;

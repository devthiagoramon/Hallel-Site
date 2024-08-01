import { Autocomplete, TextField } from "@mui/material";
import { InputIconH } from "components/InputH";
import TitleH from "components/TitleH";
import { useListEvents } from "hooks/useListEvents";
import { MagnifyingGlass } from "phosphor-react";
import { useMemo, useState } from "react";
import CardEventos from "./components/CardEventos";
import EventosNotFound from "./components/EventosNotFound";
import {
    BodyEventosContainer,
    EventosContainer,
    HeaderEventosContainer,
    LeftHeaderEventosContainer,
    RigthHeaderEventosContainer,
} from "./style";

const Eventos = () => {

    const eventos = useListEvents().data;
    const [searchText, setSearchText] = useState<string>("");

    const eventosFiltered = useMemo(() => {
        const text = searchText.toLowerCase();
        return eventos?.filter((evento) =>
            evento.titulo.toLowerCase().includes(text),
        );
    }, [eventos, searchText]);

    return (
        <EventosContainer>
            <HeaderEventosContainer>
                <LeftHeaderEventosContainer>
                    <TitleH color="black" size="medium">
                        Encontrar eventos
                    </TitleH>
                    <InputIconH
                        value={searchText}
                        setValue={setSearchText}
                        inputProps={{ placeholder: "Pesquisar eventos" }}
                        type="contained"
                        endIcon={<MagnifyingGlass size={24} />}
                    />
                </LeftHeaderEventosContainer>
                <RigthHeaderEventosContainer>
                    <label>Filtrar por:</label>
                    <div className="options">
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField {...params} label="Estado" />
                            )}
                            options={[
                                "Eventos próximos",
                                "Em andamento",
                                "Finalizado",
                            ]}
                        />
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField {...params} label="Preço" />
                            )}
                            options={["Grátis", "Pago", "Qualquer preço"]}
                        />
                    </div>
                </RigthHeaderEventosContainer>
            </HeaderEventosContainer>
            {eventosFiltered && eventosFiltered?.length > 0 && (
                <BodyEventosContainer>
                    {eventosFiltered?.map((evento) => {
                        return <CardEventos evento={evento} />;
                    })}
                </BodyEventosContainer>
            )}
            {eventosFiltered && eventosFiltered?.length === 0 && (
                <EventosNotFound />
            )}
        </EventosContainer>
    );
};

export default Eventos;

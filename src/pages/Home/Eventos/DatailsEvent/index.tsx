import { getDetailsEvent } from "api/events/eventsAPI"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { EventDTO } from "types/dtoTypes"
import { ContainerDescription, ContainerDetailsEvent, ContainerHeaderDetailsEvents, ContainerImages, ContainerInfosHeaderDetails, ContainerToParticipate, ImageBanner, ImageEvent } from "./styles"
import Banner from "../../../../assets/BannerNoEvents.png"
import NotEvent from "../../../../assets/not_found_image_evento1.png"
import { MapPin, MinusCircle, PlusCircle } from "phosphor-react"
import { useShowEvent } from "hooks/useShowEvents"
import CircularLoading from "components/Loadings/CircularLoading"
import { CalendarDots } from "@phosphor-icons/react"


const DetailsEvents = () => {

    const { state } = useLocation()
    const eventId = state.eventId
    const { data: eventSelected, isLoading } = useShowEvent(eventId)
    const [countsSubscribes, setCountsSubscribes] = useState(0)

    const addSubscribes = () => {
        setCountsSubscribes(countsSubscribes + 1)
    }

    const removeSubscribes = () => {
        if (countsSubscribes === 0) {
            setCountsSubscribes(0)
            return
        }
        setCountsSubscribes(countsSubscribes - 1)
    }


    return (
        <>
            {isLoading ?
                <CircularLoading size={50} height="50vh" />
                :
                <ContainerDetailsEvent>
                    <ContainerImages>
                        {
                            eventSelected?.banner
                                ? <ImageBanner src={eventSelected.banner} />
                                : <ImageBanner src={Banner} />
                        }
                        {
                            eventSelected?.imagem
                                ? <ImageEvent src={eventSelected.imagem} />
                                : <ImageEvent src={NotEvent} />
                        }
                    </ContainerImages>
                    <ContainerHeaderDetailsEvents>
                        <ContainerInfosHeaderDetails>
                            <h1 className="title">{eventSelected?.titulo}</h1>
                            <div className="div-itens">
                                <CalendarDots size={24} className="icon" />
                                <p className="text">Incio evento - Fim evento</p>
                            </div>
                            <div className="div-itens">
                                <MapPin size={24} className="icon" />
                                <p className="text">
                                    {eventSelected?.localEvento
                                        ? eventSelected.localEvento.localizacao
                                        : "Não informado"
                                    }
                                </p>
                            </div>
                        </ContainerInfosHeaderDetails>
                        <ContainerToParticipate>
                            <header className="header">
                                <h3 className="title-header">Participar</h3>
                            </header>
                            <div className="container-infos">
                                <div className="div-infos">
                                    <h5>Inscrição individual</h5>
                                    <p>
                                        {
                                            eventSelected?.valorDoEvento !== null
                                                ? eventSelected?.valorDoEvento
                                                : "Não informado"
                                        }
                                    </p>
                                </div>
                                <div className="div-counts">
                                    <MinusCircle size={20} className="icon" onClick={removeSubscribes} />
                                    <p>{countsSubscribes}</p>
                                    <PlusCircle size={20} className="icon" onClick={addSubscribes} />
                                </div>
                            </div>
                            <div className="container-button">
                                <button>Realizar inscrição</button>
                            </div>
                        </ContainerToParticipate>
                    </ContainerHeaderDetailsEvents>
                    <ContainerDescription>
                        <h1>Descrição do evento</h1>
                        <div className="div-description">
                            <p>{eventSelected?.descricao ? eventSelected?.descricao : "Nao informado."}</p>
                        </div>
                        <div className="div-local">
                            <h1>Local</h1>
                            <h2>Nome local</h2>
                            <p>Endereço local</p>
                            <p>cidade</p>
                        </div>
                    </ContainerDescription>
                </ContainerDetailsEvent>
            }
        </>
    )
}

export default DetailsEvents
import { getDetailsEvent } from "api/events/eventsAPI"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { EventDTO } from "types/dtoTypes"
import { ContainerDetailsEvent, ContainerHeaderDetailsEvents, ContainerImages, ContainerInfosHeaderDetails, ContainerToParticipate, ImageBanner, ImageEvent } from "./styles"
import Banner from "../../../../assets/BannerNoEvents.png"
import NotEvent from "../../../../assets/not_found_image_evento1.png"
import { MinusCircle, PlusCircle } from "phosphor-react"


const DetailsEvents = () => {

    const { state } = useLocation()
    const eventId = state.eventId
    const [eventSelected, setEventSelected] = useState<EventDTO>()
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

    const handleEvent = async () => {
        try {
            const event = await getDetailsEvent(eventId)
            if (event) {
                setEventSelected(event)
            } else {
                return
            }
        } catch (error) {
            return
        }
    }


    useEffect(() => {
        handleEvent()
    }, [])


    return (
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
                <ContainerInfosHeaderDetails></ContainerInfosHeaderDetails>
                <ContainerToParticipate>
                    <header className="header">
                        <h3 className="title-header">Participar</h3>
                    </header>
                    <div className="container-infos">
                        <div className="div-infos">
                            <h5>Inscrição individual</h5>
                            <p>
                                {
                                    eventSelected?.valorDoEvento
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
        </ContainerDetailsEvent>
    )
}

export default DetailsEvents
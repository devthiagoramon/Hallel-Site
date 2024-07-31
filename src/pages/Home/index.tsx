import CardAssociation from "./Cards/CardAssociation/CardAssociation"
import CardGiving from "./Cards/CardGiving"
import CarouselEvents from "./Carousels/CarouselEvents"
import CarouselSchedules from "./Carousels/CarouselSchedules"
import MainCarousel from "./Carousels/MainCarousel"
import { ContainerCards, ContainerHomeEvents, ContainerItens, ContainerSchedules, ContainerWelcome, HomeContainer, TittleWelcome } from "./style"


const Home = () => {
    return (
        <HomeContainer>
            <ContainerItens>
                <ContainerWelcome>
                    <TittleWelcome>Bem-vindo à Comunidade Católica Hallel</TittleWelcome>
                    <MainCarousel />
                </ContainerWelcome>
                <ContainerSchedules>
                    <TittleWelcome>Horários</TittleWelcome>
                    <CarouselSchedules/>
                </ContainerSchedules>
            </ContainerItens>
            <ContainerHomeEvents>
                <TittleWelcome>Eventos</TittleWelcome>
                <CarouselEvents />
            </ContainerHomeEvents>
            <ContainerCards>
                <CardAssociation />
                <CardGiving />
            </ContainerCards>
        </HomeContainer>
    )
}

export default Home
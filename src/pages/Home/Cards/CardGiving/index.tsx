import { ButtonCardGiving, Circle, ContainerButtonCardGiving, ContainerMainCardGiving, ContainerTexts, Header, TextPrimary, TextSecondary } from "./styles"
import Icon from "../../../../assets/hand-arrow-up.svg"

const CardGiving = () => {
    return (
        <ContainerMainCardGiving>
            <Circle>
                <img src={Icon} alt="icon" style={{ objectFit: "contain" }} />
            </Circle>
            <Header>
                <h1>Doação</h1>
            </Header>
            <ContainerTexts>
                <TextPrimary>
                    Auxilie a comunidade a crescer e prosperar!
                </TextPrimary>
                <TextSecondary>
                    Sua generosidade pode fazer uma enorme diferença na vida daqueles que mais precisam. Ao contribuir para nossas iniciativas, você não apenas ajuda a fortalecer a Comunidade Católica Hallel, mas também participa ativamente na transformação do nosso entorno em um lugar melhor.
                </TextSecondary>
                <TextSecondary>
                    Clique em “Quero doar” para começar a sua doação
                </TextSecondary>
            </ContainerTexts>
            <ContainerButtonCardGiving>
                <ButtonCardGiving>
                    Quero doar
                </ButtonCardGiving>
            </ContainerButtonCardGiving>
        </ContainerMainCardGiving>
    )
}

export default CardGiving
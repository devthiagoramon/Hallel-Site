import { Sparkle } from "phosphor-react"
import { ButtonCardAssotiation, Circle, ContainerButtonCardAssotiation, ContainerMainCardAssotiation, ContainerTexts, Header, TextPrimary, TextSecondary } from "./styles"


const CardAssociation = () => {
    return (
        <ContainerMainCardAssotiation>
            <Circle>
                <Sparkle color="white" width={"70%"} height={"70%"} />
            </Circle>
            <Header>
                <h1>Associar-se</h1>
            </Header>
            <ContainerTexts>
                <TextPrimary>
                    Seja um associado Hallel, faça parte dos nossos projetos, tenha acesso aos cursos, certificados e outros benefícios.
                </TextPrimary>
                <TextSecondary>
                    Conheça os planos de associação da Hallel e venha transformar o mundo em um lugar melhor através da evangelização.
                </TextSecondary>
            </ContainerTexts>
            <ContainerButtonCardAssotiation>
                <ButtonCardAssotiation>
                    Ver mais
                </ButtonCardAssotiation>
            </ContainerButtonCardAssotiation>
        </ContainerMainCardAssotiation>
    )
}

export default CardAssociation
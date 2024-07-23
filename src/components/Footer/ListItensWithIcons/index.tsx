import { EnvelopeSimple, MapPin, Phone } from "phosphor-react"
import { Title } from "../FooterHome/styles"
import { Container, SectionItens, SectionMessage } from "./styles"
import { ListItensUl } from "../ListItens/styles"

const ListItensWithIcon = () => {
    return (
        <Container>
            <Title>CONTATO</Title>
            <SectionItens>
                <MapPin size={28} color="white" />
                <p>Rua Leonardo Malcher, nº 194 - Bairro: Aparecida - Manaus - AM-Brasil</p>
            </SectionItens>
            <SectionItens>
                <Phone size={28} color="white" />
                <p>(92) 3085-1787</p>
            </SectionItens>
            <SectionItens>
                <EnvelopeSimple size={28} color="white" />
                <p>comunidadehallel95@gmail.com</p>
            </SectionItens>
            <SectionMessage>
                <p>Horário de Funcionamento:</p>
                <div className="div">
                    <ListItensUl>
                        <li>Segunda a Sexta: 9h às 18h</li>
                        <li>Quarta: 9h às 17h</li>
                    </ListItensUl>
                </div>
            </SectionMessage>
        </Container>
    )
}

export default ListItensWithIcon
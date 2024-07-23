import AppTheme from "AppTheme"
import { ContainerFooter, ContainerLastMessage, ContainerLogo, ContainerPartOne, Image, Title } from "./styles"
import Logo from "../../../assets/logoHallelHD.png"
import { FacebookLogo, InstagramLogo } from "phosphor-react"
import ListItens from "../ListItens"
import ListItensWithIcon from "../ListItensWithIcons"


const FooterHome = () => {

    return (
        <ContainerFooter>
            <ContainerPartOne>
                <ContainerLogo>
                    <Image src={Logo} />
                    <div className="container-sig">
                        <Title>SIGA-NOS</Title>
                        <div className="div-icons">
                            <FacebookLogo size={32} color="white" />
                            <InstagramLogo size={32} color="white" />
                        </div>
                    </div>
                </ContainerLogo>
                <ListItens
                    title="IGREJA"
                    itens={[
                        "Quem somos",
                        "Fundadora",
                        "Carisma",
                        "Patronos",
                        "Vocação",
                        "Orações"
                    ]}
                    isSecond={false}
                />
                <ListItens
                    title="MAIS"
                    itens={[
                        "Ministérios",
                        "Atividades",
                        "Eventos",
                        "Loja",
                    ]}
                    isSecond={true}
                />
                <ListItensWithIcon />
            </ContainerPartOne>
            <ContainerLastMessage>
                <p>Associação Comunidade Católica Hallel © 2022 Todos os direitos reservados.</p>
            </ContainerLastMessage>
        </ContainerFooter>
    )
}

export default FooterHome
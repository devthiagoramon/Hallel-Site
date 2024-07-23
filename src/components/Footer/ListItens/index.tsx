import { useNavigate } from "react-router-dom"
import { Title } from "../FooterHome/styles"
import { ContainerListItens, ListItensUl } from "./styles"

interface Props {
    title: string
    itens: string[]
    isSecond: boolean
}

const ListItens = ({ itens, title, isSecond }: Props) => {

    const navigate = useNavigate()

    const handleNavigation = (item: string) => {
        if (isSecond) {
            switch (item) {
                case "Loja":
                    navigate("/loja")
                    break
                default:
                    return
            }
            //fazer demais logica de navegação
        } else {
            switch (item) {
                case "Quem somos":
                    navigate("/quem-somos")
                    break
                default:
                    return
            }
        }
    }

    return (
        <ContainerListItens>
            <Title>{title}</Title>
            <ListItensUl>
                {itens.map((item, idx) =>
                    <li
                        key={idx}
                        onClick={() => handleNavigation(item)}
                    >
                        {item}
                    </li>
                )}
            </ListItensUl>
        </ContainerListItens>
    )
}

export default ListItens
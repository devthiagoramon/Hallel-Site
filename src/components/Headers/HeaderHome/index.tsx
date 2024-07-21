import { ButtonTittle, ContainerHeader, ContainerItens, Image, Title } from "./styles"
import Logo from "../../../assets/image.png"
import { UserCircle } from "phosphor-react"
import { useState } from "react"

interface Props {
    titles: string[]
}


const HeaderHome = ({ titles }: Props) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ContainerHeader>
            <Image src={Logo} />
            <ContainerItens>
                {titles.map((title, index) =>
                    <div className="div-menu-items">
                        <ButtonTittle key={index}>
                            <Title>{title}</Title>
                        </ButtonTittle>
                    </div>
                )}
            </ContainerItens>
            <UserCircle size={50} color="#F1F1F1" />
        </ContainerHeader>
    )
}

export default HeaderHome
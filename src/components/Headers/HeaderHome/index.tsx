import { ButtonTittle, ContainerHeader, ContainerItens, Image, Title } from "./styles"
import Logo from "../../../assets/image.png"
import { ArrowLineUpRight, CaretDown, CaretUp, UserCircle } from "phosphor-react"
import { useState } from "react"
import { Menu, MenuItem } from "@mui/material"

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
                        <ButtonTittle key={index} onClick={title === "Igreja" ? handleClick : () => { }}>
                            <Title>{title}</Title>
                            {title === "Igreja" && (
                                !open
                                    ? <CaretDown size={28} color="#F1F1F1" />
                                    : <CaretUp size={28} color="#F1F1F1" />
                            )}
                            {title === "Cursos" && (
                                <CaretDown size={28} color="#F1F1F1" />
                                // !open
                                //     ? <CaretDown size={28} color="#F1F1F1" />
                                //     : <CaretUp size={28} color="#F1F1F1" />
                            )}
                        </ButtonTittle>
                        {title === "Igreja" && (
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: '#06612E',
                                        color: "white"
                                    },
                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    Fundadora <ArrowLineUpRight size={20} />
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    Quem somos <ArrowLineUpRight size={20} />
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    Logout <ArrowLineUpRight size={20} />
                                </MenuItem>
                            </Menu>
                        )}
                    </div>
                )}
            </ContainerItens>
            <UserCircle size={50} color="#F1F1F1" />
        </ContainerHeader>
    )
}

export default HeaderHome
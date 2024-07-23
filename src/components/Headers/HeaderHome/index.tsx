import { ButtonTittle, ContainerHeader, ContainerItens, Image, Title } from "./styles"
import Logo from "../../../assets/image.png"
import { ArrowLineUpRight, CaretDown, CaretUp, UserCircle } from "phosphor-react"
import { useState } from "react"
import { Menu, MenuItem } from "@mui/material"
import { useNavigate, useNavigation } from "react-router-dom"

interface Props {
    titles: string[]
}


const HeaderHome = ({ titles }: Props) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        navigate(path)
    }


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        if (index !== 4 && index !== 5) {
            switch (index) {
                case 0:
                    handleNavigation("/")
                    break;
                case 1:
                    handleNavigation("/eventos")
                    break;
                case 2:
                    handleNavigation("/ministerios")
                    break;
                case 3:
                    handleNavigation("/doacoes")
                    break;
                case 6:
                    handleNavigation("/loja")
                    break;
                default:
                    return        
            }
        }
        if (openMenuIndex === index) {
            setAnchorEl(null);
            setOpenMenuIndex(null);
        } else {
            setAnchorEl(event.currentTarget);
            setOpenMenuIndex(index);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenuIndex(null);
    };



    return (
        <ContainerHeader>
            <Image src={Logo} />
            <ContainerItens>
                {titles.map((title, index) => (
                    <div key={index}>
                        <ButtonTittle onClick={(event: any) => handleClick(event, index)}>
                            <Title>{title}</Title>
                            {([4, 5].includes(index)) &&
                                (openMenuIndex === index
                                    ? <CaretUp color="white" size={23} />
                                    : <CaretDown color="white" size={23} />
                                )
                            }
                        </ButtonTittle>
                        {([4, 5].includes(index)) && openMenuIndex === index && (
                            <Menu
                                id={`basic-menu-${index}`}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': `basic-button-${index}`,
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: '#06612E',
                                        color: 'white',
                                        width: 170
                                    },
                                }}
                            >
                                {index === 4 ? (
                                    <>
                                        <MenuItem 
                                        onClick={handleClose}
                                        sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Fundadora <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem 
                                        onClick={()=> handleNavigation("quem-somos")} 
                                        sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Quem somos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Sorteio <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                    </>
                                ) : index === 5 ? (
                                    <>
                                        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Cursos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Meus cursos <ArrowLineUpRight size={20} />
                                        </MenuItem>
                                    </>
                                ) : null}
                            </Menu>
                        )}
                    </div>
                ))}
            </ContainerItens>
            <UserCircle size={50} color="#F1F1F1" />
        </ContainerHeader>
    )
}

export default HeaderHome
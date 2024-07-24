import { MenuDivider, MenuHeader, MenuItem } from "@szhsin/react-menu";
import { Sparkle, User } from "phosphor-react";

const MembroMenu = () => {
    return (
        <>
            <MenuItem>
                <User size={20} />
                Meu perfil
            </MenuItem>
            <MenuItem>
                <Sparkle size={20} />
                Virar associado
            </MenuItem>
            <MenuDivider />
            <MenuHeader>
                Comunidade
            </MenuHeader>
            <MenuItem>
                Participação em eventos
            </MenuItem>
            <MenuItem>
                Participação em retiros
            </MenuItem>
            <MenuDivider />
            <MenuItem style={{ color: "#F44336" }}>Sair</MenuItem>
        </>
    );
};

export default MembroMenu;

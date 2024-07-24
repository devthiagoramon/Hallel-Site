import { IconButton } from "@mui/material";
import { MenuHeader } from "@szhsin/react-menu";
import MenuH from "components/MenuH";
import UserPhoto from "components/UserPhoto";
import { isTokenExist } from "utils/mainUtils";
import MembroMenu from "./MembroMenu";
import "./profile-menu-style.css";
import VisitanteMenu from "./VisitanteMenu";

const ProfileMenu = () => {

    return (
        <MenuH
            menuButton={
                <IconButton type="button">
                    <UserPhoto />
                </IconButton>
            }
            align="end"
            direction="bottom"
            arrow
        >
            <MenuHeader>Perfil</MenuHeader>
            {isTokenExist() ? <MembroMenu /> : <VisitanteMenu />}
        </MenuH>
    );
};

export default ProfileMenu;

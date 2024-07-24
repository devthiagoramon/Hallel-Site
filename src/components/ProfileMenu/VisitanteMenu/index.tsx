import { MenuItem } from "@szhsin/react-menu";
import { useNavigate } from "react-router-dom";

const VisitanteMenu = () => {
    const navigation = useNavigate();
    return (
        <>
            <MenuItem onClick={() => navigation("/signIn")}>
                Cadastrar
            </MenuItem>
            <MenuItem onClick={() => navigation("/signUp")}>
                Entrar
            </MenuItem>
        </>
    );
};

export default VisitanteMenu;

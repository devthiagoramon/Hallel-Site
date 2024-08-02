import { Calendar } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHallel from "../../assets/logoHallelHD.png";
import MenuItemH from "./components/MenuItemH";
import {
    AdmSideBarContainer,
    AdmSideBarHeaderContainer,
} from "./style";

const AdmSideBar = () => {
    const [actualPath, setActualPath] = useState<string>("");
    const navigation = useNavigate();

    const goToPage = (to: string) => {
        navigation(to);
    };

    useEffect(() => {
        const path = window.location.href;
        const actualPath = path.substring(path.lastIndexOf("/"));
        setActualPath(actualPath);
    }, []);

    return (
        <AdmSideBarContainer>
            <AdmSideBarHeaderContainer>
                <img src={LogoHallel} alt="logo-hallel" />
                <h4>
                    ADMINISTRADOR
                </h4>
            </AdmSideBarHeaderContainer>
            <div className="list-items">
                <MenuItemH
                    onClick={() => goToPage("/administrador/eventos")}
                    selected={actualPath.includes("eventos")}
                    name="Eventos"
                    Icon={<Calendar size={32} />}
                />
            </div>
        </AdmSideBarContainer>
    );
};

export default AdmSideBar;

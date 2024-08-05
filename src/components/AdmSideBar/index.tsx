import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHallel from "../../assets/logoHallelHD.png";
import { admRoutesObj } from "./admRouteObj";
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
                <h4>ADMINISTRADOR</h4>
            </AdmSideBarHeaderContainer>
            <div className="list-items">
                {admRoutesObj.map((route) => {
                    return (
                        <MenuItemH
                            name={route.title}
                            selected={actualPath.includes(route.link)}
                            onClick={() => goToPage(route.link)}
                            Icon={route.Icon}
                        />
                    );
                })}
            </div>
        </AdmSideBarContainer>
    );
};

export default AdmSideBar;

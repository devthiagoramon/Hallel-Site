import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHallel from "../../assets/logoHallelHD.png";
import { admRoutesObj } from "./admRouteObj";
import MenuItemH from "./components/MenuItemH";
import {
    AdmSideBarContainer,
    AdmSideBarHeaderContainer,
} from "./style";

interface AdmSideBarProps {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}

const AdmSideBar = ({ expanded, setExpanded }: AdmSideBarProps) => {
    const [actualPath, setActualPath] = useState<string>("");
    const navigation = useNavigate();

    const goToPage = (to: string) => {
        navigation(to);
    };

    useEffect(() => {
        const path = window.location.href;
        const actualPath = path.substring(path.indexOf("/", 8));
        setActualPath(actualPath);
    }, [window.location]);

    return (
        <AdmSideBarContainer>
            <AdmSideBarHeaderContainer>
                <img src={LogoHallel} alt="logo-hallel" />
                <h4>ADMINISTRADOR</h4>
            </AdmSideBarHeaderContainer>
            <div className="list-items">
                {admRoutesObj.map((route, index) => {
                    return (
                        <MenuItemH
                            key={index}
                            name={route.title}
                            selected={actualPath === route.link}
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

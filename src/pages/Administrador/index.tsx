import { listMembrosAdmService } from "api/admin/membros/admMembrosAPI";
import { admRoutesObj } from "components/AdmSideBar/admRouteObj";
import TitleH from "components/TitleH";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardDashboardADM from "./components/CardDashboardADM";
import {
    BodyDashBoardAdmContainer,
    DashboardAdmContainer,
    HeaderDashBoardAdmContainer,
} from "./style";

const Administrador = () => {
    const navigation = useNavigate();
    useEffect(() => {
        async function verifyTokenADM() {
            try {
                const members = await listMembrosAdmService();
            } catch (error) {
                navigation("/administrador/signup");
            }
        }
        verifyTokenADM();
    }, []);

    return (
        <DashboardAdmContainer>
            <HeaderDashBoardAdmContainer>
                <TitleH color="black" size="medium">
                    Bem-vindo ao administrativo da Hallel
                </TitleH>
            </HeaderDashBoardAdmContainer>
            <BodyDashBoardAdmContainer>
                {admRoutesObj.map((route, index) => {
                    if (index === 0) {
                        return false;
                    }
                    return (
                        <CardDashboardADM
                            description={route.description || ""}
                            link={route.link}
                            title={route.title}
                        />
                    );
                })}
            </BodyDashBoardAdmContainer>
        </DashboardAdmContainer>
    );
};

export default Administrador;

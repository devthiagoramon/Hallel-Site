import FooterHome from "components/Footer/FooterHome";
import HeaderHome from "components/Headers/HeaderHome";
import React from "react";

interface HomeRouteWrapperProps {
    children: React.ReactNode;
}

const HomeRouteWrapper = ({ children }: HomeRouteWrapperProps) => {
    return (
        <>
            <HeaderHome
                titles={[
                    "Início",
                    "Eventos",
                    "Ministérios",
                    "Doações",
                    "Igreja",
                    "Cursos",
                    "Loja",
                ]}
            />
            {children}
            <FooterHome />
        </>
    );
};

export default HomeRouteWrapper;

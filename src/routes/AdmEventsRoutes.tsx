import AdmWrapper from "components/AdmWrapper";
import AdmEventos from "pages/Administrador/AdmEventos";
import AdmAdicionarEvento from "pages/Administrador/AdmEventos/AdmAdicionarEvento";
import { Route, Routes } from "react-router-dom";

const AdmEventsRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AdmWrapper>
                            <AdmEventos />
                        </AdmWrapper>
                    }
                />
                <Route
                    path="adicionar"
                    element={
                        <AdmWrapper>
                            <AdmAdicionarEvento />
                        </AdmWrapper>
                    }
                />
            </Routes>
        </>
    );
};

export default AdmEventsRoutes;

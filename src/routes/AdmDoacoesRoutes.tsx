import AdmWrapper from "components/AdmWrapper";
import AdmDoacoes from "pages/Administrador/AdmDoacoes";
import AdmAdicionarEditarDoacao from "pages/Administrador/AdmDoacoes/AdmAdicionarDoacao";
import AdmEditarDoacao from "pages/Administrador/AdmDoacoes/AdmEditarDoacao";
import { Route, Routes } from "react-router-dom";

const AdmDoacoesRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AdmWrapper>
                        <AdmDoacoes />
                    </AdmWrapper>
                }
            />
            <Route
                path="adicionar"
                element={
                    <AdmWrapper>
                        <AdmAdicionarEditarDoacao />
                    </AdmWrapper>
                }
            />
            <Route
                path="editar"
                element={
                    <AdmWrapper>
                        <AdmEditarDoacao />
                    </AdmWrapper>
                }
            />
        </Routes>
    );
};

export default AdmDoacoesRoutes;

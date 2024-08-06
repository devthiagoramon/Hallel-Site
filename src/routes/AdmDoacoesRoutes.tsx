import AdmWrapper from "components/AdmWrapper";
import AdmDoacoes from "pages/Administrador/AdmDoacoes";
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
        </Routes>
    );
};

export default AdmDoacoesRoutes;

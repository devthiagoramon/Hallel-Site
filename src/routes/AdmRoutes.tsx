import AdmWrapper from "components/AdmWrapper";
import Administrador from "pages/Administrador";
import AdmSignUp from "pages/Administrador/AdmSignUp";
import { Route, Routes } from "react-router-dom";
import AdmDoacoesRoutes from "./AdmDoacoesRoutes";
import AdmEventsRoutes from "./AdmEventsRoutes";
import AdmMinisterioRoutes from "./AdmMinisterioRoutes";

const AdmRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="signup" element={<AdmSignUp />} />
                <Route
                    path="/"
                    element={
                        <AdmWrapper>
                            <Administrador />
                        </AdmWrapper>
                    }
                />
                <Route path="eventos/*" element={<AdmEventsRoutes />} />
                <Route path="doacoes/*" element={<AdmDoacoesRoutes />} />
                <Route
                    path="ministerios/*"
                    element={<AdmMinisterioRoutes />}
                />
            </Routes>
        </>
    );
};

export default AdmRoutes;

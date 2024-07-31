import AdmWrapper from "components/AdmWrapper";
import Administrador from "pages/Administrador";
import AdmEventos from "pages/Administrador/AdmEventos";
import AdmSignUp from "pages/Administrador/AdmSignUp";
import { Route, Routes } from "react-router-dom";

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
                <Route
                    path="eventos"
                    element={
                        <AdmWrapper>
                            <AdmEventos />
                        </AdmWrapper>
                    }
                />
            </Routes>
        </>
    );
};

export default AdmRoutes;

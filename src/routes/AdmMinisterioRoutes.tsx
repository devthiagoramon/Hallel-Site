import AdmWrapper from "components/AdmWrapper";
import AdmMinisterios from "pages/Administrador/AdmMinisterios";
import { Route, Routes } from "react-router-dom";

const AdmMinisterioRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AdmWrapper>
                            <AdmMinisterios />
                        </AdmWrapper>
                    }
                />
            </Routes>
        </>
    );
};

export default AdmMinisterioRoutes;

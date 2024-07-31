import AdmRoutes from "AdmRoutes";
import HomeRouteWrapper from "components/HomeRouteWrapper";
import Eventos from "pages/Home/Eventos";
import Fundadora from "pages/Home/Fundadora";
import QuemSomos from "pages/Home/QuemSomos";
import Sorteio from "pages/Home/Sorteio";
import Profile from "pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeRouteWrapper>
                            <Home />
                        </HomeRouteWrapper>
                    }
                />
                <Route element={<SignIn />} path="signin" />
                <Route element={<SignUp />} path="signup" />
                <Route
                    path="eventos"
                    element={
                        <HomeRouteWrapper>
                            <Eventos />
                        </HomeRouteWrapper>
                    }
                />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <QuemSomos />
                        </HomeRouteWrapper>
                    }
                    path="quem-somos"
                />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <Fundadora />
                        </HomeRouteWrapper>
                    }
                    path="fundadora"
                />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <Sorteio />
                        </HomeRouteWrapper>
                    }
                    path="sorteio"
                />
                <Route
                    element={
                        <HomeRouteWrapper>
                            <Profile />
                        </HomeRouteWrapper>
                    }
                    path="profile"
                />
                <Route path="administrador/*" element={<AdmRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;

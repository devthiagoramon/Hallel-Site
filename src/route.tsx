import QuemSomos from "pages/Home/QuemSomos"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import HeaderHome from "components/Headers/HeaderHome"
import FooterHome from "components/Footer/FooterHome"

const AppRouter = () => {
    return (
        <BrowserRouter>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SignIn />} path='signin' />
                <Route element={<SignUp />} path='signup' />
                <Route element={<QuemSomos />} path="quem-somos" />
            </Routes>
            <FooterHome/>
        </BrowserRouter>
    )
}

export default AppRouter
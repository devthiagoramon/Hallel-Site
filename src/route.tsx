import Fundadora from "pages/Home/Fundadora"
import QuemSomos from "pages/Home/QuemSomos"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SignIn />} path='signin' />
                <Route element={<SignUp />} path='signup' />
                <Route element={<QuemSomos />} path="quem-somos" />
                <Route element={<Fundadora />} path="fundadora" />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
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
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
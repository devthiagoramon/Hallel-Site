import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SignIn />} path='signIn' />
                <Route element={<SignUp />} path='signUp' />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
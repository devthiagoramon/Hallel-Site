import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route  path="/" component={Home} />
        //   <Route path="/about" component={About} />
        //   <Route path="/contact" component={Contact} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
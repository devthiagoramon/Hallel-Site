import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import { RouteType } from '../../types/routeType'


const MainRoutes = () => {

    const routes: RouteType[] = [{
        element: <Home />,
        path: "/"
    },
    {
        element: <SignIn />,
        path: "/signIn"
    },
    {
        element: <SignUp />,
        path: "/signUp"
    }
    ]

    return (
        <Routes>
            <Route element={<SignIn/>} path='/signIn'/>
            <Route element={<SignUp/>} path='/signUp'/>
        </Routes>
    )
}

export default MainRoutes
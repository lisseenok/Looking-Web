import {ADD_HOSTEL_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "./utils/const";
import LoginPage from "./components/pages/LoginPage";
import AddHostelPage from "./components/pages/AddHostelPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    }
]

export const privateRoutes = [
    {
        path: ADD_HOSTEL_ROUTE,
        Component: AddHostelPage
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    }
]
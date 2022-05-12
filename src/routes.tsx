import {ADD_HOSTEL_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE} from "./utils/const";
import Login from "./components/pages/Login";
import AddHostel from "./components/pages/AddHostel";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]

export const privateRoutes = [
    {
        path: ADD_HOSTEL_ROUTE,
        Component: AddHostel
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]
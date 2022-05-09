import {ADD_HOSTEL_ROUTE, LOGIN_ROUTE} from "./utils/const";
import Login from "./components/Login";
import AddHostel from "./components/AddHostel";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: ADD_HOSTEL_ROUTE,
        Component: AddHostel
    }
]
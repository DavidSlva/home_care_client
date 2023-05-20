import Login from "../pages/Login";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import LayoutLogin from "../components/layouts/LayoutLogin";
import Error404 from "../pages/Error404";
import Home from "../pages/administrador/Home";
import Perfil from "../pages/administrador/Perfil";

const adminRoutes = [
    {
        path: '/admin',
        layout:  LayoutAdmin,
        element: Home
    },{
        path: '/perfil',
        layout:  LayoutAdmin,
        element: Perfil
    }
]
const loginRoute = [
    {
        path: '/login',
        layout: LayoutLogin,
        element: Login
    }
]

const generalRoutes = [
    {
        path: '/*',
        layout: LayoutAdmin,
        element: Error404
    }
]

const routes = [...loginRoute, ...adminRoutes, ...generalRoutes]

export default routes
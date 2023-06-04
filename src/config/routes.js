import Login from "../pages/Login";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import LayoutLogin from "../components/layouts/LayoutLogin";
import Error404 from "../pages/Error404";
import AdminHome from "../pages/administrador/AdminHome";
import Pacientes from "../pages/personal/Pacientes";
import Test from "../pages/administrador/Test";
import Schedule from "../pages/administrador/funcionalidades/Schedule";
import AdminPersonal from "../pages/administrador/funcionalidades/AdminPersonal";
import Finanzas from "../pages/administrador/funcionalidades/Finanzas";

const adminRoutes = [ //rutas del administrador
    {
        path: '/admin',
        layout:  LayoutAdmin,
        element: AdminHome
    },
    {
        path: '/test',
        layout:  LayoutAdmin,
        element: Test
    }

]
const adminFXRoutes = [ //rutas del administrador
    {
        path: '/admin/schedule',
        layout:  LayoutAdmin,
        element: Schedule
    },
    {
        path: '/admin/personal',
        layout:  LayoutAdmin,
        element: AdminPersonal
    },
    {
        path: '/admin/finanzas',
        layout:  LayoutAdmin,
        element: Finanzas
    },
    {
        path: 'admin/test',
        layout:  LayoutAdmin,
        element: Test
    }

]
const personalRoutes = [ //rutas del personal médico
    {
        path: '/pacientes',
        layout:  LayoutAdmin,
        element: Pacientes
    }
]
const loginRoute = [
    {
        path: '/login',
        layout: LayoutLogin,
        element: Login
    }
]

const generalRoutes = [ //rutas para todo visitante
    {
        path: '/*',
        layout: LayoutAdmin,
        element: Error404
    }
]

const routes = [...loginRoute, ...adminRoutes, ...generalRoutes, ...personalRoutes, ...adminFXRoutes]

export default routes
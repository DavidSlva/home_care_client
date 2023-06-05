import Login from "../pages/Login";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import LayoutLogin from "../components/layouts/LayoutLogin";
import Error404 from "../pages/Error404";
import AdminHome from "../pages/administrador/AdminHome";
import Pacientes from "../pages/especialista/funcionalidades/Pacientes";
import Test from "../pages/administrador/Test";
import Schedule from "../pages/administrador/funcionalidades/Schedule";
import AdminPersonal from "../pages/administrador/funcionalidades/AdminPersonal";
import Finanzas from "../pages/administrador/funcionalidades/Finanzas";
import PerfilEspecialista from "../pages/especialista/funcionalidades/PerfilEspecialista";
import EspecialistaHome from "../pages/especialista/EspecialistaHome";
import AgendaEspecialista from "../pages/especialista/funcionalidades/AgendaEspecialista";
import CrearForm from "../pages/especialista/funcionalidades/CrearForm";
import FormTest from "../pages/especialista/funcionalidades/FormTest";

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
const adminFXRoutes = [ //rutas de funciones de administrador
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
        path: '/admin/test',
        layout:  LayoutAdmin,
        element: Test
    }

]
const especialistaRoutes = [ //rutas del personal médico
    {
        path: '/especialista',
        layout:  LayoutAdmin,
        element: EspecialistaHome
    }
]

const especialistaFXRoutes = [ //rutas de funciones de personal médico
    {
        path: '/especialista/perfil',
        layout:  LayoutAdmin,
        element: PerfilEspecialista
    },
    {
        path: '/especialista/agenda',
        layout:  LayoutAdmin,
        element: AgendaEspecialista
    },
    {
        path: '/especialista/pacientes',
        layout:  LayoutAdmin,
        element: Pacientes
    },
    {
        path: '/especialista/crearform',
        layout:  LayoutAdmin,
        element: CrearForm
    },
    {
        path: '/especialista/formtest',
        layout:  LayoutAdmin,
        element: FormTest
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

const routes = [...loginRoute, ...adminRoutes, ...generalRoutes, ...especialistaRoutes, ...adminFXRoutes, ...especialistaFXRoutes]

export default routes
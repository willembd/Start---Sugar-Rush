import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Footer from "../componentes/Footer/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/footer',
        element: <Footer/>
    }
])
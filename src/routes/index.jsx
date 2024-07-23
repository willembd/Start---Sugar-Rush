import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
])
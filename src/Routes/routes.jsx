import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/SignInUp/Login";
import Register from "../Components/SignInUp/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children : [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/login",
                element: <Login />

            },
            {
                path: "/register",
                element: <Register />

            },
        ]
    }
   
])
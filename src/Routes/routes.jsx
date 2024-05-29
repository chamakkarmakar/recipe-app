import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddRecipe from "../Pages/AddRecipe";
import AllRecipes from "../Pages/AllRecipes";
import EditRecipe from "../Pages/EditRecipe";
import RecipeDetails from "../Pages/RecipeDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
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
            {
                path: "/recipes/:id",
                element: <RecipeDetails />,
                loader: ({ params }) =>
                  fetch(`http://localhost:3000/recipes/${params.id}`),
              },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: "add-recipe",
                element: (
                  <PrivateRoute>
                    <AddRecipe />
                  </PrivateRoute>
                ),
              },
            {
                path: "all-recipes",
                element: (
                  <PrivateRoute>
                    <AllRecipes />
                  </PrivateRoute>
                ),
              },
              {
                path: "all-recipes/edit/:id",
                element: (
                  <PrivateRoute>
                    <EditRecipe />
                  </PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`http://localhost:3000/recipes/${params.id}`),
              },
        ]
    }

])
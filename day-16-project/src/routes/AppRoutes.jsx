import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductPage from "../pages/ProductPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
                path: "",
                elements:<HomePage/>
            },
            {
                path: "users",
                elements:<UsersPage/>
            },
            {
                path: "products",
                elements:<ProductPage/>
            },
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

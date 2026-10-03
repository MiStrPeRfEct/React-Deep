import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { useDispatch } from "react-redux";
import PublicProtectedRoutes from "./protected/PublicProtectedRoutes";
import MainProtectedRoutes from "./protected/MainProtectedRoutes";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";

const AppRoutes = () => {
  let dispatch = useDispatch();
  const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      toast.error("unAuthorized user");
      return;
    }
    dispatch(addUser(loggedInUser));
  };
  useEffect(() => {
    hydrateUser();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtectedRoutes />,
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
      element: <MainProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

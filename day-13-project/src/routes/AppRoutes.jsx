
import React from "react";
import { Route, Routes } from "react-router";
import About from "../pages/About";
import Products from "../pages/Products";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/products" element={<Products />} />
        <Route path = "/detail/:id" element = {<ProductDetail/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;

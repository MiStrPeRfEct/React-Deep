import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 justify-between px-10 bg-yellow-600  py-4">
      <h1>logo</h1>
      <div className="flex items-center gap-10 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink  className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          } to={"/main/product"}>Shop</NavLink>
        <NavLink  className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          } to={"/main/about"}>about</NavLink>
      </div>
      <div className="flex items-center gap-6">
        <NavLink  className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          } to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>
        <NavLink  className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          } to={"/main/orders"}>
          <Box />
        </NavLink>
        <button className="bg-red-700 text-white px-5 py-1 rounded cursor-pointer">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;

// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <nav className="bg-blue-300 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-white text-lg font-semibold">
        MyApp
      </a>
      <div className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold"
              : "text-white hover:text-gray-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-500 font-semibold"
              : "text-white hover:text-gray-200"
          }
        >
          About
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Sidebar;

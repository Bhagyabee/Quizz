import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />

      <main className="flex p-4 md:p-8 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

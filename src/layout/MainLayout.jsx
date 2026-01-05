import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shered/Navbar/Navbar";
import Footer from "../shered/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

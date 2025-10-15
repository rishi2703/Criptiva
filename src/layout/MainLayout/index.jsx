import React from "react";
import { Sidebar } from "../../component/UI/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-1">

        <div className="flex-1">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

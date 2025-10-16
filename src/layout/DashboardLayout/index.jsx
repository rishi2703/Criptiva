import React from "react";

import { Outlet } from "react-router-dom";


import { Sidebar } from "../../component/UI/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

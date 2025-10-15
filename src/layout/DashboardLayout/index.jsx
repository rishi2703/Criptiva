import React from "react";

import { Outlet } from "react-router-dom";


import { Sidebar } from "../../component/UI/Sidebar";

const DashboardLayout = () => {
  return (
 <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="hidden lg:block w-64">
          <Sidebar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

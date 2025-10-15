import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={MainLayout}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={DashboardLayout}>
          <Route path="" element={<></>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;

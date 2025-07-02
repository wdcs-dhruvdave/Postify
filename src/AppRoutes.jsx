import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
          </MainLayout>
        }
      />
      <Route
        path="/users"
        element={
          <MainLayout>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

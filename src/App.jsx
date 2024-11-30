import { useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Auth/Dashboard/EmployeeDashboard";
import Header from "./Components/Others/Header";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

function App() {
  useEffect(() => {
    //setLocalStorage();
    getLocalStorage();
  });


  return (
    <>
      <Login />

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;

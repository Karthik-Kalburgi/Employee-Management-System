import { useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Auth/Dashboard/EmployeeDashboard";
import Header from "./Components/Others/Header";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

function App() {
  const [user, setuser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "kk@gmail.com" && password == "123") {
      setuser("admin");
    } else if (email == "user@gmail.com" && password == "123") {
      setuser("employee");
    } else {
      alert("Invalid crenditails");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""};
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;

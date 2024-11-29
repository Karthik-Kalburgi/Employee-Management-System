import { useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Auth/Dashboard/EmployeeDashboard";
import Header from "./Components/Others/Header";
import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}

      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  );
}

export default App;

import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Auth/Dashboard/EmployeeDashboard";

import AdminDashboard from "./Components/Auth/Dashboard/AdminDashboard";

import { AuthContext } from "./Context/AuthProvider";

function App() {
  const [user, setuser] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setuser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "kk@gmail.com" && password == "123") {
      setuser({role:"admin"});
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData )

     {
      const employee =
      authData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
        setuser({role:employee});
      }

      localStorage.setItem(
        "loggedInAdmin",
        JSON.stringify({ role: "employees" })
      );
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

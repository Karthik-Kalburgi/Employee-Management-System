import { useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Auth/Dashboard/EmployeeDashboard";
import Header from "./Components/Others/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}

      <EmployeeDashboard />
    </>
  );
}

export default App;

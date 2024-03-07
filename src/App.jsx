import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-black w-full h-[100vh]">
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default App;

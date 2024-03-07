import React, { useEffect, useState } from "react";
import { api_url } from "../contant";
import EmployeeList from "./EmployeeList";

const EmployeeTable = () => {
  const [Employee, setEmployee] = useState([]);
  const fetching = async () => {
    const res = await fetch(`${api_url}/getAll`);
    const data = await res.json();
    setEmployee(data.data);
  };
  useEffect(() => {
    fetching();
  }, []);

  const filterEmployee = (id) => {
    setEmployee((prevData) => {
      return prevData.filter((data) => {
        return data._id !== id;
      });
    });
  };

  return (
    <table className="w-full min-w-[702px] overflow-x-auto">
      <thead>
        <tr>
          <th className="border bg-cyan-950">ID</th>
          <th className="border bg-cyan-950">Name</th>
          <th className="border bg-cyan-950">Phone Number</th>
          <th className="border bg-cyan-950">Email</th>
          <th className="border bg-cyan-950">Role</th>
          <th className="border bg-cyan-950">Department</th>
          <th className="border bg-cyan-950">Action</th>
        </tr>
      </thead>
      <tbody>
        {Employee &&
          Employee.map((list, index) => {
            return (
              <EmployeeList
                key={list._id}
                index={index}
                {...list}
                filterEmployee={filterEmployee}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

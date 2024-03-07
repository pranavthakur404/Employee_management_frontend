import React from "react";
import { api_url } from "../contant";

const EmployeeList = ({
  index,
  _id,
  name,
  phoneNumber,
  email,
  role,
  department,
  filterEmployee,
}) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${api_url}/delete/${_id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      filterEmployee(data.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="text-center">
      <td className="border font-sm p-1">{index}</td>
      <td className="border font-sm p-1">{name}</td>
      <td className="border font-sm p-1">{phoneNumber}</td>
      <td className="border font-sm p-1">{email}</td>
      <td className="border font-sm p-1">{role}</td>
      <td className="border font-sm p-1">{department}</td>
      <td className="border p-1 text-center ">
        <button
          className="bg-red-600 font-xs py-1 px-2 rounded-md"
          onClick={handleDelete}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeList;

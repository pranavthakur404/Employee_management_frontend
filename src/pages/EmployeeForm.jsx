import React, { useState } from "react";
import Container from "../components/Container";
import { api_url } from "../contant";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    role: "",
    department: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api_url}/createEmployee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const resData = await res.json();
      setData({
        name: "",
        phoneNumber: "",
        email: "",
        role: "",
        department: "",
      });
      navigate("/");
    } catch (err) {
      console.log("Something went wrong in creating employee");
      console.log(err);
    }
  };
  return (
    <Container>
      <div className="flex justify-between">
        <div className="py-10 w-[30%]">
          <form
            onSubmit={handleSubmit}
            action="#"
            className="flex flex-col bg-transparent justify-start items-start gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name..."
              className="w-[300px] py-1 px-2 bg-transparent text-white outline-none border"
              required
              value={data.name}
              onChange={(e) => {
                setData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number..."
              className="w-[300px] py-1 px-2 bg-transparent text-white outline-none border"
              required
              value={data.phoneNumber}
              onChange={(e) => {
                setData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              className="w-[300px] py-1 px-2 bg-transparent text-white outline-none border"
              required
              value={data.email}
              onChange={(e) => {
                setData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
            />
            <input
              type="text"
              name="role"
              placeholder="Role..."
              className="w-[300px] py-1 px-2 bg-transparent text-white outline-none border"
              required
              value={data.role}
              onChange={(e) => {
                setData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
            />
            <input
              type="text"
              name="department"
              placeholder="Department..."
              className="w-[300px] py-1 px-2 bg-transparent text-white outline-none border"
              required
              value={data.department}
              onChange={(e) => {
                setData((prevData) => {
                  return { ...prevData, [e.target.name]: e.target.value };
                });
              }}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Employee
            </button>
          </form>
        </div>
        <div className="w-[70%] text-center">
          <img
            src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png"
            className="mx-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default EmployeeForm;

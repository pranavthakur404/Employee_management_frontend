import React from "react";
import Container from "../components/Container";
import EmployeeTable from "../components/EmployeeTable";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <main className="py-5">
      <Container>
        {/* title */}
        <div className="w-full">
          <Link to="/add-form">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add New Employee
            </button>
          </Link>
        </div>

        {/* employee list */}
        <div className="w-full py-3">
          <section className="w-full flex justify-between text-white">
            <EmployeeTable></EmployeeTable>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Home;

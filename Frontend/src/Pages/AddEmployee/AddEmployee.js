import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddEmployee.css"; 

const AddEmployee = () => {
  const [userData, setUserData] = useState({
    employee_first_name: "",
    employee_last_name: "",
    employee_email: "",
    employee_password: "",
  });
    const navigate = useNavigate();
  console.log(userData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/add-employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
alert("User registered successfully! ");
navigate("/")
      } else {
alert("email address is already associated! ");
        console.error("Failed to register user.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="user-form-container">
      <h2>Add Employee</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee First Name:</label>
          <input
            type="text"
            name="employee_first_name"
            value={userData.employee_first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Last Name:</label>
          <input
            type="text"
            name="employee_last_name"
            value={userData.employee_last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Email:</label>
          <input
            type="email"
            name="employee_email"
            value={userData.employee_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="employee_password"
            value={userData.employee_password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );};

export default AddEmployee;

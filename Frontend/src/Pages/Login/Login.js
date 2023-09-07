// Import necessary dependencies
import React, { useState } from "react";
import axios from "axios";
import "./Login.css"
import { useNavigate} from "react-router-dom";

// Define the Login component
function Login() {
  const [formData, setFormData] = useState({
    employee_email: "",
    employee_password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        formData
      );
      if (response.status === 200) {
        // Redirect to a dashboard or home page upon successful login
       navigate('/Home')
      } else {
        // Handle login failure, show an error message to the user
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="employee_email">Email:</label>
        <input
          type="email"
          name="employee_email"
          id="employee_email"
          value={formData.employee_email}
          onChange={handleChange}
          required
        />
        <label htmlFor="employee_password">Password:</label>
        <input
          type="password"
          name="employee_password"
          id="employee_password"
          value={formData.employee_password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

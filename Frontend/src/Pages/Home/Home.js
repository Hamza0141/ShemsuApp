import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to shemsu Mrt</h2>
      <div className="button-container">
        <button
          className="button"
          onClick={(e) => handleNavigation(e, "/addemployee")}
        >
          Add Employee
        </button>
        <button
          className="button"
          onClick={(e) => handleNavigation(e, "/addinventory")}
        >
          Add Inventory
        </button>
        <button
          className="button"
          onClick={(e) => handleNavigation(e, "/InventoryList")}
        >
          Available Inventory
        </button>
        <button
          className="button"
          onClick={(e) => handleNavigation(e, "/Statement")}
        >
          Statement
        </button>
        <button
          className="button"
          onClick={(e) => handleNavigation(e, "/Receivable")}
        >
          Receivable
        </button>
        <button className="button" onClick={(e) => handleNavigation(e, "/")}>
          Return
        </button>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Login from "./Pages/Login/Login";
import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import AddInventory from "./Pages/AddInventory/AddInventory";
import InventoryList from "./Pages/Inventory/InventoryList";
import InventoryDetail from "./Pages/InventoryDetail/InventoryDetail";
import Sales from "./Pages/Sales/Sales";
import Statement from "./Pages/Statement/Statement";
import Receipt from "./Pages/Recipt/Receipt";
import Receivable from "./Pages/Receivables/Receivable";
import ReceivableDetaile from "./Pages/ReceivableDetaile/ReceivableDetaile";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/addinventory" element={<AddInventory />} />
          <Route path="/InventoryList" element={<InventoryList />} />
          <Route path="/single-inventory/:id" element={<InventoryDetail />} />
          <Route path="/Sales/:id" element={<Sales />} />
          <Route path="/Statement" element={<Statement />} />
          <Route path="/Receivable" element={<Receivable />} />
          <Route path="/Receivable/:id" element={<ReceivableDetaile />} />
          <Route path="/Receipt" element={<Receipt />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

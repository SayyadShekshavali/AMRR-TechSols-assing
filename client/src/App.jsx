import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddItem from "./pages/Additems";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetails";
import Navigation from "./pages/Navbar";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additems" element={<AddItem />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

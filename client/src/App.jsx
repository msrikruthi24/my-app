import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Teach from "./pages/Teach";
import Learn from "./pages/Learn";
import Languages from "./pages/Languages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </Router>
  );
}
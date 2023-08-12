import "./scss/main.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./react_component/HomePage";
import AboutPage from "./react_component/AboutPage";
import NotFoundPage from "./react_component/NotFoundPage";
import HousingComponent from "./react_component/HousingComponent";

import data from "./data.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/housing/:id" element={<HousingComponent data={data} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

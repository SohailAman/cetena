import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import RoadMap from "../pages/Roadmap";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/faq" element={<Faq />} />
        <Route index path="/roadmap" element={<RoadMap />} />
      </Routes>
    </BrowserRouter>
  );
}

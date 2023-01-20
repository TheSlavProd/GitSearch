import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { FavoritePage } from "./Pages/FavoritePage";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;

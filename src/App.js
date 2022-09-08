import "./App.css";
import React from "react";
import NavbarComp from "./components/NavbarComp";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrategyContextProvider } from "./context/StrategyContext";

function App() {
  return (
    <BrowserRouter>
      <StrategyContextProvider>
        <NavbarComp />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="Community" element={<CommunityPage />} />
          <Route />
        </Routes>
        <Footer />
      </StrategyContextProvider>
    </BrowserRouter>
  );
}

export default App;

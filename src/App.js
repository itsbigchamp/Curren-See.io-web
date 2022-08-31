import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='Profile' element={<ProfilePage/>}/>
      <Route path='Community' element={<CommunityPage/>}/>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FundingPage from "./pages/FundingPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

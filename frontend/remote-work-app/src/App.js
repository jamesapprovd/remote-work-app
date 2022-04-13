import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import WhiteFlags from "./pages/WhiteFlags";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-white-flags" element={<WhiteFlags />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import WhiteFlags from "./pages/WhiteFlags";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-white-flags" element={<WhiteFlags />} />
      </Routes>
    </>
  );
}

export default App;

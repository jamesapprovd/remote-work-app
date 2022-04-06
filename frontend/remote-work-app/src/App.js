import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProfilePage from "./pages/ProfilePage";
import WhiteFlags from "./pages/WhiteFlags";
import WorkJournal from "./pages/WorkJournal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/my-journal" element={<WorkJournal />} />
        <Route path="/my-white-flags" element={<WhiteFlags />} />
      </Routes>
    </>
  );
}

export default App;

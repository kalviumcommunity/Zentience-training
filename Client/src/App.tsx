import React from "react";

import { Route, Routes } from "react-router-dom";
import Dasboard from "./component/Dashboard/Dasboard";

import SimpleSidebar from "./component/SideBar/LeftBar";
import LandingPage from "./component/LandingPage/LandingPage";
import AssignTasks from "./component/AssignTasks/AssignTasks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Dasboard />} />
        <Route path="/assigntasks" element={<AssignTasks />} />
      </Routes>
    </div>
  );
}

export default App;

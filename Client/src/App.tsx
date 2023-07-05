
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';
import ManageStudent from './component/Managestudent/ManageStudent';
import LandingPage from "./component/LandingPage/LandingPage";
import AssignTasks from "./component/AssignTasks/AssignTasks";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Dasboard />} />
        <Route path="/managestudents" element={<ManageStudent />} />
        <Route path="/assigntasks" element={<AssignTasks />} />
        <Route path="/announcements" element={<PostingAnnouncements />} />
        <Route path="/attendance" element={<AssignTasks />} />
      </Routes>
    </div>
  );
}

export default App;

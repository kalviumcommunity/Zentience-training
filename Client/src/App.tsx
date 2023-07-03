import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';

import SimpleSidebar from './component/SideBar/LeftBar';
import LandingPage from './component/LandingPage/LandingPage';
import AssignTasks from './component/AssignTasks/AssignTasks';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';



function App() {
  return (
    <div>
      <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dasboard />} />
          <Route path="/assigntasks" element={<AssignTasks />} />
          <Route path="/announcements" element={<PostingAnnouncements />} />

      </Routes>
    </div>
  );
}


export default App;

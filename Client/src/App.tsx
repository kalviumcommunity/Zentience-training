import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';
import SimpleSidebar from './component/SideBar/LeftBar';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';
import LandingPage from './component/LandingPage/LandingPage';



function App() {
  return (
    <div>
      <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/announcements" element={<PostingAnnouncements />} />
          <Route element={<></>} />

      </Routes>
    </div>
  );
}


export default App;

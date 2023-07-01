import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ManageStudent from './component/Managestudent/ManageStudent';
import LandingPage from './component/LandingPage/LandingPage';
import Dasboard from './component/Dashboard/Dasboard';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';


function App() {
  return (
    <div>
      {/* <ManageStudent/> */}
      <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dasboard />} />


          <Route path="/announcements" element={<PostingAnnouncements />} />
          <Route path="/managestudent" element={<ManageStudent/>} />

      </Routes>
    </div>
  );
}


export default App;

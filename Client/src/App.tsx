import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ManageStudent from './component/Managestudent/ManageStudent';
import LandingPage from './component/LandingPage/LandingPage';

import Dasboard from './component/Dashboard/Dasboard';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';
import AssignTasks from './component/AssignTasks/AssignTasks';


function App() {
  return (
    <div>
    
      <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dasboard />} />



          <Route path="/announcements" element={<PostingAnnouncements />} />
          <Route path="/managestudent" element={<ManageStudent/>} />

          <Route path="/assigntasks" element={<AssignTasks />} />


      </Routes>
    </div>
  );
}


export default App;

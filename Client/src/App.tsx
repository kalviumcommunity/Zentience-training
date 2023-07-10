
import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';

import SimpleSidebar from './component/SideBar/LeftBar';
import LandingPage from './component/LandingPage/LandingPage';
import AssignTasks from './component/AssignTasks/AssignTasks';
import TeachersAnnouncements from './component/Announcements/TeachersAnnouncement';
import StudentsAnnouncements from './component/Announcements/StudentsAnnouncements';

import useUserStore from './store'


function App() {
  const isTeacher = useUserStore((state) => state.isTeacher);

  if(isTeacher) {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dasboard />} />
          <Route path="/managestudents" element={<AssignTasks />} />
          <Route path="/assigntasks" element={<AssignTasks />} />
          <Route path="/teachersannouncements" element={<TeachersAnnouncements />} />
          <Route path="/studentannouncements" element={<StudentsAnnouncements />} />
      </Routes>
    )
  }
  else {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/studentlogin" element={<StudentLogin />} /> */}
          {/* <Route path="/teacherlogin" element={<TeacherLogin />} /> */}

          <Route path="/home" element={<Dasboard />} />
          {/* <Route path="/assignments" element={<Assignments/>} /> */}
          {/* <Route path="/announcements" element={<TeachersAnnouncements isTeacher={isTeacher} />} /> */}
          </Routes>
    )
}
}

export default App;

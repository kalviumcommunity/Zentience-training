
import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';

import SimpleSidebar from './component/SideBar/LeftBar';
import LandingPage from './component/LandingPage/LandingPage';
import AssignTasks from './component/AssignTasks/AssignTasks';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';
import ManageStudent from './component/Managestudent/ManageStudent';
import StudentLogin from './component/StudentLogin/StudentLogin';

import useUserStore from './store'


function App() {
  const isTeacher = useUserStore((state) => state.isTeacher);

  if(isTeacher) {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          {/* <Route path="/teacherlogin" element={<TeacherLogin />} /> */}

          <Route path="/home" element={<Dasboard />} />
          <Route path="/managestudents" element={<ManageStudent />} />
          <Route path="/assigntasks" element={<AssignTasks />} />
          <Route path="/announcements" element={<PostingAnnouncements isTeacher={isTeacher} />} />
          <Route path="/attendance" element={<AssignTasks />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          {/* <Route path="/teacherlogin" element={<TeacherLogin />} /> */}

          <Route path="/home" element={<Dasboard />} />
          <Route path="/announcements" element={<PostingAnnouncements isTeacher={isTeacher} />} />
          <Route path="/attendance" element={<AssignTasks />} />
      </Routes>
    )
  }
}

export default App;

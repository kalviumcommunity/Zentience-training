import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';

import SimpleSidebar from './component/SideBar/LeftBar';
import LandingPage from './component/LandingPage/LandingPage';
import AssignTasks from './component/AssignTasks/AssignTasks';
import PostingAnnouncements from './component/Announcements/PostingAnnouncements';
import ManageStudent from './component/Managestudent/ManageStudent';
import StudentLogin from './component/StudentLogin/StudentLogin';
import TeacherLogin from './component/TeacherLogin/TeacherLogin';



function App() {
  const [isTeacher, setIsTeacher] = useState(true);

  if(isTeacher) {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />

          <Route path="/home" element={<Dasboard />} />
          <Route path="/managestudents" element={<ManageStudent />} />
          <Route path="/assigntasks" element={<AssignTasks />} />
          <Route path="/announcements" element={<PostingAnnouncements />} />
          <Route path="/attendance" element={<AssignTasks />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />

      </Routes>
    )
  }
}


export default App;

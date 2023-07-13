import { Route, Routes } from "react-router-dom";
import Dasboard from "./component/Teacher/Dashboard/Dasboard";
import LandingPage from "./component/LandingPage/LandingPage";
import AssignTasks from "./component/Teacher/AssignTasks/AssignTasks";
import TeachersAnnouncements from "./component/Teacher/Announcements/TeachersAnnouncement";
import StudentsAnnouncements from "./component/Student/StudentAnnouncement/StudentsAnnouncements";
import useUserStore from "./store";
import StudentDasboard from "./component/Student/StudentDasboard/StudentDashboard";
import StudentLogin from "./component/Student/StudentLogin/StudentLogin";
import Assignments from "./component/Student/Assignments/Assignments";
import ManageStudent from "./component/Teacher/Managestudent/ManageStudent";

function App() {
  const isTeacher = useUserStore((state) => state.isTeacher);
  console.log(isTeacher);
  

  if (isTeacher) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Dasboard />} />
        <Route path="/managestudents" element={<ManageStudent />} />
        <Route path="/assigntasks" element={<AssignTasks />} />
        <Route path="/teachersannouncements" element={<TeachersAnnouncements />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/Studenthome" element={<StudentDasboard />} />
        <Route path="/assignments" element={<Assignments/>} />
        <Route path="/studentannouncements" element={<StudentsAnnouncements />} />
      </Routes>
    );
  }
}

export default App;

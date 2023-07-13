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
import { Auth0ProviderWithNavigate } from "./auth-provider";
import { AuthenticationGuard } from "./authentication-guard";
import { ErrorPage } from "./component/404Error/ErrorPage";

function App() {
  const isTeacher = useUserStore((state) => state.isTeacher);
  console.log(isTeacher);
  

  if (isTeacher) {
    return (
      <Auth0ProviderWithNavigate>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<AuthenticationGuard component={Dasboard} />} />
        <Route path="/managestudents" element={<AuthenticationGuard component={ManageStudent} />} />
        <Route path="/assigntasks" element={<AuthenticationGuard component={AssignTasks} />} />
        <Route path="/teachersannouncements" element={<AuthenticationGuard component={TeachersAnnouncements}/>}/>
        <Route path="*" element={<ErrorPage/>}
        />
      </Routes>
      </Auth0ProviderWithNavigate>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/home" element={<StudentDasboard />} />
        <Route path="/assignments" element={<Assignments/>} />
        <Route path="/studentannouncements" element={<StudentsAnnouncements />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    );
  }
}

export default App;

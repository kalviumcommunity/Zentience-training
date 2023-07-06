import { Route, Routes } from "react-router-dom";
import Dasboard from "./component/Dashboard/Dasboard";
import LandingPage from "./component/LandingPage/LandingPage";
import AssignTasks from "./component/AssignTasks/AssignTasks";
import PostingAnnouncements from "./component/Announcements/PostingAnnouncements";
import ManageStudent from "./component/Managestudent/ManageStudent";
import StudentLogin from "./component/StudentLogin/StudentLogin";
import useUserStore from "./store";
import { AuthenticationGuard } from "./authentication-guard";

function App() {
  const isTeacher = useUserStore((state) => state.isTeacher);

  if (isTeacher) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route
          path="/home"
          element={<AuthenticationGuard component={Dasboard} />}
        />
        <Route
          path="/managestudents"
          element={<AuthenticationGuard component={ManageStudent} />}
        />
        <Route
          path="/assigntasks"
          element={<AuthenticationGuard component={AssignTasks} />}
        />
        <Route
          path="/announcements"
          element={
            <AuthenticationGuard
              component={() => <PostingAnnouncements isTeacher={isTeacher} />}
            />
          }
        />
        <Route
          path="/attendance"
          element={<AuthenticationGuard component={AssignTasks} />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/home" element={<Dasboard />} />
        <Route
          path="/announcements"
          element={<PostingAnnouncements isTeacher={isTeacher} />}
        />
        <Route path="/attendance" element={<AssignTasks />} />
      </Routes>
    );
  }
}

export default App;

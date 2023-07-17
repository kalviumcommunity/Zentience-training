import React from "react";
import "./LandingPage.css"; // Import the CSS file for styling
import { LoginButton } from "../Teacher/TeacherLogin/TeacherLogin";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store";
import { useEffect } from "react";
const LandingPage = () => {
  const navigate = useNavigate();
// useEffect(() => {
//   // Reload the page
//   window.location.reload();
// }, [ ]);
  const { isTeacher, setIsTeacher } = useUserStore();

const handleClick = () => {
  setIsTeacher(!isTeacher); 
  navigate("/studentlogin"); 
};

  return (
    <div className="landing-page">
      <div className="logo">
        <img src="./assets/ipsum.png"></img>EduTrack
      </div>
      <div className="body">
        <div className="content">
          <h2 className="heading">Efficiently manage </h2>
          <h1>
            Assignments,
            <br /> Announcements, and <br /> Attendance
          </h1>
          <p>Simplify Student Management with our Powerful System</p>
          <div className="buttons">
            <LoginButton />
            <button
              className="login-button"
              onClick={handleClick}
            >
              For Students
              <div>
                <img
                  src="./assets/triangle.svg"
                  alt="Image"
                  className="triangle1"
                ></img>
                <img
                  src="./assets/triangle.svg"
                  alt="Image"
                  className="triangle2"
                ></img>
                <img
                  src="./assets/triangle.svg"
                  alt="Image"
                  className="triangle3"
                ></img>
              </div>
            </button>
          </div>
        </div>
        <div className="image-conttainer">
          <img src="./assets/image.png" alt="Image" className="image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

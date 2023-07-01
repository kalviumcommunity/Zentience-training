import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling
import {useAuth0} from '@auth0/auth0-react'

const LandingPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="landing-page">
      <div className="logo">
        <img src="./assets/ipsum.png"></img>Logo ipsum
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
            <button
              onClick={() => loginWithRedirect()}
              className="login-button"
            >
              For Teachers
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
            <button className="login-button">
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

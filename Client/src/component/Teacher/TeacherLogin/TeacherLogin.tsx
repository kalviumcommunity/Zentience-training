import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import useUserStore from "../../../store";

export const LoginButton: React.FC = () => {
  const { setIsTeacher } = useUserStore();

  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    window.location.reload()
    setIsTeacher(true);
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button onClick={handleLogin} className="login-button">
      For Teachers
      <div style={{display:'flex'}}>
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
  );
};

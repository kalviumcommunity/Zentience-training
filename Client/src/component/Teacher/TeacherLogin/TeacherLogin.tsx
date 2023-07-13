import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect, user } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  if (user && user.name) {
    sessionStorage.clear();
    console.log("Username:", user.name);
    sessionStorage.setItem("username", user.name);
  }

  return (
    <button onClick={handleLogin} className="login-button">
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
  );
};

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Flex } from "@chakra-ui/react";
export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const buttonStyles = {
    w: "160px",
    height: "40px",
    borderRadius: "5px",
    m: "4px 0",
    p: "0 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    _hover: {
      bg: "#F1F6F9",
    },
  };

  return (
    <Flex
      sx={buttonStyles}
      bg="rgba(255, 0, 0, 0.1)"
      textColor="rgba(255, 0, 0, 0.6)"
      align="center"
      onClick={handleLogout}
    >
      Log Out
    </Flex>
  );
};

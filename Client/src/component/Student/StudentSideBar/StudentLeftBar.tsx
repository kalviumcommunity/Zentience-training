import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function StudentLeftBar() {
  const sidebarStyles = {
    h: "calc(100vh)",
    w: "200px",
    borderRight: "2px",
    borderColor: "gray.100",
    p: "30px 0",
    position: "fixed",
    top: "0",
    left: "0",
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

  const activeButtonStyles = {
    w: "160px",
    height: "40px",
    borderRadius: "5px",
    m: "4px 0",
    p: "0 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    bg: "#14274E",
    textColor: "white",
  };

  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <Flex
      sx={sidebarStyles}
      align="center"
      justifyContent="space-between"
      direction="column"
    >
      <Box>
        <Heading size="lg">Edutrack</Heading>
        <Box mt="40px">
          <Flex sx={path === "/home" ? activeButtonStyles : buttonStyles}align="center"onClick={() => navigate("/home")}>Dashboar</Flex>
          <Flex sx={path === "/assignments" ? activeButtonStyles : buttonStyles}align="center"onClick={() => navigate("/assignments")}>Assignment</Flex>
          <Flex sx={path === "/studentannouncements" ? activeButtonStyles : buttonStyles}align="center"onClick={() => navigate("/studentannouncements")}>Announcements</Flex>
        </Box>
      </Box>
      <Box>
        <Flex sx={buttonStyles} align="center">Notifications</Flex>
        <Flex sx={buttonStyles} align="center">About</Flex>
      </Box>
    </Flex>
  );
}

export default StudentLeftBar;

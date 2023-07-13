import { Box, Flex, Heading } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../TeacherLogin/TeacherLogout";

function RightBar() {
 
  const sidebarStyles = {
    h: "calc(100vh)",
    w: "200px",
    borderLeft: "2px",
    borderColor: "gray.100",
    p: "30px 0",
    position: "fixed",
    top: "0",
    right: "0",
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

  const userProfile = {
    w: "100px",
    height: "100px",
    borderRadius: "50%",
    bg: "#000000",
    backgroundImage: "url('./assets/user1.png')",
    backgroundSize: "cover",
  };

  const editProfileButton = {
    w: "160px",
    height: "40px",
    borderRadius: "5px",
    border: "2px",
    borderColor: "rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    fontWeight: "600",
    textColor: "rgba(0, 0, 0, 0.7)",
    p: "0 20px",
    _hover: {
      borderColor: "rgba(0, 0, 0, 0.2)",
      textColor: "rgba(0, 0, 0, 0.8)",
      cursor: "pointer",
    },
  };
   const { user } = useAuth0();
   console.log(user?.name)

  return (
    <Flex
      sx={sidebarStyles}
      align="center"
      justifyContent="space-between"
      direction="column"
    >
      <Flex align="center" justifyContent="space-between" direction="column">
        <Box sx={userProfile}></Box>
        <Heading size="md" m="25px 0 30px">
          {user?.name}
        </Heading>
        <Flex sx={editProfileButton} align="center" justifyContent="center">
          {" "}
          Edit Profile
        </Flex>
      </Flex>
      <Box>
        <Flex sx={buttonStyles} align="center">
          {" "}
          Settings
        </Flex>
        <LogoutButton />
      </Box>
    </Flex>
  );
}

export default RightBar;

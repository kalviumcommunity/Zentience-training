import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function RightBar() {
  const sidebarStyles = {
    h:"calc(100vh)",
    w:"200px",
    borderLeft:"2px",
    borderColor:"gray.100",
    p:"30px 0",
    position:"fixed",
    right: "0"
  }

  const buttonStyles = {
    w:"160px",
    height:"40px",
    borderRadius:"5px",
    m:"4px 0",
    p:"0 20px",
    fontSize:"14px",
    fontWeight:"600",
    cursor:"pointer",
    _hover:{
      bg:"#F1F6F9"
    }
  }

  const userProfile = {
    w:"100px",
    height:"100px",
    borderRadius:"50%",
    bg:"#000000"
  }

  const editProfileButton = {
    w:"160px",
    height:"40px",
    borderRadius:"5px",
    border: "2px",
    borderColor: "rgba(0, 0, 0, 0.1)",
    fontSize:"14px",
    fontWeight:"600",
    textColor: "rgba(0, 0, 0, 0.7)",
    p:"0 20px",
    _hover: {
      borderColor: "rgba(0, 0, 0, 0.2)",
      textColor: "rgba(0, 0, 0, 0.8)",
      cursor: "pointer"
    }
  }

  return (
    <Flex sx={sidebarStyles} align="center" justifyContent="space-between" direction="column">
      <Flex align="center" justifyContent="space-between" direction="column">
        <Box sx={userProfile}></Box>
        <Heading size="md" m="25px 0 30px">Ethan Brooks</Heading>
        <Flex sx={editProfileButton} align="center" justifyContent="center" > Edit Profile</Flex>
      </Flex>
      <Box>
        <Flex sx={buttonStyles} align="center"> Settings</Flex>
        <Flex sx={buttonStyles} bg="rgba(255, 0, 0, 0.1)" textColor="rgba(255, 0, 0, 0.6)" align="center"> Log out</Flex>
      </Box>
    </Flex>
  )
}

export default RightBar

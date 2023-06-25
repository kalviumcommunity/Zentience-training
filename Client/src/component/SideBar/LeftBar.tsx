import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function LeftBar() {
  const sidebarStyles = {
    h:"calc(100vh)",
    w:"200px",
    borderRight:"2px",
    borderColor:"gray.100",
    p:"30px 0",
    position:"fixed"
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

  return (
    <Flex sx={sidebarStyles} align="center" justifyContent="space-between" direction="column">
      <Box>
        <Heading size="lg">Edutrack</Heading>
        <Box mt="40px">
          <Flex sx={buttonStyles} align="center" bg="#14274E" textColor="white"> Dashboard</Flex>
          <Flex sx={buttonStyles} align="center"> Manage Students</Flex>
          <Flex sx={buttonStyles} align="center"> Assign Tasks</Flex>
          <Flex sx={buttonStyles} align="center"> Announcements</Flex>
          <Flex sx={buttonStyles} align="center"> Attendance</Flex>
        </Box>
      </Box>
      <Box>
        <Flex sx={buttonStyles} align="center"> Notifications</Flex>
        <Flex sx={buttonStyles} align="center"> About</Flex>
      </Box>
    </Flex>
  )
}

export default LeftBar

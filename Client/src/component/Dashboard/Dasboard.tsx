import React from 'react'
import RightBar from '../SideBar/RightBar'
import SimpleSidebar from '../SideBar/LeftBar'
import { Container, Heading, Text } from '@chakra-ui/react'
import LeftBar from '../SideBar/LeftBar'

function Dasboard() {
  return (
    <div className='dashboard'>
      <LeftBar />
      <Container ml="220px">
        <Heading>Dashboard</Heading>
      </Container>
    </div>
  )
}

export default Dasboard
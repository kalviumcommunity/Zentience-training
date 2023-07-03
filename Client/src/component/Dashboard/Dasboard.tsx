import React from 'react'
import RightBar from '../SideBar/RightBar'
import SimpleSidebar from '../SideBar/LeftBar'
import { Box, Container, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import LeftBar from '../SideBar/LeftBar'

type DashboardProps = {
  isTeacher: boolean
}

function Dasboard(props: DashboardProps) {
  return (
    <div className='dashboard'>
      <LeftBar isTeacher={props.isTeacher} />
      <RightBar />
      <Container m="0 220px">
        <Heading mt="50px">Dashboard</Heading>
        <SimpleGrid columns={4} spacing="20px" width="100%" mt="20px">
          <GridItem bg="gray.300" h="250px" colSpan={4} borderRadius="15px"></GridItem>
          <GridItem bg="gray.300" h="520px" rowSpan={2} colSpan={2} borderRadius="15px"></GridItem>
          <GridItem bg="gray.300" h="250px" colSpan={2} borderRadius="15px"></GridItem>
          <GridItem bg="gray.300" h="250px" colSpan={2} borderRadius="15px"></GridItem>
        </SimpleGrid>
      </Container>
          </div>
  )
}

export default Dasboard
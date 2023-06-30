import React from 'react'
import LeftBar from '../SideBar/LeftBar'
import RightBar from '../SideBar/RightBar'
import { Box, Container, Flex, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import TaskCard from './TaskCard'

function AssignTasks() {
    const addButtonStyles = {
        height: "60px",
        width: "60px",
        position: "fixed",
        right: "240px",
        bottom: "30px",
        justifyContent: "center",
        align: "center",
        borderRadius: "50%",
        fontSize:"30px",
        fontWeight:"600",
        bg: "#14274E",
        textColor: "white",
        cursor: "pointer"
    }

  return (
    <div className='assigntasks'>
      <LeftBar />
      <RightBar />
      <Container m="50px 0px 0 220px">
        <Heading size="md" m="0 0 20px">Active assignments</Heading>
            <Container>
                <Wrap>
                <TaskCard
                    isActive={true}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="Today"
                />

                <TaskCard
                    isActive={true}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="Today"
                />

                <TaskCard
                    isActive={true}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="Today"
                />

                <TaskCard
                    isActive={true}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="Today"
                />
                </Wrap>
            </Container>
        <Heading size="md" m="20px 0">Previous assignments</Heading>
            <Container>
                <TaskCard
                    isActive={false}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="10th June"
                />
                <TaskCard
                    isActive={false}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="10th June"
                />
                <TaskCard
                    isActive={false}
                    title="Lorem ipsum dolor sit amet"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    date="10th June"
                />
            </Container>
        <Flex sx={addButtonStyles}>
            <Text>+</Text>
        </Flex>
      </Container>
    </div>
  )
}

export default AssignTasks

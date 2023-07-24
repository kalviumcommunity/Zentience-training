import React, { useEffect, useState } from "react";
import LeftBar from "../SideBar/LeftBar";
import RightBar from "../SideBar/RightBar";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import TaskCard from "./TaskCard";

function AssignTasks() {
  const link= process.env.REACT_APP_SERVER_LINK;
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    try {
      const response = await fetch(`${link}/assignmentsData`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to retrieve student data');
      }
  
      const data = await response.json();
      // console.log(data);s
      return data;
    } catch (error) {
      console.error('Error retrieving students:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAssignments();
      setAssignments(data);
    };
    fetchData();
  }, []);

  

  const addButtonStyles = {
    height: "60px",
    width: "60px",
    position: "fixed",
    right: "330px",
    bottom: "30px",
    justifyContent: "center",
    align: "center",
    borderRadius: "50%",
    fontSize: "30px",
    fontWeight: "600",
    bg: "#14274E",
    textColor: "white",
    cursor: "pointer",
  };

  return (
    <div className="assigntasks">
      <LeftBar />
      <RightBar />
      <Container m="50px 0px 0 220px">
        <Heading size="md" m="0 0 20px">
          Active assignments
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)">
          {
            assignments && assignments.map((assignment: any) => {
              return <TaskCard
                isActive={true}
                title={assignment.title}
                desc={assignment.description}
                date="Today"
                actionText="View Submissions"
              />
            })
          }
        </Grid>
        <Heading size="md" m="20px 0">
          Previous assignments
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)">
          <TaskCard
            isActive={false}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="10th June"
            actionText="View Submissions"
          />
          <TaskCard
            isActive={false}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="10th June"
            actionText="View Submissions"
          />
          <TaskCard
            isActive={false}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="10th June"
            actionText="View Submissions"
          />
        </Grid>
        <Flex sx={addButtonStyles}>
          <Text pt={"5px"}>+</Text>
        </Flex>
      </Container>
    </div>
  );
}

export default AssignTasks;

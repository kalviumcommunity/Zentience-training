import React, { useEffect, useState } from "react";
import StudentLeftBar from "../StudentSideBar/StudentLeftBar";
import StudentRightBar from "../StudentSideBar/StudentRightBar";
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
import TaskCard from "../../Teacher/AssignTasks/TaskCard";

function Assignments() {
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

  return (
    <div className="assigntasks">
      <StudentLeftBar />
      <StudentRightBar />
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
            actionText="View"
          />
          <TaskCard
            isActive={false}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="10th June"
            actionText="View"
          />
          <TaskCard
            isActive={false}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="10th June"
            actionText="View"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Assignments;

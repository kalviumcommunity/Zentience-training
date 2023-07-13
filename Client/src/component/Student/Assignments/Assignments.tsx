import React from "react";
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
  return (
    <div className="assigntasks">
      <StudentLeftBar />
      <StudentRightBar />
      <Container m="50px 0px 0 220px">
        <Heading size="md" m="0 0 20px">
          Active assignments
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)">
          <TaskCard
            isActive={true}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="Today"
            actionText="View"
          />

          <TaskCard
            isActive={true}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="Today"
            actionText="View"
          />

          <TaskCard
            isActive={true}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="Today"
            actionText="View"
          />

          <TaskCard
            isActive={true}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            date="Today"
            actionText="View"
          />
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

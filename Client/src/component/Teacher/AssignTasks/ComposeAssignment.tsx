import React from 'react'
import RightBar from '../SideBar/RightBar'
import { Button, Container, Flex, Heading, Input, Select, Textarea } from '@chakra-ui/react'
import LeftBar from '../SideBar/LeftBar'
import useAssignmentStore from '../../Store/AssignmentStore';
import axios from 'axios';

function ComposeAssignment() {
    const { title, description, subject, fileFormat, setTitle, setDescription, setSubject, setFileFormat, resetForm } = useAssignmentStore();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
    };

    const handleFileFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileFormat(event.target.value);
    };

  const handlePost = () => {
    const assignmentData = { title, description, subject, fileFormat };

    axios
      .post(`${process.env.REACT_APP_SERVER_LINK}/assignments`, assignmentData)
      .then((response) => {
        console.log("Assignment posted successfully:", response.data);
        setTitle("");
        setDescription("");
        setSubject("");
        setFileFormat("");
      })
      .catch((error) => {
        console.error("Error posting assignment:", error);
      });
    resetForm();
  };

  return (
    <div className='composeassignments'>
      <LeftBar />
      <Container maxW="1190px" ml="170px">
        <Flex flexDirection="column" alignItems="flex-end">
          {/* <Select
            fontWeight="700"
            width="229px"
            placeholder="Select Class"
            marginTop="25px"
            alignSelf="flex-end"
          >
            <option value="option1">Class X-A</option>
            <option value="option2">Class X-B</option>
            <option value="option3">Class X-C</option>
          </Select> */}
          <div style={{ marginTop: "20px" }}>
            <Heading fontSize="25px" marginBottom="70px">
              Compose Assignment
            </Heading>
            <Input
              width="1074px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Textarea
              width="1074px"
              height="381px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              resize="none"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              width="1074px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              placeholder="Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>
          <div style={{ marginTop: "15px" }}>
            <Input
              width="1074px"
              fontWeight="600"
              color="rgba(0, 0, 0, 0.75)"
              placeholder="File Format"
              value={fileFormat}
              onChange={handleFileFormatChange}
            />
          </div>
          <Button
            marginTop="20px"
            backgroundColor="black"
            width="229px"
            fontSize="15"
            color="white"
            alignSelf="flex-end"
            onClick={handlePost}
          >
            POST
          </Button>
        </Flex>
      </Container>
      <RightBar />
    </div>
  )
}

export default ComposeAssignment

import React from 'react';
import { Container, Heading, Text, Select, Input, Textarea, Button, Flex } from '@chakra-ui/react';
import LeftBar from '../SideBar/LeftBar';

function PostingAnnouncements() {
  return (
    <div className='announcements'>
      <LeftBar />
      <Container maxW="1190px" ml="170px">
        <Flex flexDirection="column" alignItems="flex-end">
          <Select fontWeight='700' width='229px' placeholder='Select Class' marginTop ="25px" alignSelf="flex-end">
            <option value='option1'>Class X-A</option>
            <option value='option2'>Class X-B</option>
            <option value='option3'>Class X-C</option>
          </Select>
          <div style={{ marginTop: '20px' }}>
          <Heading fontSize='25px'  marginBottom='70px'>Compose Announcement</Heading>
            <Input width='1074px' fontWeight='600' color='rgba(0, 0, 0, 0.75)' placeholder='Title' />
          </div>
          <div style={{ marginTop: '15px' }}>
            <Textarea width='1074px' height='381px' fontWeight='600' color='rgba(0, 0, 0, 0.75)' resize='none' placeholder='Description' />
          </div>
          <Button marginTop='20px' backgroundColor='black' width='229px' fontSize='15' color='white' alignSelf="flex-end">POST</Button>
        </Flex>
      </Container>      
    </div>
  );
}

export default PostingAnnouncements;

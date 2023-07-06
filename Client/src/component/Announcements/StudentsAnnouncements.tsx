import React, { useEffect } from 'react';
import LeftBar from '../SideBar/LeftBar';
import RightBar from '../SideBar/RightBar';
import { Box, Container, Flex, Grid, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import AnnouncementCard from './AnnouncementCard';
import useAnnouncementStore from './AnnouncementStore';

function StudentsAnnouncements() {
  const announcements = useAnnouncementStore((state) => state.announcements);
  const fetchAnnouncements = useAnnouncementStore((state) => state.fetchAnnouncements);


  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const addButtonStyles = {
    height: "60px",
    width: "60px",
    position: "fixed",
    right: "240px",
    bottom: "30px",
    justifyContent: "center",
    align: "center",
    borderRadius: "50%",
    fontSize: "30px",
    fontWeight: "600",
    bg: "#14274E",
    textColor: "white",
    cursor: "pointer"
  }

  return (
    <div className='assigntasks'>
      <LeftBar />

      <Container m="50px 0px 0 220px">
        <Heading size="md" m="0 0 20px">Announcements</Heading>
        <Grid templateColumns='repeat(3, 1fr)'>
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              announcement={announcement.description}
            />
          ))}
        </Grid>
      </Container>
      <RightBar/>
    </div>
  )
}

export default StudentsAnnouncements;

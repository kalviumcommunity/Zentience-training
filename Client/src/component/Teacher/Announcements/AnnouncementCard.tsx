import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type AnnouncementCardProps = {
    title: string,
    announcement: string,
    isActive: boolean
}

function AnnouncementCard(props: AnnouncementCardProps) {
    const cardStyles = {
      p: "20px",
      borderRadius: "10px",
      m: "0 10px 10px 0",
      width: "350px"
    }

      return (
        <Box sx={cardStyles} bg="#F1F6F9">
            <Heading size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='bold'>{props.title}</Heading>
            <Text size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='medium' mt="10px">{props.announcement}</Text>
        </Box>
      )
    } 


export default AnnouncementCard;

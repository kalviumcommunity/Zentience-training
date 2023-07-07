import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type TaskCardProps = {
    isActive: boolean,
    title: string,
    desc: string,
    date: string,
    actionText: string
}

function TaskCard(props: TaskCardProps) {
    const cardStyles = {
      p: "20px",
      borderRadius: "10px",
      m: "0 10px 10px 0",
      width: "350px"
    }

    if(props.isActive) {
      return (
        <Box sx={cardStyles} bg="#F1F6F9">
            <Heading size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='bold'>{props.title}</Heading>
            <Text size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='medium' mt="10px">{props.desc}</Text>
            <Flex justifyContent="space-between" mt="20px">
                <Text size="small" textColor="#14274E" fontWeight='bold' cursor="pointer">{props.actionText}</Text>
                <Text size="small" textColor="rgba(0, 0, 0, 0.3)" fontWeight='bold'>Due {props.date}</Text>
            </Flex>
        </Box>
      )
    } else {
      return (
        <Box sx={cardStyles} bg="rgba(241, 246, 249, 0.2)">
            <Heading size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='bold'>{props.title}</Heading>
            <Text size="small" textColor="rgba(0, 0, 0, 0.6)" fontWeight='medium' mt="10px">{props.desc}</Text>
            <Flex justifyContent="space-between" mt="20px">
                <Text size="small" textColor="#14274E" fontWeight='bold' cursor="pointer">{props.actionText}</Text>
                <Text size="small" textColor="rgba(0, 0, 0, 0.3)" fontWeight='bold'>Due {props.date}</Text>
            </Flex>
        </Box>
      )
    }
}

export default TaskCard;

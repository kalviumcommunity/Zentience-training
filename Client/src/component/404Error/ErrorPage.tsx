import { Box,Text,Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
 export const ErrorPage: React.FC=()=>{
    const navigate = useNavigate();
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="blue.900"
        flexDirection="column"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold" mb={4}>
          404 - Page Not Found
        </Text>
        <Text fontSize="xl" color="white" mb={8}>
          The page you are looking for does not exist.
        </Text>
        <Button color="Blue.800" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    );
 }
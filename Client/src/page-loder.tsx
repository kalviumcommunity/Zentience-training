import React from "react";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export const PageLoader: React.FC = () => {
  return (
    <Box
      bg="blue.900"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress isIndeterminate color="blue.500" />
    </Box>
  );
};

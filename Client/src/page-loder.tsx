import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export const PageLoader: React.FC = () => {
  return (
    <div className="loader">
      <CircularProgress isIndeterminate color="blue.900" />
    </div>
  );
};

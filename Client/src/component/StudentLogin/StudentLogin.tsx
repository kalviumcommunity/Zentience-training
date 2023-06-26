import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

interface FormData {
  registrationId: string;
  password: string;
}

function StudentLogin() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ registrationId, password }) => {
    console.log(registrationId, password);
  });

  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box display="Flex" alignItems="center" mt={59} ml={20} className="logoo">
        <img src="./assets/ipsum.png"></img> <Heading fontSize={"2xl"} >Logo ipsum</Heading>
      </Box>

      <Stack alignItems="center" mt={20}>
        <Stack align={"center"}>
          <Heading color={"blue.900"} mb={4} fontSize={"2xl"}>
            Log in as a Student
          </Heading>
          <Text fontSize={15} color={"gray.600"} >
            Use the Registration id and Password
          </Text>
          <Text fontSize={15} color={"gray.600"}>
            provided by your teacher to log in.
          </Text>
        </Stack>

        <Box w="100vh" mt={69}>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>
                  <Input
                    {...register("registrationId")} // Update the ref assignment
                    name="registrationId"
                    placeholder="Registration Id"
                    type="text"
                  />
                </FormLabel>
              </FormControl>

              <FormControl>
                <FormLabel>
                  <Input
                    {...register("password")} // Update the ref assignment
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </FormLabel>
              </FormControl>
              <Button
                bg={"blue.900"}
                color={"white"}
                _hover={{
                  bg: "blue.700",
                }}
                type="submit"
              >
                Log In
              </Button>
            </Stack>
          </form>
        </Box>
        <Text mt={49}>You can change the password later.</Text>
      </Stack>
    </Flex>
  );
}

export default StudentLogin;

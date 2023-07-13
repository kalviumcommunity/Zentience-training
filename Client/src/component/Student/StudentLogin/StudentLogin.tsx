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
  Center,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import useAuthStore from "../../Store/AuthStore";

function StudentLogin() {
  const { username, password, error, setUsername, setPassword, setError } =
    useAuthStore();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setError("");
  };

  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username)) {
      setError("Username must contain only letters and numbers");
      return;
    }
    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit"
      );
      return;
    }

    const link = process.env.REACT_APP_SERVER_LINK;

    setError("");
    if(!error){
      console.log("no error")

      const studentData = {username,password};

      fetch(`${link}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      })
        .then(response => response.json())
        .then(data => {
            if(data.message === 'student login successfully'){
              console.log("match")
              navigate('/Studenthome')
            }else{
              console.log("not match")
            }
            
  
        })
        .catch(error => {
          console.error('Error while updating student data:', error);
        });
    }

 
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      direction="column"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box display="Flex" alignItems="center" mt={69} ml={120}>
        <img src="./assets/ipsum.png"></img>{" "}
        <Heading fontSize={"2xl"}>Edutrack</Heading>
      </Box>

      <Stack alignItems="center" mt={55}>
        <Stack align={"center"}>
          <Heading fontWeight={700} color={"blue.900"} mb={4} fontSize={"2xl"}>
            Log in as a Student
          </Heading>
          <Text fontSize={15} color={"gray.800"}>
            Use the Registration id and Password
          </Text>
          <Text fontSize={15} color={"gray.800"}>
            provided by your teacher to log in.
          </Text>
        </Stack>

        <Box w="55vh" mt={69}  >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    name="registrationId"
                    placeholder="Registration Id"
                  />
                </FormLabel>
              </FormControl>

              <FormControl>
                <FormLabel>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    placeholder="Password"
                  />
                </FormLabel>
              </FormControl>
              {error && <p>{error}</p>}
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
        <Text color={"gray.800"} mt={49}>
          You can change the password later.
        </Text>
      </Stack>
    </Flex>
  );
}

export default StudentLogin;

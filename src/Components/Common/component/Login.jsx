import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Login() {
  return (
    <>
      <Container maxW="1640px">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          h="80vh"
          w="100%"
        >
          <Flex marginBottom="50px" flexDirection="column" alignItems="center">
            <Text fontSize="42px" fontWeight="700">
              Log in
            </Text>
            <Text fontSize="22px" display={{sm:"none",md:"none",lg:"block"}}>Log in to continue for our B2B services</Text>
          </Flex>
          <Box w={{sm:"100%",md:"100%",lg:"682px"}} >
            <form>
              <FormControl marginBottom="20px">
                <Input placeholder="Email" padding="25px 10px" w={{sm:"100%",md:"100%",lg:"726px"}}/>
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  padding="25px 10px"
                  w={{sm:"100%",md:"100%",lg:"726px"}}
                />
              </FormControl>
              <Flex flexDirection="column" justifyContent="center" alignItems="center" rowGap="10px" marginTop="40px">
                <ChakraLink fontSize="17px" textDecoration="underline" as={Link} to="/b2b/passwordRecovery">Forgot password?</ChakraLink>
                <Text fontSize="17px">Don’t have an account? <ChakraLink textDecoration="underline" to="/b2b/signup" as={Link}>Sign up</ChakraLink></Text> 
                <Button w="100%" color="white" bg="#ca304d">Log in</Button>
              </Flex>  
            </form>
          </Box>
         
        </Flex>
      </Container>
    </>
  );
}

export default Login;

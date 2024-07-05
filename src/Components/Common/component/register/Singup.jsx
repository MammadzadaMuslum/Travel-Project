import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  Input,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Singup() {
  return (
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
            Sign Up
          </Text>
          <Text fontSize="22px" display={{sm:"none",md:"none",lg:"block"}}>
            Sign up to continue for our B2B services
          </Text>
        </Flex>
        <Box w={{sm:"100%",md:"100%",lg:"682px"}}>
          <form>
            <Flex wrap="wrap" gap="20px" marginBottom="20px" flexDirection={{sm:"column",md:"column",lg:"row"}}>
              <FormControl flex="1">
                <Input placeholder="Full name" padding="25px 10px" />
              </FormControl>
              <FormControl flex="1">
                <Input placeholder="Company" padding="25px 10px" />
              </FormControl>
            </Flex>
            <Flex wrap="wrap" gap="20px" marginBottom="20px" flexDirection={{sm:"column",md:"column",lg:"row"}}>
              <FormControl flex="1">
                <Input placeholder="Email" padding="25px 10px" />
              </FormControl>
              <FormControl flex="1">
                <Input
                  placeholder="Password"
                  type="password"
                  padding="25px 10px"
                />
              </FormControl>
            </Flex>
            <Flex wrap="wrap" gap="10px" marginBottom="20px" flexDirection={{sm:"column",md:"column",lg:"row"}}>
              <Flex gap="10px"  flex="2" >
                  <FormControl flex="1">
                <Input placeholder="Country code" padding="25px 10px" />
              </FormControl>
              <FormControl flex="1">
                <Input placeholder="Phone number" padding="25px 10px" />
              </FormControl>
              </Flex>
            
              <FormControl flex="2">
                <Input placeholder="Country" padding="25px 10px" />
              </FormControl>
            </Flex>
            <FormControl marginBottom="20px" textAlign="center">
              <Checkbox>
                Please accept{' '}
                <ChakraLink textDecoration="underline" as={Link} to="/terms">
                  Terms & conditions
                </ChakraLink>{' '}
                to continue
              </Checkbox>
            </FormControl>
            <Flex flexDirection="column" alignItems="center" rowGap="10px">
              <Text fontSize="17px">
                Already have an account?{' '}
                <ChakraLink textDecoration="underline" as={Link} to="/b2b">
                  Log In
                </ChakraLink>
              </Text>
              <Button w="100%" color="white" bg="#ca304d">
                Sign up
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Container>
  );
}

export default Singup;

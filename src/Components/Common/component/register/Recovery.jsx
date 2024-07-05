import React from 'react'
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
import { Link } from 'react-router-dom';

function Recovery() {
  return (
    <div>
        <Container maxW="1640px">
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="100px"
          w="100%"
        >
          <Flex marginBottom="50px" flexDirection="column" alignItems="center">
            <Text fontSize="42px" fontWeight="700">
            Password recovery
            </Text>
            <Text fontSize="22px" display={{sm:"none",md:"none",lg:"block"}}>A password recovery link will be sent to your email</Text>
          </Flex>
          <Box w={{sm:"100%",md:"100%",lg:"682px"}}>
            <form>
              <FormControl marginBottom="20px">
                <Input placeholder="Email" padding="25px 10px" w="100%" />
              </FormControl>
              <Flex  marginTop="40px">
                <Button w="100%" color="white" bg="#ca304d">Send</Button>
              </Flex>  
            </form>
          </Box>
         
        </Flex>
      </Container>
    </div>
  )
}

export default Recovery

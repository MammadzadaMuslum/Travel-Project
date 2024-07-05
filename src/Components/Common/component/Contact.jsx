import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import bannerImage from "../../../assets/img/banner.webp";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Global } from '@emotion/react';

function Contact() {
  const sectionBox = {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px",
    height: { lg: "30vh" },
    backgroundSize: { lg: "cover" }
  };

  return (
    <>
    <Global
    styles={`
  input[type="file"]::-webkit-file-upload-button {
    padding: 5px 10px;
    background-color: #E9E9E9;
    color:#0971E4;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
      `

    }
    />
      <Box as="main" sx={sectionBox} display={{sm:"none",md:"none",lg:"block"}}></Box>
      <Container maxW="1640px">
        <Box margin="20px 0" display={{sm:"none",md:"none",lg:"block"}} >
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/' textDecoration="none !important" fontSize="14px">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#' color='#b9b7b7' fontSize="14px">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box  h="60vh">
          <Box textAlign="center" mb={8}>
            <Box as="h1" fontSize="4xl" fontWeight="bold">Let's contact!</Box>
            <Box as="h2" fontSize="lg" color="gray.600">Lets Contact!</Box>
          </Box>
          <Flex justify="center">
            <Box  p={8} borderRadius="md"  maxW="680px" width="100%"  bg="#f8f9fb">
              <VStack spacing={4}>
                <Flex justify="space-between" width="100%">
                  <FormControl id="full-name" isRequired flex="1" mr={2}>
                    
                    <Input placeholder="Full name" />
                  </FormControl>
                  <FormControl id="email" isRequired flex="1" ml={2}>
                   
                    <Input type="email" placeholder="Email" />
                  </FormControl>
                </Flex>
                <Flex justify="space-between" width="100%">
                  <FormControl id="country-code" isRequired flex="1" mr={2}>
                  
                    <Input placeholder="Country code" />
                  </FormControl>
                  <FormControl id="phone-number" isRequired flex="1" ml={2}>
                    
                    <Input placeholder="Phone number" />
                  </FormControl>
                  <FormControl id="country" isRequired flex="1" ml={2}>
                   
                    <Input placeholder="Country" />
                  </FormControl>
                </Flex>
                <FormControl id="message" isRequired>
               
                  <Textarea placeholder="Your message" />
                </FormControl>
                
                <Input type='file'  border="none" />
                
                <Button color="white" bg="#ca304d" type="submit" width="100%">Submit</Button>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default Contact;

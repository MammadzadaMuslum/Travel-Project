import React from 'react';
import { Box, Flex, Text, Button, Icon, Divider } from '@chakra-ui/react';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaStar } from 'react-icons/fa';

const HotelOptions = () => {
  return (
    <Box p={5}  borderRadius="md"  m="20px 0">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Hotel options
      </Text>
      <Flex>
        <Box 
          borderWidth={1} 
          borderRadius="md" 
          p={4} 
          mr={4} 
          flex="1"
          borderColor="black"
          h="80px"
        >
            
          <Flex  align="center">
          <CheckCircleIcon color="red.500" mr="10px" />
          <Box>
          <Text color="red.500" fontWeight="bold" fontSize="16px">
              Econom class #1
            </Text>
            <Text  fontSize="14px" fontWeight="bold">
            Price $454
          </Text>
          </Box>
          <ChevronRightIcon fontSize="24px" ml="50px"/>
          </Flex>
          
        </Box>
        <Box flex="2">
          <Box p={4}borderWidth={1} >
            <Text fontSize="lg" fontWeight="bold">West Shine Hotel</Text>
            <Text>Baku, Azerbaijan Travel</Text>
            <Flex mt={2}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} as={FaStar} color="yellow.400" />
              ))}
            </Flex>
          </Box>
          <Divider />
          <Box p={4} borderWidth={1}  >
            <Text fontSize="lg" fontWeight="bold">Premium Park</Text>
            <Text>Baku, Azerbaijan Travel</Text>
            <Flex mt={2}>
              {[...Array(4)].map((_, i) => (
                <Icon key={i} as={FaStar} color="yellow.400" />
              ))}
              <Icon as={FaStar} color="gray.300" />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HotelOptions;

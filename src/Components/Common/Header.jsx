import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  List,
  ListItem,
  useColorModeValue,
  useDisclosure,
  DrawerFooter,
  VStack,
  HStack,
  Link as ChakraLink,
  Select,
} from "@chakra-ui/react";
import facebook from "../../assets/img/facebook.svg"
import youtube from "../../assets/img/youtube.svg"
import know from "../../assets/img/know.svg"
import logo from "../../assets/img/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import logo2 from "../../assets/img/logowhite.png";
import { BsTelephone } from "react-icons/bs";
import { ArrowBackIcon } from '@chakra-ui/icons';


function Header() {
  const [scroll, setScroll] = useState(false);
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location=useLocation()

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["full"];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const liStyle = {
    marginLeft: "1.875rem",
    fontSize: "17.5px",
    color: "#1a2b49",
    transition: "all 300ms",

    _hover: {
      color: "red",
    },
  };
  const handleLinkgClick=()=>{
    onClose()
  }

  return (
    <Flex
      as="header"
      bg={scroll ? "white" : { sm: "#B91649", md: "#B91649", lg: "white" }}
      position="sticky"
      top="0"
      left="0"
      zIndex="10"
      transition="background-color 300ms"
      boxShadow={location.pathname==="/b2b" || location.pathname==="/b2b/passwordRecovery" ||location.pathname==="/b2b/signup" ? "0 3px 5px 0 #0000000D":""}
    >
      <Container maxW="1640px">
        <Flex p="20px" justifyContent="space-between">
          {sizes.map((size) => (
            <Button
              onClick={() => handleClick(size)}
              key={size}
              m={4}
              bg="transparent"
              display={{ sm: "block", md: "block", lg: "none" }}
            >
              <HiOutlineBars3CenterLeft
                style={{
                  fontSize: "40px",
                  color: scroll ? "black" : "white",
                  transition: "color 300ms",
                }}
              />
            </Button>
          ))}

          <Box w="100px">
            <Link>
              <Image
                w="100%"
                src={logo}
                display={
                  scroll ? "block" : { sm: "none", md: "none", lg: "block" }
                }
              />
              <Image
                src={logo2}
                display={
                  scroll ? "none" : { sm: "block", md: "block", lg: "none" }
                }
              />
            </Link>
          </Box>
          {sizes.map(size => (
            <Button
              onClick={() => handleClick(size)}
              key={size}
              m={4}
              bg="transparent"
              display={{ sm: "block", md: "block", lg: "none" }}
            >
              <BsTelephone
                style={{
                  fontSize: "40px",
                  color: scroll ? "black" : "white",
                  transition: "color 300ms",
                }}
              />
            </Button>
          ))}

          <Box display={{ sm: "none", md: "none", lg: "block" }}>
            <List display="flex" alignItems="center">
              <ListItem sx={liStyle}>
                <ChakraLink as={Link}     textDecoration="none !important"  to="/">Home</ChakraLink>
              </ListItem>
              <ListItem sx={liStyle}>
                <ChakraLink as={Link} textDecoration="none !important" to="/contact">Contact</ChakraLink>
              </ListItem>
              <ListItem
                
              >
                <ChakraLink as={Link} color="white"
                bg="#ca304d"
                borderRadius=".25rem"
                p="10px 37px"
                marginLeft="1.875rem"
                transition="all 300ms"
                border="1px solid transparent"
                _hover={{
                  color: "#ca304d",
                  bg: "white",
                  border: "1px solid #ca304d",
                }} cursor="pointer" to="/b2b">B2B</ChakraLink>
              </ListItem>
              <ListItem
                display="flex"
                marginLeft="1.875rem"
                alignItems="center"
              >
                <TfiWorld style={{ fontSize: "25px" }} />{" "}
                <Select
                  variant="unstyled"
                  placeholder="English"
                  marginLeft="10px"
                >
                  <option>Azərbaycan</option>
                  <option>русский</option>
                  <option>العربية</option>
                </Select>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Container>
      <Drawer onClose={onClose} isOpen={isOpen} size={size} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="#b21842" padding="60px 20px">
            <Flex w="60%" justifyContent="space-between" alignItems="center">
              <ArrowBackIcon color="white" fontSize="28px" onClick={onClose} />
              <Image src={logo2} w="103px" />
            </Flex>
          </DrawerHeader>
          <DrawerBody >
            <VStack spacing={4} align="stretch" textAlign="center"  >
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/">Home</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/contact">Contacts</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/b2b">B2B packages</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/tour-packages">Tour packages</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/cancellation-policy">Cancellation policy</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/our-guests">Our guests</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} borderBottom="1px solid #d1d1d1" padding="10px 0" to="/about-us">About us</ChakraLink>
              <ChakraLink onClick={handleLinkgClick} as={Link} to="/travel-news">Travel news</ChakraLink>
            </VStack>
          </DrawerBody>
          <DrawerFooter  >
            <VStack w="100%" >
              <HStack>
                <TfiWorld />
                <Select variant="unstyled" placeholder="English" w="90px">
                  <option>Azərbaycan</option>
                  <option>русский</option>
                  <option>العربية</option>
                </Select>
              </HStack>
              <HStack spacing={4} padding="40px 0 20px 0">
                <ChakraLink href="https://facebook.com" isExternal>
                  <Image src={facebook} />
                </ChakraLink>
                <ChakraLink href="https://youtube.com" isExternal>
                 <Image src={youtube} />
                </ChakraLink>
                <ChakraLink href="https://instagram.com" isExternal>
                  <Image src={know} />
                </ChakraLink>
              </HStack>
              <Box textAlign="center" fontSize="sm">
                Alison Travel 2024. All Rights Reserved
              </Box>
              <Box textAlign="center" fontSize="sm">
                Developed by <ChakraLink color="#ca304d" href="https://trustme.digital" isExternal>Trustme Digital</ChakraLink>
              </Box>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Header;

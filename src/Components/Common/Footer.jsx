import { Box, Container, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import facebook from "../../assets/img/facebook.svg"
import youtube from "../../assets/img/youtube.svg"
import know from "../../assets/img/know.svg"
import mastercard from "../../assets/img/Vector (3).svg"
import visacard from "../../assets/img/Vector (4).svg"

function Footer() {
  const location=useLocation()
  const liFooter={
    display:"flex",
    fontSize:"17px",
    alignItems:"center",
    color:"#1a2b49",
    transition:"all 300ms",
    lineHeight:"1.875rem",
    _hover:{
      color:"#ca304d"
    }
  }
  const hFooter={
    fontSize:"22px",
    fontWeight:"500",
    marginBottom:" .625rem",
  }
  const hFooter2={
    fontSize:"22px",
    fontWeight:"500",
    marginBottom:" .625rem",
    display:{sm:"block",md:"block",lg:"none"}
  }
  return (
    <>
    <Container maxW='1640px' display={location.pathname==="/b2b" || location.pathname==="/b2b/passwordRecovery" ||location.pathname==="/b2b/signup" ||location.pathname==="/terms" ? "none" : "block"}>
       <Box as="footer" padding="20px 0" >
        <Flex gap={{sm:"20px",md:"20px",lg:"0"}} marginBottom="50px" justifyContent={{sm:"center",md:"center",lg:"space-between"}} alignItems={{sm:"center",md:"center",lg:"start"}} flexDirection={{sm:"column",md:"column",lg:"initial"}}>
          <Box w={{sm:"123px",lg:"230px"}} >
            <Image src={logo} w="100%" />
          </Box>
          <Flex flexDirection="column" alignItems="center">
              <Text sx={hFooter2}>Follow us</Text>
          <List   alignItems="center" gap="10px" display={{sm:"flex",md:"flex",lg:"none"}}  >
              <ListItem ><Link><Image  w="37px" src={facebook} /></Link></ListItem>
              <ListItem ><Link><Image  w="37px" src={youtube} /></Link></ListItem>
              <ListItem><Link><Image  w="37px" src={know} /></Link></ListItem>
            </List>
          </Flex>
          <Flex >
            <List marginLeft="50px" display={{sm:"none",md:"none",lg:"block"}} >
              <Text sx={hFooter}>Useful Links</Text>
              <ListItem sx={liFooter}>
                <Link>Homepage</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>Contacts</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>B2B packages</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>Cancellation policy</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>Tour packages</Link>
              </ListItem>
            </List>
            <List  marginLeft="50px" display={{sm:"none",md:"none",lg:"block"}} >
            <Text sx={hFooter}>Information</Text>
              <ListItem sx={liFooter}>
                <Link >About us</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>Our guests</Link>
              </ListItem>
              <ListItem sx={liFooter}>
                <Link>Travel news</Link>
              </ListItem>
            </List>
            <List marginLeft={{sm:"0",md:"0",lg:"50px"}}  display={{sm:"flex",md:"flex",lg:"block"}} flexDirection="column" alignItems="center"  >
              <Text sx={hFooter}>Contact us</Text>
              <ListItem sx={liFooter} >
              <FaWhatsapp />
                <Link style={{marginLeft:"10px"}} > +994 70 404 94 99</Link>
              </ListItem>
              <ListItem sx={liFooter}>
              <FaWhatsapp />
                <Link style={{marginLeft:"10px"}} >+994 70 272 94 99</Link>
              </ListItem>
              <ListItem sx={liFooter}>
              <FaWhatsapp />
                <Link style={{marginLeft:"10px"}} >+994 50 494 94 99</Link>
              </ListItem>
              <ListItem sx={liFooter}>
              <FaWhatsapp />
                <Link style={{marginLeft:"10px"}} >+994 70 434 94 99</Link>
              </ListItem>
              <ListItem sx={liFooter}>
              <MdOutlineEmail />
                <Link style={{marginLeft:"10px"}} >booking@alisontravelgroup.com</Link>
              </ListItem>
            </List>
          </Flex>
          <List  flexDirection="column" alignItems="center" gap="10px" display={{sm:"none",md:"none",lg:"flex"}}  >
              <Text sx={hFooter}>Follow us</Text>
              <ListItem ><Link><Image  w="37px" src={facebook} /></Link></ListItem>
              <ListItem ><Link><Image  w="37px" src={youtube} /></Link></ListItem>
              <ListItem><Link><Image  w="37px" src={know} /></Link></ListItem>
            </List>
            <List flexDirection="column" alignItems="center" gap="10px" display={{sm:"none",md:"none",lg:"flex"}}  >
              <Text sx={hFooter}>Payment methods</Text>
              <ListItem><Image src={mastercard} /></ListItem>
              <ListItem><Image src={visacard} /></ListItem>
            </List>
        </Flex>
        <Text textAlign="center">
          Alison Travel 2024. All Rights Reserved | Developed by{" "}
          <Link style={{ color: "#ca304d" }}>Trustme Digital</Link>
        </Text>
      </Box>
    </Container>
     
    </>
  );
}

export default Footer;

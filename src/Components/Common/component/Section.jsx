import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  FormControl,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bannerImage from "../../../assets/img/banner.webp";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import foto1 from "../../../assets/img/1de3d4139721d0a92b8c.webp";
import azflag from "../../../assets/img/azflag.svg";
import cash from "../../../assets/img/cash.png";
import foto2 from "../../../assets/img/9a5a2124ace7c500f1fc.png";
import foto3 from "../../../assets/img/b827d570daa400ee1949.png";
import people from "../../../assets/img/people.png";
import Destination from "./section-components/Destination";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomPrevArrow = ({ onClick }) => {
  const display = useBreakpointValue({ base: "none",sm:"none", md: "none",lg:"flex"});
  return(
      <Button
    onClick={onClick}
    position="absolute"
    left="-30px"
    top="60%"
    transform="translateY(-50%)"
    zIndex="8"
    bg="white"
    border="2px solid #e5e5e5"
    borderRadius="50%"
    _hover={{ bg: "white" }}
    padding="25px 15px"
    display={display}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <IoIosArrowBack size="20px" color="#ca304d" />
  </Button>
  )

};

const CustomNextArrow = ({ onClick }) => {
  const display = useBreakpointValue({ base: "none",sm:"none", md: "none",lg:"flex"});
  return(
    <Button
    onClick={onClick}
    position="absolute"
    right="-30px"
    top="60%"
    transform="translateY(-50%)"
    zIndex="8"
    bg="white"
    border="2px solid #e5e5e5"
    borderRadius="50%"
    _hover={{ bg: "white" }}
    padding="25px 15px"
    display={display}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <IoIosArrowForward size="20px" color="#ca304d" />
  </Button>
  )

};

function Section() {
  const display = useBreakpointValue({ base: "none",sm:"none", md: "none",lg:"block" });
  const [tourData,setTourData]=useState([])
  useEffect( ()=>{
    const fetchTours= async()=>{
         const res=  await axios.get("http://localhost:3000/tours") 
   setTourData(res.data)
    }

  fetchTours()
   
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sectionBox = {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px",
    height:{
base:"80vh",
sm:"80vh",
lg:"60vh"
    },
    
    backgroundSize:{
      base:"cover",
      sm:"cover",
      lg:"contain"

    }
  };

  const h2 = {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: "2.75rem",
    letterSpacing: "-.05rem",
  };

  const p = {
    color: "hsl(223, 8%, 16%)",
    fontSize: "1.125rem",
    textAlign: "center",
    marginTop: ".3125rem",
  };

  const img = {
    borderRadius: ".25rem",
    transition: "all 300ms",
   w:"100%",
   h:"100%",
    _hover: {
      transform: "scale(1.1)",
    },
  };

  const cardfooter = {
    bg: "#f8f9fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".625rem",
  };

  return (
    <>
      <Global
        styles={`
          .slick-dots {
            display: none !important;
          }
          .slick-prev:before, .slick-next:before {
            display: none;
          }
        `}
      />
      <Box as="main" sx={sectionBox}>
        <Box marginTop="100px" opacity={{sm:"0.9",lg:"1"}}>
          <Text
            textAlign="center"
            fontSize="3rem"
            color="white"
            marginBottom="2.5rem"
            display={display}
          >
            The best travel and tour packages in Azerbaijan
          </Text>
          <FormControl display="flex" gap="30px" justifyContent="center" >
            <Flex
              bgColor="white"
              alignItems="center"
              gap="2.5rem"
              padding="2.5rem 3.5rem"
              borderRadius=".25rem"
              flexDirection={{sm:"column",lg:"initial"}}
              w={{sm:"100%",lg:"50%"}}
              
            >
              <Input placeholder="Location"   w={{sm:"100%",lg:"225px"}}/>
              <Input type="date" w={{sm:"100%",lg:"225px"}} />
              <InputGroup w={{sm:"100%",lg:"225px"}}>
                <Input placeholder="Guest" w={{sm:"100%",lg:"225px"}}/>
                <InputLeftElement>
                  <IoPersonCircleOutline style={{ color: "#ca304d" }} />
                </InputLeftElement>
              </InputGroup>
              <Button bg="#ca304d" display={display}>
                <CiSearch style={{ color: "white", fontSize: "24px" }} />
              </Button>
              <Button bg="#ca304d" color="white" w={{sm:"100%"}} display={{lg:"none"}}>
                Search
              </Button>
            </Flex>
          </FormControl>
        </Box>
      </Box>
      <Box as="section">
        <Container maxW="1640px">
          <Box>
            <Box textAlign="center" margin="50px 0">
              <Text sx={h2}>The most popular destinations</Text>
              <Text sx={p}>The most popular tour packages</Text>
            </Box>
            <Slider {...settings}>
              {tourData?.map((item,id)=>(
                <Box px={2} key={id}>
                  <Link to={`/country/${item.txt}`}>
                  <Card cursor="pointer" >
                  <Box overflow="hidden" h="345px">
                    <Image sx={img} src={item.img} />
                  </Box>
                  <CardFooter sx={cardfooter}>
                    <Image src={item.flag} w="37px" />
                    <Text color="#1a2b49">{item.txt} Travel</Text>
                  </CardFooter>
                </Card>
                  </Link>
             
              </Box>
              ))}
            </Slider>
          </Box>
        </Container>
        <Grid
          bg="#f8f9fb"
          p="40px 80px"
          justifyContent="space-between"
          margin="60px 0"
          h={{sm:"100%"}}
         gridTemplateColumns={{sm:"auto auto",lg:"auto auto auto auto"}}
        >
          <Flex alignItems="center" w="180px" gap="1.25rem">
            <Image src={cash} />
            <Text fontSize="20px" fontWeight="400">
              Best Price Guaranteed
            </Text>
          </Flex>
          <Flex alignItems="center" w="180px" gap="1.25rem">
            <Image src={foto2} />
            <Text fontSize="20px" fontWeight="400">
              Variety of Choices
            </Text>
          </Flex>
          <Flex alignItems="center" w="180px" gap="1.25rem">
            <Image src={foto3} />
            <Text fontSize="20px" fontWeight="400">
              Trust & Safety
            </Text>
          </Flex>
          <Flex alignItems="center" w="180px" gap="1.25rem">
            <Image src={people} />
            <Text fontSize="20px" fontWeight="400">
              24 Hours Service
            </Text>
          </Flex>
        </Grid>
        <Destination />
      </Box>
    </>
  );
}

export default Section;

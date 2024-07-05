import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,useBreakpointValue
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoSun } from "react-icons/go";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoCarOutline } from "react-icons/io5";
import { TbSailboat } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { LuPizza } from "react-icons/lu";
import { GiFlowerEmblem } from "react-icons/gi";
import Slider from "../Slider";
import  townBanner from "../../../../assets/img/townbanner.webp"
import { Link } from "react-router-dom";
import Carusels from "./Carusels";

function Destination() {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items");
        setData(response.data);
        if (response.data.length > 0) {
          setActiveButton(response.data[0].id);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (id) => {
    setActiveButton(id);
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
    marginTop: ".3125rem",
  };

  const btn = {
    bg: "transparent",
    border: "1px solid #1a2b49",
    borderRadius: ".25rem",
    padding: "0 1.875rem",
    color: "#1a2b49",
    fontSize: ".875rem",
    _hover: {
      bg: "transparent",
    },
  };

  const activeBtn = {
    ...btn,
    bg: "#ca304d",
    color: "white",
    border: "none",
    _hover: {
      bg: "#ca304d",
    },
  };
  const iconCss = {
    display: "flex",
    border: "1px solid #1a2b49",
    alignItems: "center",
    padding: "20px 30px",
    bg: "#f8f9fb",
    gap: ".25rem",
    fontSize: "20px",
    fontWeight: "400",
    borderRadius: ".25rem",
    height:"2.5rem"
  };
  const townbanner={
    backgroundImage: `url(${townBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:"38vh",
    borderRadius:".25rem"
  }
  const h3={
    fontSize: "2.375rem",
    fontWeight: "700",
    lineHeight: "2.8125rem",
    textAlign: "center",
    color: "#fff",
    marginBottom: "1.875rem"
  }
  const linkStyle = {
    padding: "10px 30px",
    color: "white",
    backgroundColor: "#ca304d",
    borderRadius: ".25rem",
    fontSize: "18px",
    hover: {
      backgroundColor: "white",
      color:"#ca304d"
      
    },
  };
  const display = useBreakpointValue({ base: "none",sm:"none", md: "none",lg:"block" });
  return (
    <Container maxW="1640px">
      <Flex flexDirection="column" alignItems="center" justifyContent="center" display={display}>
        <Text sx={h2}>Azerbaijan best travel tours</Text>
        <Text sx={p}>Discover Azerbaijan</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        gap=".625rem"
        p="50px 0"
        display={display}
      >
        {data?.map((item) => (
          <Button 
            key={item.id}
            sx={activeButton === item.id ? activeBtn : btn}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.text}
          </Button>
        ))}
      </Flex>
      <Box display={display} >
        {data.length > 0 && activeButton !== null && (
          <Flex gap="3.125rem">
            <Box w="50%">
              <Image
                borderRadius=".25rem"
                w="100%"
                src={data.find((item) => item.id === activeButton).img}
              />
            </Box>
            <Flex flexDirection="column" w="50%" gap="40px">
              <Text sx={h2}>
                {data.find((item) => item.id === activeButton).title}
              </Text>
              <Text sx={p}>
                {data.find((item) => item.id === activeButton).description}
              </Text>
              <Flex flexWrap="wrap" gap=".625rem">
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <HiOutlineBuildingOffice2
                      style={{ fontSize: "24px" }}
                    />{" "}
                    Sightseeing tours
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <GoSun style={{ fontSize: "24px" }} /> Day trips
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    <HiOutlineBuildingLibrary style={{ fontSize: "24px" }} />{" "}
                    Historical places
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <IoCarOutline style={{ fontSize: "24px" }} /> Transportation
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <TbSailboat style={{ fontSize: "24px" }} /> Boat tours
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <CiLocationOn style={{ fontSize: "24px" }} /> Local culture
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    <LuPizza style={{ fontSize: "24px" }} /> Food & drink
                  </Text>
                </Box>
                <Box>
                  <Text sx={iconCss}>
                    {" "}
                    <GiFlowerEmblem style={{ fontSize: "24px" }} /> Nature &
                    adventure
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Box>
      <Box m="20px 0">
         <Slider/>
      </Box>
      <Box sx={townbanner} >
        <Flex justifyContent="center" alignItems="center" flexDirection="column" h="100%">
              <Text sx={h3}>Get travel visa to Azerbaijan</Text>
        <Link style={linkStyle}>Apply for visa</Link>
        </Flex>
      </Box>
      <Box m="20px 0">
      <Box textAlign="center" margin="50px 0">
              <Text sx={h2}>The best tour packages</Text>
              <Text sx={p}>Enjoy rich culture and travel with our tours.</Text>
            </Box>
         <Slider/>
      </Box>
      <Box m="20px 0">
      <Box textAlign="center" margin="50px 0">
              <Text sx={h2}>Discover the best daily tour packages</Text>
              <Text sx={p}>The best sightseeing tour packages | Holiday Packages</Text>
            </Box>
         <Slider/>
      </Box>
      <Carusels/>
    </Container>
  );
}

export default Destination;

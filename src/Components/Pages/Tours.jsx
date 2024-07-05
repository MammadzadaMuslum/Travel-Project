import { Box, Card, CardBody, CardFooter, CardHeader, Container, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import bannerImage from "../../assets/img/banner.webp";
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { IoTimeOutline, IoTimerOutline } from 'react-icons/io5';
import { FaStar } from "react-icons/fa";
function Tours() {
  const [packData, setPackData] = useState([]);
  const { pathname } = useLocation();
  const { countryName } = useParams();
  const [ratings, setRatings] = useState({});
  
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tours?txt=${countryName}`);
        setPackData(res.data);
        const initialRatings = response.data.reduce((acc, item) => {
          acc[item.id] = item.rating || 0;
          return acc;
        }, {});
        setRatings(initialRatings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    axiosData();
  }, [countryName]);

  const data = packData.length > 0 ? packData[0].country : [];

  const sectionBox = {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px",
    height: { lg: "25vh" },
    backgroundSize: { lg: "cover" },
  };

  const img = {
    borderRadius: ".25rem",
    transition: "all 300ms",
    w: "100%",
    h: "410px",
    _hover: {
      transform: "scale(1.1)",
    },
  };

  const cardfooter = {
    bg: "white",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    boxShadow: "2px 2px 30px 0 #0000001A",
  };

  const timetext = {
    color: "#63687a",
    display: "flex",
    gap: ".4375rem",
    fontSize: "18px",
    alignItems: "center",
    textTransform: "uppercase",
  };

  const cardTittle = {
    fontWeight: "500",
    fontSize: "20px",
    color: "#1a2b49",
  };
  const renderStars = (id, rating) => {
    const totalStars = 5;
    return (
      <>
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            style={{
              color: index < rating ? "yellow" : "#ca304d",
              cursor: "pointer",
            }}
            onClick={() => handleStarClick(id, index + 1)}
          />
        ))}
      </>
    );
  };
  const handleStarClick = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };


  return (
    <>
      <Box as="main" sx={sectionBox} display={{sm:"none",md:"none",lg:"block"}}>
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Text fontSize="52px" color="white">
            {countryName} Travel
          </Text>
        </Flex>
      </Box>
      <Container maxW="1640px">
        <Flex justifyContent="center" alignItems="center" flexDirection="column" margin="40px 0">
          <Text fontSize="40px" letterSpacing="-.05rem">
            {pathname === "/country/Russia" ? "Tours in Russia" : ""}
            {pathname === "/country/Azerbaijan" ? "Azerbaijan tour packages" : ""}
            {pathname === "/country/Georgia" ? "Georgia tours" : ""}
            {pathname === "/country/Turkey" ? "Tours in Turkey" : ""}
          </Text>
          <Text fontSize="19px" display={{sm:"none",md:"none",lg:"block"}}>Our customers use visa services mostly for these countries</Text>
        </Flex>
        <Grid gridTemplateColumns={{sm:"auto",md:"auto auto",lg:"auto auto auto"}} gap="20px" marginBottom="50px">
          {data?.map((packs, id) => (
            <Card key={id} cursor="pointer">
                <Box overflow="hidden">
                      <Image sx={img} src={packs.image} />
                </Box>        
              <CardFooter sx={cardfooter}>
              <Text sx={timetext}><IoTimerOutline /> {packs.duration} DAYS {packs.duration} NIGHTS</Text>
                <Text sx={cardTittle}>{packs.title}</Text>
                <Text>{packs.description}</Text>
                <Flex alignItems="center">
                      {renderStars(id, ratings[id])}
                      <Text marginLeft="10px">
                        {" "}
                        {ratings[id] && ratings[id].toFixed(1)}
                      </Text>
                      <Text color="#63687a" marginLeft="10px">
                        ( 0 reviews)
                      </Text>
                    </Flex>
              <Text fontWeight="500" fontSize="18px">from <b style={{ fontSize: "20px" }}>{packs.price} $</b></Text>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Tours;

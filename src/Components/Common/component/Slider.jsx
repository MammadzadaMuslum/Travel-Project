import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardFooter,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Global } from "@emotion/react";
import SlickSlider from "react-slick";
import { IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import axios from "axios";

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
  const display = useBreakpointValue({ base: "none",sm:"none",md: "none",lg:"flex" });
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

function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/slidertext");
      setSliderData(response.data);
      const initialRatings = response.data.reduce((acc, item) => {
        acc[item.id] = item.rating || 0;
        return acc;
      }, {});
      setRatings(initialRatings);
    };
    fetchData();
  }, []);

  const handleStarClick = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  return (
    <>
      <Global
        styles={`
          
          .slick-dots{
            display:none !important;
          }
          .slick-prev:before, .slick-next:before {
            display: none;
          }
        `}
      />

      <SlickSlider {...settings}>
        {sliderData.map((item) => (
      <Box px={2} key={item.id} h="600px">
        <Card cursor="pointer" >
              <Box  overflow="hidden">
                <Image sx={img} src={item.img} />
              </Box>
              <CardFooter sx={cardfooter}>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box>
                    <Text sx={timetext}>
                      <IoTimeOutline /> {item.days} days {item.nights} nights
                    </Text>
                    <Text sx={cardTittle}>{item.text}</Text>
                  </Box>
                  <Flex flexDirection="column">
                    <Flex alignItems="center">
                      {renderStars(item.id, ratings[item.id])}
                      <Text marginLeft="10px">
                        {" "}
                        {ratings[item.id] && ratings[item.id].toFixed(1)}
                      </Text>
                      <Text color="#63687a" marginLeft="10px">
                        ({item.reviews} 0 reviews)
                      </Text>
                    </Flex>
                    <Flex>
                      <Text fontWeight="500" fontSize="18px">
                        from <b style={{ fontSize: "22px" }}>$0</b>
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
      </Box>
            
         
        ))}
      </SlickSlider>
    </>
  );
}

export default Slider;

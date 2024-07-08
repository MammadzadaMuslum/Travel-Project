import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import azflag from "../../../../assets/img/azflag.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscCoffee } from "react-icons/vsc";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { IoWifi } from "react-icons/io5";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { MdOutlinePool } from "react-icons/md";
import { FaHandHoldingHeart, FaStar } from "react-icons/fa";
import { Global } from "@emotion/react";
import axios from "axios";
import googleimg from "../../../../assets/img/g-review.png";
import { Link, useLocation } from "react-router-dom";

const CustomPrevArrow = ({ onClick }) => {
  const display = useBreakpointValue({ base: "none", sm: "none", md: "none", lg: "flex" });
  return (
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
  );
};

const CustomNextArrow = ({ onClick }) => {
  const display = useBreakpointValue({ base: "none", sm: "none", md: "none", lg: "flex" });
  return (
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
  );
};

function CaruselCard() {
  const [caruselData, setCaruselData] = useState([]);
  const [ratings, setRatings] = useState({});
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchCaruselData = async () => {
      const res = await axios.get("http://localhost:3000/caruselcar");
      setCaruselData(res.data);
      const initialRatings = res.data.reduce((acc, item) => {
        acc[item.id] = item.rating || 0;
        return acc;
      }, {});
      setRatings(initialRatings);
    };
    fetchCaruselData();
  }, []);

  const handleStarClick = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const cardfooter = {
    bg: "white",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    boxShadow: "2px 2px 30px 0 #0000001A",
  };
  const cardfooter2 = {
    bg: "white",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    h: "400px",
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

  const p = {
    fontWeight: "500",
    fontSize: "20px",
    display: "flex",
    color: "#1a2b49",
    alignItems: "center",
    gap: "5px",
    marginLeft: "10px",
  };

  const h = {
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

  const h2 = {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: "2.75rem",
    letterSpacing: "-.05rem",
  };

  const p2 = {
    color: "hsl(223, 8%, 16%)",
    fontSize: "1.125rem",
    marginTop: ".3125rem",
  };

  return (
    <div>
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
      <Box textAlign="center" margin="50px 0" display={pathname === "/hotel-bookings/hotel" || "/tours" ? "none" : "block"}>
        <Text sx={h2}>Best hotel bookings</Text>
        <Text sx={p2}>Best hotel bookings</Text>
      </Box>
      <Slider {...settings}>
        {caruselData.map((item) => (
          <Box px={2} key={item.id} h="700px">
            <Link to="/hotel-bookings/hotel">
              <Card cursor="pointer">
                <Box overflow="hidden">
                  <Image sx={img} src={item.image} />
                </Box>
                <CardFooter sx={cardfooter}>
                  <Box p="10px">
                    <Text sx={h}>{item.text}</Text>
                  </Box>
                  <Flex flexWrap="wrap" columnGap="40px" p="20px 0">
                    <Text sx={p}>
                      <IoWifi /> Free wifi
                    </Text>
                    <Text sx={p}>
                      <VscCoffee /> Restaurant
                    </Text>
                    <Text sx={p}>
                      <MdOutlineDirectionsCar /> Free parking
                    </Text>
                    <Text sx={p}>
                      <FaHandHoldingHeart /> Room service
                    </Text>
                    <Text sx={p}>
                      <MdOutlinePool /> Pool
                    </Text>
                    <Text sx={p}>
                      <LiaBabyCarriageSolid /> Babysitting
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text sx={p}>
                      <Image w="24px" src={azflag} /> Azerbaijan Travel
                    </Text>
                    <Flex ml="10px" alignItems="center" gap="10px">
                      {renderStars(item.id, ratings[item.id])}
                    </Flex>
                  </Flex>
                </CardFooter>
              </Card>
            </Link>
          </Box>
        ))}
      </Slider>
      <Box  display={pathname==="/tours" ? "block" :"none"}>
      <Box textAlign="center" margin="50px 0">
            <Text sx={h2}>Ratings & Reviews</Text>
            <Text sx={p2}>Customer reviews</Text>
          </Box>
          <Slider {...settings}>
            <Box px={2} h="300px">
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box px={2}>
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box px={2}>
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
          </Slider>
          <Box textAlign="center" margin="50px">
                <Button  onClick={onOpen} bg="#ca304d" padding="10px 50px" color="white">
          Write review
        </Button>

          </Box>
          </Box>
      {pathname !== "/hotel-bookings/hotel" || "/tours"  && (
        <>
          <Box textAlign="center" margin="50px 0">
            <Text sx={h2}>Ratings & Reviews</Text>
            <Text sx={p2}>Customer reviews</Text>
          </Box>
          <Slider {...settings}>
            <Box px={2} h="300px">
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box px={2}>
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box px={2}>
              <Card h="299px">
                <CardHeader>
                  <Flex>
                    <Box>
                      <Text sx={h}>Rakesh S - India</Text>
                      <Text color="#149d63">Verified booking</Text>
                      <Text sx={p2}>
                        Great trip, the service provided, the team was great.
                      </Text>
                    </Box>
                    <Box w="24px">
                      <Image src={googleimg} w="100%" />
                    </Box>
                  </Flex>
                </CardHeader>
                <CardFooter sx={cardfooter2}>
                  <Flex justifyContent="space-between" alignItems="center" h="100%">
                    <Flex alignItems="center" gap="10px">
                      {renderStars("rakesh-s-india", ratings["rakesh-s-india"])}
                    </Flex>
                    <Text color="#1a2b49">July 21, 2023</Text>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
          </Slider>
          <Box textAlign="center" margin="50px">
                <Button  onClick={onOpen} bg="#ca304d" padding="10px 50px" color="white">
          Write review
        </Button>

          </Box>
      
          <Box textAlign="center" margin="50px 0">
            <Text sx={h2}>Travel news</Text>
            <Text sx={p2}>Travel news, travel guides and reviews</Text>
          </Box>
          <Slider {...settings}>
            {caruselData.map((item) => (
              <Box px={2} key={item.id} h="700px">
                <Card cursor="pointer">
                  <Box overflow="hidden">
                    <Image sx={img} src={item.image} />
                  </Box>
                  <CardFooter sx={cardfooter}>
                    <Box p="10px">
                      <Text sx={h}>{item.text}</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="500" fontSize="16px" p="20px 10px">
                        Baku is the capital and largest city of Azerbaijan. It is
                        located on the southern shore of the Caspian...
                      </Text>
                    </Box>
                    <Flex justifyContent="space-between" p="10px">
                      <Text color="#1a2b49">December 19, 2022</Text>
                      <Link
                        style={{
                          borderBottom: "1px solid #ca304d",
                          color: "#ca304d",
                        }}
                      >
                        Read more
                      </Link>
                    </Flex>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </Slider>
        </>
      )}
       <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW="646px">
          <ModalCloseButton />
          <ModalBody padding="50px" textAlign="center">
            <Text textAlign="center" fontSize="24px" marginBottom="10px">
              Write review
            </Text>
            <Flex gap={3}>
              <FormControl>
                <Input placeholder="Full name" />
              </FormControl>
              <FormControl>
                <Input placeholder="Country" />
              </FormControl>
            </Flex>
            <Textarea
              placeholder="Your message"
              padding="10px"
              margin="10px 0"
              h="187px"
              w="546px"
              maxH="187px"
            ></Textarea>
            <Flex justifyContent="space-between" padding="10px 0">
                <Text fontSize="20px">{ratings["review"] || 0}.0 / 5.0</Text>
                <Flex gap="10px" >
                    {renderStars("review", ratings["review"] || 0)}
                </Flex>
            </Flex>
           
            <Button w="100%" bg="#ca304d" color="white">
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CaruselCard;

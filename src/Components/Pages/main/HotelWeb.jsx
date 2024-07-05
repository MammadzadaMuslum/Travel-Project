import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  Text,
  Input,
  Textarea,
  Button,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  FormControl,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import foto1 from "../../../assets/img/hotelimg/522604f74f7ab9d5d386.webp";
import foto2 from "../../../assets/img/hotelimg/675ac8fffbb645e9bd06.webp";
import foto3 from "../../../assets/img/hotelimg/f9dd8310fc5bce343afb.webp";
import foto4 from "../../../assets/img/hotelimg/396dd3f137b4257bf715.webp";
import foto5 from "../../../assets/img/hotelimg/52f0f3075fcd321f61e0.webp";
import CaruselCard from "../../Common/component/section-components/CaruselCard";

function HotelWeb() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const res = {
      data: [
        { id: 1, rating: 4 },
        { id: 2, rating: 5 },
      ],
    };

    const starts = () => {
      const initialRatings = res.data.reduce((acc, item) => {
        acc[item.id] = item.rating || 0;
        return acc;
      }, {});
      setRatings(initialRatings);
    };
    starts();
  }, []);

  const handleStarClick = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  const timetext = {
    color: "#63687a",
    display: "flex",
    gap: ".4375rem",
    fontSize: "12px",
    alignItems: "center",
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
              fontSize:"20px"
            }}
            onClick={() => handleStarClick(id, index + 1)}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Container maxW="1640px">
        <Box margin="20px 0" display={{ sm: "none", md: "none", lg: "block" }}>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                textDecoration="none !important"
                fontSize="14px"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize="14px">
                Turkey Travel
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color="#b9b7b7" fontSize="14px">
                Rival Hotel
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Box>
            <Text fontSize="36px" fontWeight="700">
              Rivial Hotel
            </Text>
            <Text sx={timetext}>
              <IoTimerOutline /> Duration: days | nights
            </Text>
            <Flex alignItems="center" columnGap="2px">
              <FaStar style={{ color: "yellow", fontSize: "12px" }} />
              <FaStar style={{ color: "yellow", fontSize: "12px" }} />
              <FaStar style={{ color: "yellow", fontSize: "12px" }} />
              <FaStar style={{ color: "yellow", fontSize: "12px" }} />
              <FaStar style={{ color: "yellow", fontSize: "12px" }} />
              <Text fontSize="12px" ml="5px">
                5.0
              </Text>
            </Flex>
            <Grid
              templateColumns="2fr 1fr 1fr"
              h={"550px"}
              templateRows="1fr 1fr"
              gap={3}
              margin="20px 0"
            >
              <GridItem colSpan={1} rowSpan={2}>
                <Image
                  borderRadius="5px"
                  h={"100%"}
                  objectFit={"cover"}
                  src={foto1}
                />
              </GridItem>
              <GridItem>
                <Image
                  borderRadius="5px"
                  w="100%"
                  h={"100%"}
                  objectFit={"cover"}
                  src={foto2}
                />
              </GridItem>
              <GridItem>
                <Image
                  borderRadius="5px"
                  w="100%"
                  h={"100%"}
                  objectFit={"cover"}
                  src={foto3}
                />
              </GridItem>
              <GridItem>
                <Image
                  borderRadius="5px"
                  w="100%"
                  h={"100%"}
                  objectFit={"cover"}
                  src={foto4}
                />
              </GridItem>
              <GridItem>
                <Image
                  borderRadius="5px"
                  w="100%"
                  h={"100%"}
                  objectFit={"cover"}
                  src={foto5}
                />
              </GridItem>
            </Grid>
          </Box>
          <Flex m="100px 0" justifyContent="space-between">
            <Flex flexDirection="column">
              <Text fontSize="30px" fontWeight="600">
                Hotel includes:
              </Text>
              <List sx={{ listStyleType: "disc !important" }} margin="35px 0">
                <ListItem marginBottom="15px" fontSize="20px">
                  Free WiFi
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Airport shuttle
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Free parking
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Family rooms
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Fitness centre
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Non-smoking rooms
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Restaurant
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Room service
                </ListItem>
                <ListItem marginBottom="15px" fontSize="20px">
                  Tea/coffee maker in all rooms
                </ListItem>
                <ListItem fontSize="20px">Fabulous breakfast</ListItem>
              </List>
            </Flex>
            <Flex
              flexDirection="column"
              p={6}
              bg="#f8f9fb"
              maxW="6xl"
              borderRadius="lg"
              h="100%"
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #e2e2e2"
                marginBottom="20px"
              >
                <Text fontSize="18px" fontWeight="500" mb={4}>
                  Sura Desing Hotel
                </Text>
                <Text fontSize="18px" fontWeight="500" mb={6}>
                  Per person from $0
                </Text>
              </Flex>

              <Flex flexDirection="column" gap={4}>
                <Flex gap={4}>
                  <Input placeholder="Full name" />
                  <Input placeholder="Email" />
                </Flex>
                <Flex gap={4}>
                  <Input placeholder="Country code" />
                  <Input placeholder="Phone number" />
                  <Input placeholder="Country" />
                </Flex>
                <Flex>
                  <Select></Select>
                </Flex>
                <Textarea placeholder="Your message"></Textarea>
                <Button color="white" bg="#ca304d" mt={4}>
                  Check availability
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
      <Box bg="#f8f9fb" p="40px 150px">
        <Text color="#ca304d" fontWeight="600">
          Overview
        </Text>
        <Text p="40px 0" fontWeight="400" fontSize="14px">
          This hotel is in Sultanahmet district and has a beautiful interior
          that looks like a palace. It also has a pool outside next to the
          famous Hagia Sophia. The hotel rooms are modern and have pretty
          Ottoman designs. They also have free WiFi. The rooms are quiet because
          they have soundproofing. Sura Design Hotel & Suites is located very
          close to the Sultanahmet Tram Stop, only a 2-minute walk away. This
          makes it convenient to visit many historical places in Istanbul. You
          can have free tea every day at 5 o'clock.Every floor of the hotel has
          a unique design with beautiful amber, silver, gold, and turquoise
          elements. Every room at Sura Design Hotel & Suites has air
          conditioning and a TV with satellite channels. Some rooms have a view
          of the garden or the city. Every room has its own bathroom with a
          hairdryer, slippers, and free toiletries.Every day, there is an
          abundant breakfast served with many delicious local dishes. You can
          try different delicious dishes from Ottoman cuisine at the beautifully
          decorated Deraliye Restaurant. Galeyan Restaurant serves traditional
          kebabs that are made with organic vegetables and meat from their own
          farm. After a long day in the city, you can sit back and enjoy your
          coffee at the lounge in the big garden that has a calm and peaceful
          atmosphere, or at Khaldi Café.You can pamper yourself at the hotel's
          spa center, which has a traditional hammam. The spa at Sura Design
          Hotel & Suites provides relaxing treatments for your well-being and
          beauty needs. You can also request a massage session if you'd like.
          There is also a gym that has everything you need.
        </Text>
      </Box>
      <Container maxW="1640px">
        <Box textAlign="center" margin="50px 0">
          <Text sx={h2}>Memorable tour packages that you will love</Text>
          <Text sx={p2}>You may also like</Text>
        </Box>
        <CaruselCard />
      </Container>
      <Box bg="#f8f9fb" p="40px 150px" textAlign="center">
        <Text fontSize="36px">Ratings & Reviews</Text>
        <Button onClick={onOpen} bg="#ca304d" padding="10px 50px" color="white">
          Write review
        </Button>
      </Box>
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
    </>
  );
}

export default HotelWeb;

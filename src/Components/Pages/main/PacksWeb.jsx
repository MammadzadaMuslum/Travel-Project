import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLocationOutline } from "react-icons/io5";
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
  Card,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
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
import Slider from "react-slick";
import HotelOptions from "../../Common/HotelOptions";

function PacksWeb() {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
              fontSize: "20px",
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
                Azerbaijan Travel
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color="#b9b7b7" fontSize="14px">
                Discover Azerbaijan in a 9-day tour
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Box>
            <Text fontSize="36px" fontWeight="700">
              Discover Azerbaijan in a 9-day tour
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
              display={{ sm: "none", md: "grid", lg: "grid" }}
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
            <Box
              margin="10px 0"
              display={{ sm: "block", md: "none", lg: "none" }}
            >
              <Slider {...settings}>
                <Box>
                  <Card>
                    <Image src={foto1} h="353px" />
                  </Card>
                </Box>
                <Box>
                  <Card>
                    <Image src={foto2} h="353px" />
                  </Card>
                </Box>
                <Box>
                  <Card>
                    <Image src={foto3} h="353px" />
                  </Card>
                </Box>
                <Box>
                  <Card>
                    <Image src={foto4} h="353px" />
                  </Card>
                </Box>
                <Box>
                  <Card>
                    <Image src={foto5} h="353px" />
                  </Card>
                </Box>
              </Slider>
            </Box>
          </Box>
          <Flex
            m="100px 0"
            justifyContent="space-between"
            flexDirection={{ sm: "column", lg: "row" }}
            gap="20px"
          >
            <Flex flexDirection="column" w={{sm:"100%",lg:"50%"}}>
              <Text fontSize="24px" fontWeight="600">
                Tour includes:
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
              <Text fontSize="24px" fontWeight="600">
                Tour includes:
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
              <Box p={{ sm: "40px 20px", md: "40px 20px", lg: "40px 0px" }}>
                <Text color="#ca304d" fontWeight="600">
                  Overview
                </Text>
                <Text p="40px 0" fontWeight="400" fontSize="14px">
                  This hotel is in Sultanahmet district and has a beautiful
                  interior that looks like a palace. It also has a pool outside
                  next to the famous Hagia Sophia. The hotel rooms are modern
                  and have pretty Ottoman designs. They also have free WiFi. The
                  rooms are quiet because they have soundproofing. Sura Design
                  Hotel & Suites is located very close to the Sultanahmet Tram
                  Stop, only a 2-minute walk away. This makes it convenient to
                  visit many historical places in Istanbul. You can have free
                  tea every day at 5 o'clock.Every floor of the hotel has a
                  unique design with beautiful amber, silver, gold, and
                  turquoise elements. Every room at Sura Design Hotel & Suites
                  has air conditioning and a TV with satellite channels. Some
                  rooms have a view of the garden or the city. Every room has
                  its own bathroom with a hairdryer, slippers, and free
                  toiletries.Every day, there is an abundant breakfast served
                  with many delicious local dishes. You can try different
                  delicious dishes from Ottoman cuisine at the beautifully
                  decorated Deraliye Restaurant. Galeyan Restaurant serves
                  traditional kebabs that are made with organic vegetables and
                  meat from their own farm. After a long day in the city, you
                  can sit back and enjoy your coffee at the lounge in the big
                  garden that has a calm and peaceful atmosphere, or at Khaldi
                  Café.You can pamper yourself at the hotel's spa center, which
                  has a traditional hammam. The spa at Sura Design Hotel &
                  Suites provides relaxing treatments for your well-being and
                  beauty needs. You can also request a massage session if you'd
                  like. There is also a gym that has everything you need.
                </Text>
              </Box>
              <Accordion defaultIndex={[0]} allowMultiple>
                <Text fontSize="24px" fontWeight="600" m="20px 0">
                  Itinerary
                </Text>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />   Day 1: Arrival
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Arrive at the Azerbaijan International Airport. You will
                      be welcomed and then transferred to your hotel. Check-in
                      at the hotel. The rest of the day is free for you to
                      explore this windy capital. Overnight in Baku.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0"  alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 2: Baku tour
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel in Baku Excursion program (pick-up
                      time 10:00): Highland Park and Flame Towers Complex Ferris
                      Wheel International Mugham and “Baku Venice” Azerbaijan
                      Carpet Museum Baku Boulevard Old city tour (Maiden Tower,
                      Shirvanshah Palace, etc) Fountain Square The Heydar Aliyev
                      Center Transfer to Hotel Overnight in Baku.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0"  alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 3: Guba tour
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel in Baku Transfer to Guba (pick-up
                      time 09:00) Excursion program: Besh Barmag Shrine Red
                      settlement Carpet weaving factory* Gachrash Forests
                      Mastdargah Lunch break Check-in to the hotel. Overnight in
                      Guba.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 4: Shahdag
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel in Baku Transfer to Shahdag
                      Mountain Resort (pick-up time 10:00) Excursion program:
                      Visiting Shahdag Mountain Resort Using activities which
                      are available on that moment* Going to Laza village Lunch
                      break Return to the hotel Overnight in Guba.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 5: Shamakhi tour
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel. Check-out from the hotel at 09:00
                      Transfer to Gabala On the way guests will pass: Diri Baba
                      Mausoleum Shamakhi Juma Mosque Reaching Gabala. Check-in
                      to the hotel. Free time Overnight in Gabala
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 6: Gabala tour
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel. Excursion program (pick-up time
                      10:00) 7 Gozal Waterfall (7 Beauties) Nohur Lake Lunch
                      break 13.00-14.00 Tufandagh Tourism Complex Gabala
                      Shooting Club Return to the hotel. Free time Overnight in
                      Gabala
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 7: Sheki tour
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text fontSize="14px" ml="26px">
                      Breakfast at the hotel. Excursion program: Transfer to
                      Sheki at 10.00 The Palace of Shaki Khans Shabaka master
                      house Caravanserai Street of sweets and potteries Albanian
                      church in the village of Kish Transfer back to Gabala
                      Overnight in Gabala
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 8: Transfer to Baku
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text>Breakfast at the hotel.</Text>
                    <Text>Check-out from the hotel by 12:00</Text>
                    <Text>Way to Baku (around 3 hours)</Text>
                    <Text>Check-in to the hotel.</Text>
                    <Text>
                      Shopping time: in local bazaars (Sharg Bazaar, Yashil
                      Bazaar)
                    </Text>
                    <Text>
                      Shopping malls (Daniz Mall, 28 Mall, Ganjlik Mall)
                    </Text>
                    <Text>Overnight in Baku</Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left" p="10px 0" alignItems="center">
                    <IoLocationOutline style={{fontSize:"24px"}} />  Day 9: Departure
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text>Breakfast at the hotel.</Text>
                    <Text>Check-out.</Text>
                    <Text>
                      Transfer to the Azerbaijan International Airport (3 hours
                      before the flight timing).
                    </Text>
                    <Text>Departure.</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <HotelOptions/>
              <Box m="20px 0">
                <Text fontSize="24px" margin="10px 0">Good to know:</Text>
                <Box m="10px 0" >
                  <Text fontSize="16px" fontWeight="600">Azerbaijan visa</Text>
                  <Text fontSize="14px">
                    Apply for a visa online/. You can easily apply for an e-visa
                    anywhere you have an internet connection, saving you time
                    applying for a visa at Azerbaijan's diplomatic missions
                    abroad or at Azerbaijan's ports of entry (if eligible).
                    Click on the link below to visit Azerbaijan's e-visa
                    website: https://evisa.gov.az/en/ Have any questions? We
                    have a FAQ section about e-visas:
                    https://evisa.gov.az/en/apply-faq Have more questions? 🙂
                    Contact us
                  </Text>
                </Box>
                <Box m="10px 0">
                  <Text fontSize="16px" fontWeight="600">How do I change my reservation?</Text>
                  <Text fontSize="14px">
                    If you need to change your reservation, please contact us
                    using the link in your reservation confirmation email or by
                    phone or email.
                  </Text>
                </Box>
                <Box m="10px 0">
                  <Text fontSize="16px" fontWeight="600">
                    Are credit cards generally accepted in Azerbaijan?
                  </Text>
                  <Text fontSize="14px">
                    Some major credit cards are accepted at some upscale
                    restaurants and hotels.
                  </Text>
                </Box>
                <Box m="10px 0">
                  <Text fontSize="16px" fontWeight="600">
                    What is it about Azerbaijan that attracts tourists?
                  </Text>
                  <Text fontSize="14px">
                    Azerbaijan is dotted with historical monuments and museums.
                    The country also has beautiful mosques with exquisite
                    tilework. In addition, Azerbaijan's modern architecture
                    leaves tourists speechless.
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex
              flexDirection="column"
              p={6}
              bg="#f8f9fb"
              maxW="6xl"
              borderRadius="lg"
              h="100%"
              w={{sm:"100%",lg:"50%"}}
              position="sticky"
              left="0"
              top="200px"
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #e2e2e2"
                marginBottom="20px"
              >
                <Text fontSize="18px" fontWeight="500" mb={4}>
                  Discover Azerbaijan in a 9-day tour
                </Text>
                <Text fontSize="18px" fontWeight="500" mb={6}>
                  Per person from $454
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
      <Container maxW="1640px">
        <Box textAlign="center" margin="50px 0">
          <Text sx={h2}>Memorable tour packages that you will love</Text>
        </Box>
        <CaruselCard />
      </Container>
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
              <Flex gap="10px">
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

export default PacksWeb;

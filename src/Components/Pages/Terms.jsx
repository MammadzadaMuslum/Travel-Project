import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import bannerImage from "../../assets/img/banner.webp";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Terms() {
  const sectionBox = {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px",
    height: { lg: "55vh" },
    backgroundSize: { lg: "cover" },
  };
  return (
    <div>
      <Box as="main" sx={sectionBox} display={{sm:"none",md:"none",lg:"block"}}>
        <Flex justifyContent="center" alignItems="center" h="100%">
          <Text fontSize="52px" color="white">
            Terms & conditions
          </Text>
        </Flex>
      </Box>
      <Container maxW={"1640px"}>
        <Box margin="20px 0" display={{sm:"none",md:"none",lg:"block"}}>
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
              <BreadcrumbLink href="#" color="#b9b7b7" fontSize="14px">
                Terms & conditions
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="41px" padding="1.875rem">
            Terms & conditions
          </Text>
          <Box w={{sm:"100%",md:"100%",lg:"976px"}} pb="100px">
            <Text textAlign="center"  fontWeight="300" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            leo mattis, fringilla ex at, fermentum nulla. Vivamus eget aliquam
            turpis. Nulla eu ornare turpis, ac ultricies erat. Cras maximus
            libero finibus urna ullamcorper, eu auctor augue aliquet. Nullam
            ultricies risus sit amet cursus commodo. Ut lectus nisi, gravida at
            diam id, imperdiet tempus dui. Nulla euismod auctor mi vel pulvinar.
            Vestibulum odio tellus, congue nec finibus consequat, pulvinar ut
            ex. Donec mauris augue, fermentum quis tempus quis, laoreet quis
            diam.
          </Text>
          <Text textAlign="center"  fontWeight="300">
            Etiam dictum lacus et tincidunt ultricies. Morbi ut odio ligula.
            Vivamus feugiat ex eget viverra ultricies. Curabitur mollis pretium
            tempor. Vivamus eget semper mi, commodo commodo nunc. Integer quis
            sollicitudin lectus. Morbi ut cursus est. Nunc pretium est urna,
            auctor mattis augue placerat a. Proin a condimentum metus. Maecenas
            ultrices ante at nunc hendrerit ullamcorper. In hac habitasse platea
            dictumst. Praesent varius tincidunt metus id tincidunt. Cras posuere
            dui nec quam ornare, at congue eros auctor. Etiam lectus felis,
            rutrum eu turpis eu, viverra bibendum erat. Vivamus mattis arcu ac
            nisi aliquet posuere.
          </Text>
          <Text textAlign="center"  fontWeight="300">
            Maecenas semper, velit in facilisis dapibus, turpis mauris tristique
            libero, non ultricies magna lacus et elit. Sed ac bibendum tortor.
            Praesent aliquam dui quis arcu blandit pulvinar. Etiam dignissim
            molestie arcu, vel lacinia enim gravida non. Donec dignissim neque
            eget pellentesque pellentesque. Etiam dictum egestas ligula, id
            cursus orci sodales ac. Etiam at hendrerit libero, ac rutrum sapien.
            Maecenas ornare felis et scelerisque finibus. Curabitur lectus
            lacus, placerat varius cursus eu, porttitor quis velit. Duis a
            fringilla turpis.
          </Text>
          <Text textAlign="center"  fontWeight="300">
            Aliquam ullamcorper turpis sed purus egestas, at gravida urna
            ultrices. Nam vehicula laoreet velit, et auctor ligula cursus a.
            Praesent sit amet ex ac nibh vulputate iaculis at eu eros. Mauris
            dapibus sollicitudin ex, ut aliquet eros. Nunc at lorem nec neque
            scelerisque rhoncus a a dui. Praesent quam leo, malesuada id
            vehicula ut, sagittis at lectus. Proin vitae bibendum enim. Donec
            suscipit mauris metus, eu elementum ex pulvinar sit amet. Sed tempus
            quis eros at faucibus.
          </Text>
          <Text textAlign="center"  fontWeight="300">
             Nullam risus sem, dignissim in purus sit amet, laoreet vestibulum
          erat. Vestibulum sit amet purus eu dui sollicitudin gravida placerat
          nec elit. Vestibulum mollis vehicula justo a iaculis. Donec consequat
          mi vitae sodales mattis. Pellentesque eget mi laoreet, laoreet nulla
          eu, scelerisque sem. Nam elit felis, euismod nec erat ac, porttitor
          maximus urna. Ut dapibus, metus sit amet commodo aliquam, quam orci
          suscipit purus, nec feugiat ante sapien eu orci. Maecenas imperdiet
          luctus erat, at dictum lorem dictum eget. Cras malesuada enim id enim
          rutrum eleifend. Praesent et ornare arcu, in vulputate ex. Mauris erat
          felis, scelerisque fringilla diam sit amet, fermentum iaculis neque.
          Donec sed nunc viverra, volutpat metus eget, pellentesque elit. Nam
          non pellentesque elit, eu efficitur nunc. Nunc tortor ipsum, fermentum
          vel enim ac, elementum malesuada ex.
          </Text>
          </Box>
          
         
        </Flex>
      </Container>
    </div>
  );
}

export default Terms;

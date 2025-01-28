import { Box, Container, SimpleGrid, Text, Button, UnorderedList, ListItem, Icon, Link } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    title: "2D Floor Plan",
    subtitle: "Floor Plan Drawing",
    price: "Rs 10",
    pricePer: "Per Sqft",
    features: [
      "Vastu Compliant Floor Plan with Furniture Layout",
      "Locations of Rooms and Placement of Furniture",
      "Locations of Walls, Windows, Doors etc."
    ],
    sampleLink: "https://dazzelinfo.com/clients99/Arcitecture/13/images/nnn.pdf"
  },
  {
    title: "Structural Design",
    subtitle: "Reinforcement Drawing",
    price: "Rs 7.5",
    pricePer: "Per Sqft",
    features: [
      "Structural Design with Reinforcement Details",
      "Design of Foundations, Plinth, Columns, Foundation, Slab etc.",
      "Sizes and Number of bars and spacing between bars"
    ],
    sampleLink: "https://dazzelinfo.com/clients99/Arcitecture/13/images/des.pdf"
  },
  {
    title: "MEP Drawings",
    subtitle: "Electrical & Plumbing",
    price: "Rs 7.5",
    pricePer: "Per Sqft",
    features: [
      "Electrical Point Drawings & Schedule of Electrical Points",
      "Drawings & Schedule of Plumbing Fixtures",
      "Center Line Drawing and Other Drawings required by Execution"
    ],
    sampleLink: "https://dazzelinfo.com/clients99/Arcitecture/13/images/m1.pdf"
  },
  {
    title: "3D Images",
    subtitle: "Floor Plan Drawing",
    price: "Rs 5000",
    pricePer: "Per Image",
    features: [
      "Vastu Compliant Floor Plan with Furniture Layout",
      "Realistic Elevation Details & Tentative Look of Final Elevation",
      "Isometric View of the House with details of the finishing"
    ],
    sampleLink: "https://dazzelinfo.com/clients99/Arcitecture/13/images/3d.pdf"
  }
];

const SampleButton = ({ link }) => (
  <Button
    as="a"
    href={link}
    target="_blank"
    bg="#d5ac63"
    color="#fff"
    px="20px"
    py="10px"
    borderRadius="5px"
    fontWeight="bold"
    _hover={{ bg: "#c89e5a" }}
    width="100%"
    maxW="200px"
    mx="auto"
  >
    View Sample Drawing
  </Button>
);

const ServiceCard = ({ title, subtitle, price, pricePer, features, sampleLink }) => (
  <Box
    bg="#f9f9f9"
    border={'2px solid #cccccc'}
    borderRadius="10px"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    p="20px"
    textAlign="center"
    _hover={{ transform: "scale(1.05)", transition: "0.5s" }}
  >
    <Link href="#" textDecoration="none" color="#333">
      <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="bold" mb="10px">{title}</Text>
    </Link>
    <Text color="#777" fontSize="16px" mb="10px">{subtitle}</Text>
    <Text color="#d5ac63" fontSize={{ base: "20px", md: "22px" }} my="15px 0 5px">{price}</Text>
    <Text fontSize={{ base: "16px", md: "18px" }} color="#555">{pricePer}</Text>
    <UnorderedList listStyleType="none" p="0" mt="15px">
      {features.map((feature, index) => (
        <ListItem key={index} mb="10px" color="#555" fontSize={{ base: "14px", md: "16px" }}>
          <Icon as={FaCheck} color="#4caf50" mr="8px" /> {feature}
        </ListItem>
      ))}
    </UnorderedList>
    <SampleButton link={sampleLink} />
  </Box>
);

const Design = () => (
  <Box border="2px solid #ccc" borderRadius="15px" p="30px" bg="#f4f4f4">
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}  spacing={5}>
        {services.map((service, index) => (
          <ServiceCard  key={index} {...service} />
        ))}
      </SimpleGrid>

      {/* Right Side Buttons */}
      <Box display="flex" justifyContent={{ base: "center", md: "flex-end" }} mt="20px">
        <Button
          as="a"
          href="#"
          bg="#d5ac63"
          color="#fff"
          px="20px"
          py="10px"
          borderRadius="5px"
          fontWeight="bold"
          _hover={{ bg: "#c89e5a" }}
          mr={{ base: "0", md: "20px" }}
        >
          Click Here to View Sample Floor Plans
        </Button>
        <Button
          as="a"
          href="/contact"
          bg="#d5ac63"
          color="#fff"
          px="20px"
          py="10px"
          borderRadius="5px"
          fontWeight="bold"
          _hover={{ bg: "#c89e5a" }}
        >
          Contact us
        </Button>
      </Box>
    </Container>
  </Box>
);

export default Design;

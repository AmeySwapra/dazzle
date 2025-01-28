import React from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import servicebg from "../../assets/bg/service.jpg";
import pic1 from "../../assets/service/pic1.jpg";
import pic2 from "../../assets/service/pic2.jpg";
import pic3 from "../../assets/service/pic3.png";
import pic4 from "../../assets/service/pic4.jpg";
import pic5 from "../../assets/service/pic5.webp";
import pic6 from "../../assets/service/pic6.jpg";
import pic7 from "../../assets/service/pic7.jpeg";
import pic8 from "../../assets/service/pic8.jpg";
import pic10 from "../../assets/service/pic10.jpg";

const services = [
  {
    title: "Conceptual Design",
    description:
      "Developing initial design concepts that align with client vision...",
    image: pic1,
  },
  {
    title: "Interior Design",
    description:
      "Overseeing every aspect of the project lifecycle, ensuring timelines...",
    image: pic2,
  },
  {
    title: "Landscape Designing",
    description:
      "Incorporating eco-friendly materials and practices to promote environmental responsibility...",
    image: pic3,
  },
  {
    title: "Industrial",
    description:
      "Managing and executing construction projects with precision and attention to detail...",
    image: pic4,
  },
  {
    title: "Civil Construction",
    description:
      "Enhancing interiors with bespoke furnishings, lighting solutions, and decorative elements that reflect style and sophistication...",
    image: pic5,
  },
  {
    title: "Infrastructure",
    description:
      "Preparing construction drawings or Working drawings for civil construction and architectural projects...",
    image: pic6,
  },
  {
    title: "Real Estate",
    description:
      "Real estate is property consisting of land and the buildings on it...",
    image: pic10,
  },
  {
    title: "Green Building Certification",
    description:
      "A set of rating systems and tools that are used to assess a building or a construction...",
    image: pic7,
  },
  {
    title: "Plotting",
    description:
      "Commercial real estate valuation also relies on an estimate of the present value of future benefits...",
    image: pic8,
  },
];

const Services = ({ backgroundImage = true, cardBackground = "black" }) => {
  const descriptionColor = backgroundImage && cardBackground === "black" ? "white" : "black";

  return (
    <Box
      background={backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${servicebg})` : "none"}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py={10}
      px={{ base: 4, md: 8, lg: 24 }}
    >
      <Container maxW="container.xl">
        <VStack spacing={4} mb={10} textAlign="center">
          {/* Title */}
          {!backgroundImage && cardBackground === "white" ? (
            <Heading as="h2" size="xl">
              <Text as="span" color="black">
                OUR PRODUCT
              </Text>{" "}
              <Text as="span" color="yellow.600">
                / SERVICES
              </Text>
            </Heading>
          ) : (
            <Heading as="h2" size="xl" color="white">
              Services We Do
            </Heading>
          )}
          <Box bg="white" h="2px" w="100px" borderRadius="md" />
        </VStack>

        {/* Custom Description */}
        {!backgroundImage && cardBackground === "white" && (
          <Box textAlign="center" mb={10}>
            <Text fontSize="lg" color="black">
              At [Company Name], we specialize in providing comprehensive civil and interior decoration services tailored to meet the unique needs of each client. From conceptual design to final execution, our dedicated team of architects, designers, and craftsmen collaborates closely with clients to transform spaces into inspiring environments.
            </Text>
          </Box>
        )}

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              bg={cardBackground}
              shadow="md"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Box position="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bg="rgba(0, 0, 0, 0.5)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.3s"
                >
                  <Link href="#" color="white" fontSize="2xl">
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </Link>
                </Box>
              </Box>
              <Box p={4} textAlign="center">
                <Heading as="h3" color={'yellow.600'} size="md" mb={2}>
                  {service.title}
                </Heading>
                <Text fontSize="sm" color={descriptionColor}>
                  {service.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Conditionally render "View More" button */}
        {backgroundImage && (
          <Box textAlign="center" mt={10}>
            <Link href="/services">
              <Button
                bg="yellow.600"
                color="white"
                px={6}
                py={4}
                _hover={{ bg: "teal.600" }}
              >
                View More
              </Button>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Services;

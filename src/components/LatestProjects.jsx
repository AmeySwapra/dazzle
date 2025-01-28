import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import pic1 from '../assets/projects/pic1.png'
import pic2 from '../assets/projects/pic2.jpg'
import pic3 from '../assets/projects/pic3.png'
import pic4 from '../assets/projects/pic4.png'
import pic5 from '../assets/projects/pic5.jpg'
import pic6 from '../assets/projects/pic6.jpeg'
import pic7 from '../assets/projects/pic7.jpeg'
import pic8 from '../assets/projects/pic8.jpeg'
const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Corporate",
    image: pic1,
  },
  {
    id: 2,
    title: "Modern Living Room",
    category: "Residential",
    image: pic2,
  },
  {
    id: 3,
    title: "Modern Living Room",
    category: "Residential",
    image: pic3,
  },
  {
    id: 4,
    title: "Modern Living Room",
    category: "Residential",
    image: pic4,
  },
  {
    id: 5,
    title: "Modern Living Room",
    category: "Residential",
    image: pic5,
  },
  {
    id: 6,
    title: "Modern Living Room",
    category: "Residential",
    image: pic6,
  },
  {
    id: 7,
    title: "Modern Living Room",
    category: "Residential",
    image: pic7,
  },
  {
    id: 8,
    title: "Modern Living Room",
    category: "Residential",
    image: pic8,
  },
];

const LatestProjects = () => {
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 4 });

  return (
    <Box px={{base: 4, md: 8, lg: 24}} py={10}>
      <Container maxW="container.xl">
        <VStack align="flex-start" mb={8}>
          <Heading as="h2" size="xl">
            Latest <Text as="span" color="yellow.600">Projects</Text>
          </Heading>
          <Box w={"50px"} h={"3px"} bg="yellow.600" />
        </VStack>

        <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={6}>
          {projects.map((project) => (
            <GridItem
              key={project.id}
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
              position="relative"
              _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
            >
              <Box position="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  width="100%"
                  height={{ base: "200px", md: "250px" }}
                  filter="brightness(0.8)"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="blackAlpha.600"
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="0.3s ease-in-out"
                >
                  <VStack color="white" textAlign="center">
                    <Link href="#" fontSize="lg" color={'yellow.600'} fontWeight="bold">
                      {project.title}
                    </Link>
                    <Text>{project.category}</Text>
                    <Box as={Link} href="#" fontSize="2xl">
                      <FaCamera />
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestProjects;

import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import pic1 from '../assets/images/s1.jpg'
  import pic2 from '../assets/images/s2.jpg'
  import pic3 from '../assets/images/s3.jpg'
  const About = () => {
    const [activeImage, setActiveImage] = useState(0);
  
    const images = [pic1, pic2, pic3];
  
    const handleImageChange = (index) => {
      setActiveImage(index);
    };
  
    return (
      <Box px={{base: 4, md: 8, lg: 20}}  py="10">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            alignItems="center"
          >
            
            <GridItem>
              <Box position="relative">
                <Image
                  src={images[activeImage]}
                  alt="Carousel Image"
                  borderRadius="md"
                  height={{ base: "200px", md: "341px" }}
                  width="100%"
                  objectFit="cover"
                />
                <Box display="flex" justifyContent="center" mt={4}>
                  {images.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => handleImageChange(index)}
                      cursor="pointer"
                      mx={1}
                      width="12px"
                      height="12px"
                      borderRadius="full"
                      bg={activeImage === index ? "gray.800" : "gray.300"}
                      transition="background-color 0.3s ease"
                    ></Box>
                  ))}
                </Box>
              </Box>
            </GridItem>
  
            {/* Right Section: Text */}
            <GridItem>
              <Box>
                <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
                  About <Box as="span" color="#d5ac63">Us</Box>
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} mb={6} lineHeight="tall">
                  We are a company offering a wide range of services. Comprehensive Architectural Services, Complete
                  Interior design Solutions, Redevelopment of Residential and Commercial Buildings, Renovation of existing
                  structures, Environment clearance consultancy, Green Building Certificate Facilitation, Solar Power
                  Plant (EPC), Land development, Contracting, 3D Modelling, and Rendering are a few to pen down. <br />
                  <br />
                  For our client or customer, we deliver the best services "at an affordable price." Our objective is to
                  create innovative, ecologically sustainable, and aesthetically pleasing spaces.
                </Text>
                <Heading as="h4" fontSize="lg" mb={4}>
                  Our experts let you choose the best, making your space the most stunning and desirable among all.
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  We value our clients and are always available at your service for any kind of commercial interior design
                  services.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default About;
  
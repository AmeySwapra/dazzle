import { Box, Container, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';

const WelcomeSection = () => {
  return (
    <Box as="section" py={10} px={{base:4, md: 8, lg: 20}} overflowX={'hidden'}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" wrap="wrap">
          {/* Left Section */}
          <Box flex={{ base: 1, md: 1 }} mb={{ base: 8, md: 0 }}>
            <Heading id="next" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="short">
              Welcome to <span style={{ color: "#d5ac63" }}>Interior</span>
            </Heading>
            <Flex justify="center" align="center" mt={2}>
          <Box
            position="relative"
            width="110px"
            height="2px"
            bg="#d5ac63"
            display="inline-block"
            left="-230px"
          >
            <Box
              position="absolute"
              content=""
              height="8px"
              width="8px"
              bg="#d5ac63"
              borderRadius={'50%'}
              transform="rotate(45deg)"
              top="-3px"
              left="0"
            />
          </Box>
        </Flex>
            <Text mt={4} fontSize="lg">
              We are one of the better Interior designer firms since 2013.
            </Text>
            <Text mt={4}>
              Interior brings 12 years of interior design experience right to your home or office. Our design
              professionals are equipped to help you determine the products and design that work best for our
              customers within the colors and lighting of your surroundings more than your expectation.
            </Text>
            <Text mt={4}>
              Since our meetings take place in your home or office, we’ll work with you to help visualize a
              design solution that aligns with your taste, space, and budget. Our team will guide you.
            </Text>
            <Flex mt={6} direction={{ base: "column", sm: "row" }} align="center">
              <Button as="a" href="/about" bg={'#d5ac63'} color={'white'} size="lg" mr={{ sm: 4 }} mb={{ base: 4, sm: 0 }}>
                More About Us
              </Button>
              <Box>
                <Text fontSize="lg">
                  Request Quote:{" "}
                  <span style={{ color: "#d5ac63" }}>
                    Salleel@salleeldeshpande.com, pankaj@salleeldeshpande.com
                  </span>
                </Text>
              </Box>
            </Flex>
          </Box>

          
          <Box flex={{ base: 1, md: 1 }} mt={{ base: 8, md: 0 }} position="relative">
            <Flex wrap="wrap" gap={4} position="relative">
              
              <Box 
                flex={{ base: "50%", sm: "50%", md: "50%" }}
             
                overflow="hidden"
                position="relative"
                zIndex={1}
              >
                <Image src={pic1} alt="Awesome Video Gallery" border='8px solid #f7f7f7' w="70%" h="auto" />
              </Box>

             
              <Box
                flex={{ base: "50%", sm: "50%", md: "50%" }}
                overflow="hidden"
                position="absolute"
                bottom={0}
                right={0}
                transform="translate(30%, 20%)"
                zIndex={0}
                width={{ base: "none", sm: "70%", md: "60%" }} 
              >
                <Image src={pic2} alt="Awesome Image" w="80%" h="auto" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default WelcomeSection;



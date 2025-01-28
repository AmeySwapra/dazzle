import { Box, Container, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMissionSection = () => {
  return (
    <Box as="section" py={10} px={{base: 4, md: 8, lg: 24}} bg="white">
      <Container maxW="container.xl">
        {/* Section Title */}
        <Box textAlign="center" mb={8}>
          <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} color="black">
            Our <span style={{ color: "black" }}>Vision</span>/
            <span style={{ color: "#d5ac63" }}>Mission</span>
          </Heading>
          <Box
            w="80px"
            h="2px"
            bg="#d5ac63"
            mx="auto"
            mt={2}
          ></Box>
        </Box>

        {/* Vision & Mission Cards */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={6}
        >
          {/* Vision Card */}
          <Box
            flex="1"
            p={6}
            borderRadius="10px"
            border="1px solid #d5ac63"
            boxShadow="0px 5px 0px 0px #d5ac63"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Icon as={FaEye} w={8} h={8} color="black" />
              <Heading as="h3" fontSize="xl" color="black">
                Vision
              </Heading>
              <Text color="black" fontSize="md">
                "To be the premier provider of innovative, sustainable, and aesthetically pleasing civil and interior
                decoration solutions, enhancing spaces that inspire and endure."
              </Text>
            </VStack>
          </Box>

          {/* Mission Card */}
          <Box
            flex="1"
            p={6}
            borderRadius="10px"
            border="1px solid #d5ac63"
            boxShadow="0px 5px 0px 0px #d5ac63"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Icon as={FaBullseye} w={8} h={8} color="black" />
              <Heading as="h3" fontSize="xl" color="black">
                Mission
              </Heading>
              <Text color="black" fontSize="md">
                "Our mission is to deliver exceptional civil and interior decoration solutions through meticulous
                craftsmanship, creative innovation, and sustainable practices. We strive to exceed client expectations
                by fostering collaborative relationships, ensuring quality craftsmanship, and maintaining a commitment
                to environmental responsibility."
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default VisionMissionSection;

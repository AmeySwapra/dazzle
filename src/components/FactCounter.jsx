import React, { useState } from "react";
import { Box, Grid, Text, VStack, Flex, Container } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaProjectDiagram, FaSmile, FaUsers, FaClock } from "react-icons/fa";

const FactCounter = () => {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setStartCount(true);
      }
    },
  });

  const facts = [
    { icon: FaProjectDiagram, value: 500, label: "Projects Worked" },
    { icon: FaSmile, value: 450, label: "Happy Clients" },
    { icon: FaUsers, value: 356, label: "Team Members" },
    { icon: FaClock, value: 4874, label: "Hours of Work" },
  ];

  return (
    <Box bg="yellow.100" px={{base: 4, md: 8, lg: 20}} py={16} ref={ref}>
      <Container maxW="container.xl">
        {/* Section Title */}
        <Box textAlign="center" mb={8}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={2}>
            Interesting Facts
          </Text>
          <Box bg="yellow.400" height="2px" width="100px" mx="auto" />
        </Box>

       
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
        >
          {/* Text Block */}
          <Box
            flex={1}
            p={4}
            bg="white"
            borderRadius="md"
            shadow="md"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={{ base: "sm", md: "md" }}>
              Interior design involves much more than just a good knowledge of décor. Don’t expect that all
              decisions on an interior design project would be made by the designer you have hired. See more facts.
            </Text>
          </Box>

          {/* Counter Cards */}
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
            flex={2}
          >
            {facts.map((fact, index) => (
              <Box
                key={index}
                bg="white"
                boxShadow="md"
                borderRadius="lg"
                textAlign="center"
                p={6}
                _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <VStack spacing={4}>
                  <Box
                    as={fact.icon}
                    size="40px"
                    color="yellow.500"
                    boxSize="50px"
                  />
                  <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                    {startCount ? (
                      <CountUp end={fact.value} duration={2.5} />
                    ) : (
                      0
                    )}
                    +
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    {fact.label}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default FactCounter;


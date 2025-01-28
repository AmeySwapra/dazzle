import { Box, Heading, Text } from "@chakra-ui/react";

const CostOfConstruction = ({ city, price }) => {
  return (
    <Box
      textAlign="center"
     
      px={{ base: 4, md: 8, lg: 20 }}
      bg={'#e7d6b9'}
      py={{ base: 6, md: 10 }}
    >
      <Heading
        as="h2"
        fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
        fontWeight="bold"
        color="#2c3e50"
        lineHeight="1.5"
      >
        WHAT IS THE COST OF HOUSE CONSTRUCTION IN {city.toUpperCase()}?
      </Heading>

      <Text
        fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}
        color="#34495e"
        mt={4}
        lineHeight="1.6"
      >
        House Construction Cost in {city} starts from Rs. {price} per sqft of
        buildup area (Total slab area). We have prepared 3 different packages
        that help you understand the detailed specifications and pricing. You
        can choose from these Packages or use our House Construction Cost
        Calculator to arrive at a costing for your customized requirements.
      </Text>
    </Box>
  );
};

export default CostOfConstruction;

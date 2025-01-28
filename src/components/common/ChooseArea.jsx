import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react';

const ChooseArea = () => {
  return (
    <Box py={{ base: '20px', md: '40px' }} px={{base: 4, md: 8, lg: 24}} bg="#f8f9fa">
      <Container maxW="6xl">
        <SimpleGrid columns={1} spacing={8}>
          <Box textAlign="center" p={{ base: '4', md: '6' }} borderRadius="md" boxShadow="md" bg="white">
            <Text fontSize={{ base: '14px', md: '16px' }} color="gray.600">
              House Construction Cost in Pune starts from Rs. 1449/- per sqft of buildup area (Total slab area). We have created 3 Standard House Construction Packages city-wise that helps you understand the detailed specifications and the pricing in that city. You can alternatively use this calculator to arrive at the pricing for your custom requirements.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ChooseArea;

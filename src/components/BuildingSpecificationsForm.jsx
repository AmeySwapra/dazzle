import { Box, Button, FormControl, FormLabel, Heading, Input, Select, Stack, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

const BuildingSpecificationsForm = () => {
  return (
    <Box py={5} bg="#f8f9fa"  px={{ base: 4, md: 6 ,lg : 24}}>
      <Box
        maxW="5xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 8, md: 10 }}
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        minH="100vh"
        display="flex"
        alignItems="center"
      >
        <Stack spacing={6} w="100%">
          <Heading as="h2" size="lg" textAlign="center" color="gray.700" fontWeight="bold">
            Building Specifications
          </Heading>

          <form  action="#" method="post">
            <FormControl mb={4}>
              <FormLabel htmlFor="form_area">Plinth Area / Slab Area (in sq ft)</FormLabel>
              <Input
                type="number"
                id="form_area"
                name="form_area"
                placeholder="Enter area in sq ft"
                min="0"
                value="1000"
                required
                textAlign="center"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="form_floors">Number of Floors (Including Basement)</FormLabel>
              <Select name="form_floors" id="form_floors" placeholder="Select number of floors">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="form_parking">Covered Parking</FormLabel>
              <Select name="form_parking" id="form_parking">
                <option value="No">No</option>
                <option value="Single Car Parking">Single Car Parking</option>
                <option value="Stilt Floor Parking">Stilt Floor Parking</option>
              </Select>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="form_city">City</FormLabel>
              <Select name="form_city" id="form_city">
                <option value="Pune">Pune</option>
                <option value="Nanded">Nanded</option>
                <option value="Satara">Satara</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </Select>
            </FormControl>

            <FormControl textAlign="center">
              <Button
               
                name="next"
                colorScheme="blue"
                size="lg"
                px={8}
                py={4}
                borderRadius="md"
                fontSize={{ base: 'sm', md: 'md' }}
                _hover={{ bg: 'blue.600' }}
              >
                Next
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default BuildingSpecificationsForm;

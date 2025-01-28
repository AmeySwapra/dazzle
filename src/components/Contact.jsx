import { Box, Container, SimpleGrid, Text, FormControl, FormLabel, Input, Textarea, Button, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaBuilding, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box py={10} px={{base:4, md: 8, lg: 24}}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb="40px">
          <Text fontSize={{ base: '24px', md: '32px', lg: '58px' }} fontWeight="bold">
            Get in Touch with Us
          </Text>
          <Text fontSize={{ base: '14px', sm: '16px', md: '18px' }} color="gray.600" >
            If you would like to get in contact with us, you can call or mail us using the options below.
          </Text>
          <Text fontSize={{ base: '14px', sm: '16px', md: '18px' }} color="gray.600">
            Our team will support you as soon as possible.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
              <Box>
                <Box display="flex" alignItems="center" mb="6">
                  <Icon as={FaBuilding} boxSize={6} color="yellow.600" mr="4" />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">Address:</Text>
                    <Text fontSize="sm" color="gray.600">
                      Flat no 4, 3rd floor, Vasant Vihar apartments, plot no 10, Lane no.1, Ideal Colony, Kothrud Pune 411038<br />
                      Regd office: 301, B wing Westend Residency CHS s.no 78p to 82p behind RMD Sinhagad institute Warje Pune 411058
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box display="flex" alignItems="center" mb="6">
                  <Icon as={FaPhone} boxSize={6} color="yellow.600" mr="4" />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">Phone:</Text>
                    <Text fontSize="sm" color="gray.600">
                      <a href="tel:+917757844398" style={{ color: '#000' }}>Call +91 77578 44398</a>
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box display="flex" alignItems="center" mb="6">
                  <Icon as={FaEnvelope} boxSize={6} color="yellow.600" mr="4" />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">Email Address:</Text>
                    <Text fontSize="sm" color="gray.600">
                      <a href="mailto:pankaj@salleeldeshpande.com" style={{ color: '#000' }}>pankaj@salleeldeshpande.com</a>
                    </Text>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Box>
            <Box
              as="form"
              action="#"
              method="post"
              bg="white"
              p="6"
              borderRadius="lg"
              boxShadow="md"
            >
              <FormControl isRequired mb="4">
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  name="form_name"
                  placeholder="Your Name*"
                  pattern="[A-Za-z\s]+"
                  title="Please enter only letters and spaces"
                />
              </FormControl>

              <FormControl isRequired mb="4">
                <FormLabel>Your Email</FormLabel>
                <Input type="email" name="form_email" placeholder="Your Email*" />
              </FormControl>

              <FormControl isRequired mb="4">
                <FormLabel>Phone</FormLabel>
                <Input
                  type="text"
                  name="form_phone"
                  id="phone"
                  placeholder="Phone"
                  maxlength="10"
                  pattern="\d{10}"
                  title="Please enter a 10-digit phone number"
                />
              </FormControl>

              <FormControl isRequired mb="4">
                <FormLabel>Your Message</FormLabel>
                <Textarea name="form_message" placeholder="Your Message..." />
              </FormControl>

              <Box textAlign="center">
                <Button
                  type="submit"
                  bg="yellow.600"
                  color="white"
                  _hover={{ bg: 'yellow.400' }}
                  width="full"
                  mt="4"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactSection;

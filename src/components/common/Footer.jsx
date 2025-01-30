import React from "react";
import {
  Box,
  Container,
  Grid,
  Text,
  Link,
  IconButton,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import footerbg from "../../assets/bg/footer.jpg";
import logo from '../../assets/logo/footer-logo.png';
const Footer = () => {
  return (
    <Box
      as="footer"
      background={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${footerbg})`}
      backgroundSize="cover"
      backgroundPosition="center" 
      backgroundRepeat="no-repeat"
      py={10}
      position="relative"
      px={{base:4, md: 8, lg: 20}}
      overflowX={'hidden'}
    >
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
          {/* Footer Logo and Info */}
          <Box>
            <VStack align="start" spacing={4}>
              <Image
                src={logo}
                alt="Awesome Footer Logo"
              />
              <Text color="white" fontSize="md">
                <span color='yellow'>Interrio</span> brings 41 years of interior designs
                experience right to your home or office. Our design
                professionals are equipped to help you determine the products
                and design that work best.
              </Text>
            </VStack>
          </Box>

          {/* Useful Links */}
          <Box>
            <Text color="white" fontWeight="bold" mb={4}>
              Useful Links
            </Text>
            <VStack align="start" spacing={2}>
              <Link color="white" fontSize="md">
                Home
              </Link>
              <Link color="white" fontSize="md">
                About Us
              </Link>
              <Link color="white" fontSize="md">
                Service
              </Link>
              <Link color="white" fontSize="md">
                Project
              </Link>
              <Link color="white" fontSize="md">
                Contact Us
              </Link>
            </VStack>
          </Box>

          {/* Services */}
          <Box>
            <Text color="white" fontWeight="bold" mb={4}>
              Services
            </Text>
            <VStack align="start" spacing={2}>
              <Link color="white" fontSize="md">
                Conceptual Design
              </Link>
              <Link color="white" fontSize="md">
                Interior Decoration
              </Link>
              <Link color="white" fontSize="md">
                Civil Construction
              </Link>
              <Link color="white" fontSize="md">
                Project Management
              </Link>
              <Link color="white" fontSize="md">
                Sustainable Practices
              </Link>
            </VStack>
          </Box>

          {/* Contact Information */}
          <Box>
            <Text color="white" fontWeight="bold" mb={4}>
              Contact
            </Text>
            <VStack align="start" spacing={4}>
              <Text color="white" fontSize="md">
                <strong>Address:</strong> Flat no 4, 3rd floor, Vasant Vihar
                apartments, plot no 10, Lane no.1, Ideal Colony, Kothrud Pune
                411038. <br />
                Regd office: 301, B wing Westend Residency CHS s.no 78p to 82p
                behind RMD Sinhagad institute Warje Pune 411058
              </Text>
              <Text color="white" fontSize="md">
                <strong>Phone:</strong>{" "}
                <Link href="tel:+917757844398" color="white">
                  +91 77578 44398
                </Link>
              </Text>
              <Text color="white" fontSize="md">
                <strong>Email:</strong>{" "}
                <Link href="mailto:Salleel@salleeldeshpande.com" color="white">
                  Salleel@salleeldeshpande.com
                </Link>
              </Text>
            </VStack>
          </Box>
        </Grid>
      </Container>

      {/* WhatsApp Button */}
      <IconButton
        icon={<FaWhatsapp />}
        aria-label="WhatsApp"
        position="fixed"
        bottom={80}
        right={5}
        zIndex="99"
        size="lg"
        bg="#80cd27"
        color="white"
        borderRadius="50%"
        boxShadow="0 0 5px #232323"
        as="a"
        href="#"
        
      />

      {/* Phone Call Button */}
      <IconButton
        icon={<FaPhone />}
        aria-label="Phone"
        position="fixed"
        bottom={78}
        left={5}
        zIndex="99"
        size="lg"
        bg="#275acd"
        color="white"
        borderRadius="50%"
        boxShadow="0 0 5px #232323"
        as="a"
        href="#"
        
      />
    </Box>
  );
};

export default Footer;

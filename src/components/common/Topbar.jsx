import React from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  List,
  ListItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const TopBar = () => {
  return (
    <Box bg="gray.800" overflowX={'hidden'} color="white" px={{base: 4, md: 8, lg: 20}} py={2}>
      <Container maxW="container.xl">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={4}
        >
          {/* Contact Info Left */}
          <Flex gap={6} flexWrap="wrap" alignItems="center">
            <Flex alignItems="center" gap={2}>
              <Icon as={EmailIcon} color="yellow.600" />
              <Link href="mailto:pankaj@salleeldeshpande.com" color="white">
                pankaj@salleeldeshpande.com
              </Link>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <Icon as={PhoneIcon} color="yellow.600" />
              <Link href="tel:+919765519333" color="white">
                +91 97655 19333
              </Link>
            </Flex>
            <Link href="floor_plans.php" color="white">
              Sample Floor Plans
            </Link>
          </Flex>

          {/* Social Media Links */}
          <Flex gap={4}>
            <Link
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaFacebook} boxSize={5}  />
            </Link>
            <Link
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaTwitter} boxSize={5}  />
            </Link>
            <Link
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaInstagram} boxSize={5}  />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={FaLinkedin} boxSize={5}  />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopBar;

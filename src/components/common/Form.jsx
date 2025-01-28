import React from "react";
import {
  Box,
  Select,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";

const Form = () => {
  const redirectToLink = (event) => {
    const url = event.target.value;
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="center"
      align="center"
      gap={6}
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 8, lg: 20 }}
      bg={"#e7d6b9"}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        p={6}
        bg="white"
        borderRadius="10px"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)"
        textAlign="center"
      >
        <Heading fontSize="1.2rem" color="#2c3e50" mb={4}>
          Select City to View House Construction Cost
        </Heading>
        <Text color="#3498db" fontSize="1rem" fontWeight="bold" mb={4}>
          Choose City
        </Text>
        <Select
          placeholder="Select a city"
          onChange={redirectToLink}
          size="md"
          bg="white"
          borderColor="gray.300"
          borderRadius="5px"
          p={2}
        >
          <option value="chhatrapati-sambhajinagar">
            Chhatrapati Sambhaji Nagar
          </option>
          <option value="mumbai">Mumbai</option>
          <option value="pune">Pune</option>
          <option value="aurangabad">Aurangabad</option>
          <option value="solapur">Solapur</option>
        </Select>
      </Box>

      {/* Right Section */}
      <Box
        w={{ base: "100%", md: "50%" }}
        p={6}
        bg="white"
        borderRadius="10px"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)"
      >
        <Heading fontSize="1.2rem" textAlign="center" color="#2c3e50" mb={6}>
          Designing Future, Shaping Dreams
        </Heading>
        <form action="#" method="post">
          <Input
            name="form_name"
            placeholder="Your Name"
            pattern="[A-Za-z\s]+"
            title="Please enter only letters and spaces"
            required
            mb={4}
            p={3}
            borderColor="gray.300"
            borderRadius="5px"
            fontSize="1rem"
          />
          <Input
            name="form_phone"
            placeholder="Phone"
            type="tel"
            maxLength="10"
            pattern="\d{10}"
            title="Please enter a 10-digit phone number"
            required
            mb={4}
            p={3}
            borderColor="gray.300"
            borderRadius="5px"
            fontSize="1rem"
          />
          <Textarea
            name="form_message"
            placeholder="Your Message..."
            required
            mb={4}
            p={3}
            borderColor="gray.300"
            borderRadius="5px"
            fontSize="1rem"
            resize="none"
          />
          <Input name="form_botcheck" type="hidden" value="" />
          <Flex justify="center">
            <Button
              type="submit"
              bg="#3498db"
              color="white"
              fontSize="1.1rem"
              p={6}
              borderRadius="5px"
              _hover={{ bg: "#2879b9" }}
            >
              Get Started
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Form;

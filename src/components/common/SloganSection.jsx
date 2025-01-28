import { Box, Container, Text } from "@chakra-ui/react";
import sloganbg from "../../assets/bg/slogan.jpg";

const SloganSection = ({ text }) => {
  return (
    <Box
      background={`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${sloganbg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py={16}
      px={{ base: 4, md: 8, lg: 24 }}
    >
      <Container maxW="container.xl">
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          color="yellow.600"
          lineHeight="tall"
          _hover={{
            transform: "scale(1.05)",
            transition: "0.5s",
            color: "white",
          }}
        >
          {text}
        </Text>
      </Container>
    </Box>
  );
};

export default SloganSection;

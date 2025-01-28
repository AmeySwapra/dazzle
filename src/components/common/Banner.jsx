import { Box, Heading } from "@chakra-ui/react";

const Banner = ({ imageUrl, title }) => {
  return (
    <Box position="relative" height="300px" overflow="hidden">
      <Box
        height="100%"
        backgroundImage={`url(${imageUrl})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      ></Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.4)"
        zIndex={1}
      ></Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="whiteAlpha.900"
        zIndex={2}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", lg: "4xl" }}
          fontWeight="bold"
          color="whiteAlpha.900"
        >
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default Banner;

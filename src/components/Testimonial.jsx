import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Icon,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import testimonialbg from "../assets/bg/testimonial.jpg";
import man from "../assets/logo/man.png";
import gallery from "../assets/images/gallery.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    clientName: "Ashish Patil",
    feedback:
      "Today we can tell you, thanks to your passion, hard work, creativity, and expertise, you delivered us the most beautiful house ever! It’s been a beautiful ride with ups and downs, but the results are fantastic.",
    clientImage: man,
    projectImage: gallery,
    rating: 5,
  },
  {
    id: 2,
    clientName: "Karan Rane",
    feedback:
      "Thank you for creating the most beautiful and functional house for us! Your team's dedication and creativity were outstanding.",
    clientImage: man,
    projectImage: gallery,
    rating: 5,
  },
  {
    id: 3,
    clientName: "Rohan Jagtap",
    feedback:
      "A big thank you for your passion and expertise. We now have a beautiful house that exceeded our expectations.",
    clientImage: man,
    projectImage: gallery,
    rating: 5,
  },
];

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box
      bgImage={`url(${testimonialbg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={16}
      px={8}
    >
      {/* Section Header */}
      <Box textAlign="center" color="white" mb={10}>
        <Heading size="lg" mb={4}>
          Customers <span style={{ color: "#FFD700" }}>Feedback</span>
        </Heading>
        <Box height="2px" bg="white" width="80px" mx="auto" />
      </Box>

      {/* Testimonial Slider */}
      <Box maxW="1200px" mx="auto" overflow="hidden">
  <Slider {...sliderSettings}>
    {testimonials.map((testimonial) => (
      <Flex
        key={testimonial.id}
        direction={{ base: "column", md: "row" }}
        bg="white"
        p={6}
        rounded="lg"
        boxShadow="lg"
        align="center"
        mx={4}
        gap={6}
      >
        {/* Image Section */}
        <Box flex={{ base: "1", md: "0.4" }} position="relative" w="100%">
          <Image
            src={testimonial.projectImage}
            alt="Project"
            rounded="lg"
            w="100%"
            maxH="300px"
            objectFit="cover"
          />
          <Image
            src={testimonial.clientImage}
            alt="Client"
            boxSize="100px"
            rounded="full"
            border="4px solid white"
            position="absolute"
            bottom="-40px"
            left="50%"
            transform="translateX(-50%)"
            zIndex="1"
          />
        </Box>

        {/* Text Section */}
        <Stack flex="1" spacing={4} px={4}>
          <Text fontSize="lg" fontStyle="italic" color="gray.700">
            {testimonial.feedback}
          </Text>
          <Flex align="center" mt={2}>
            <Heading size="sm" mr={2}>
              {testimonial.clientName}
            </Heading>
            <Flex>
              {Array(testimonial.rating)
                .fill("")
                .map((_, index) => (
                  <Icon as={FaStar} key={index} color="gold" />
                ))}
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    ))}
  </Slider>
</Box>


    </Box>
  );
};

export default Testimonial;

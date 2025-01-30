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
import testimonialbg from "../../assets/bg/testimonial.jpg";
import man from "../../assets/logo/man.png";
import gallery from "../../assets/images/gallery.jpg";
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
      background={`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${testimonialbg})`}
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
              py={10}
              px={{ base: 4, md: 8, lg: 24 }}
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              gap={10}
            >
              {/* Left Section (Image & Client Info) */}
              <Box flex="1" textAlign="center">
                {/* <Image
                  src={testimonial.projectImage}
                  mb={6}
                  alt="project image"
                  borderRadius="md"
                  objectFit="cover"
                  maxW="100%"
                  
                  
                /> */}
                <Flex align="center" justify="center" gap={4}>
                  <Image
                    src={testimonial.clientImage}
                    w={"80px"}
                    borderRadius={"full"}
                    alt="client image"
                  />
                  <Box textAlign="left">
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"whiteAlpha.900"}
                    >
                      {testimonial.clientName}
                    </Text>
                    <Flex>
                      {Array(testimonial.rating)
                        .fill("")
                        .map((_, index) => (
                          <Icon as={FaStar} key={index} color="gold" />
                        ))}
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              {/* Right Section (Testimonial Feedback) */}
              <Box flex="2" textAlign="left">
                <Text
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="medium"
                  color="whiteAlpha.900"
                  lineHeight="1.6"
                >
                  {testimonial.feedback}
                </Text>
              </Box>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonial;

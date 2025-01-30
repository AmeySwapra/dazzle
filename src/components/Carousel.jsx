import { Box, Image, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/silder2.jpg";
import slider3 from "../assets/images/silder3.jpg";

const images = [slider1, slider2, slider3];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <Box w="full" maxW="100vw" overflow="hidden" position="relative">
      {/* Buttons Container */}
      <HStack
        position="absolute"
        left={{ base: "50%", md: "10%", lg: "20%" }} 
        top="50%"
        transform="translate(-50%, -50%)"
        spacing={6} 
        zIndex="10"
        align="center"
      >
        <Button
          w={{ base: "120px", md: "180px", lg: "220px" }}
          h={{ base: "35px", md: "45px", lg: "50px" }}
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          bg="yellow.600"
          color="white"
          _hover={{ bg: "black" }}
          onClick={() => navigate("/services")}
        >
          Services
        </Button>
        <Button
          w={{ base: "120px", md: "180px", lg: "220px" }}
          h={{ base: "35px", md: "45px", lg: "50px" }}
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          bg="transparent"
          border="2px solid white"
          color="white"
          _hover={{ bg: "black", borderColor: "black" }}
          onClick={() => navigate("/gallery")}
        >
          Our Gallery
        </Button>
      </HStack>

      {/* Image Slider */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} p={0} m={0} textAlign="center">
            <Image
              src={src}
              alt={`slider-image-${index}`}
              w="100vw"
              h={{ base: "300px", md: "400px", lg: "500px" }} 
              objectFit="cover"
              borderRadius="0"
              display="block"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

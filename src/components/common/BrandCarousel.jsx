import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import pic1 from '../../assets/brand/pic1.png';
import pic2 from '../../assets/brand/pic2.png';
import pic3 from '../../assets/brand/pic3.png';
import pic4 from '../../assets/brand/pic4.png';
import pic5 from '../../assets/brand/pic5.png';
import pic6 from '../../assets/brand/pic6.png';
import pic7 from '../../assets/brand/pic7.png';
import pic8 from '../../assets/brand/pic8.png';
import pic9 from '../../assets/brand/pic9.png';
import pic10 from '../../assets/brand/pic10.png';
import pic11 from '../../assets/brand/pic11.png';

const BrandCarousel = () => {
  const brands = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box py={10}  bg="#d5ac63" px={{ base: 4, md: 8, lg: 20 }}>
      <Box maxW="1200px" mx="auto" px={4}>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <Flex key={index} justifyContent="center" alignItems="center" p={4}>
              <Image
                src={brand}
                alt={`Brand ${index + 1}`}
                boxSize="150px"
                objectFit="contain"
              />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default BrandCarousel;

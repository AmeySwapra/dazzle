import { Box, Image, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";

import pic1 from "../assets/gallery/pic1.jpg";
import pic2 from "../assets/gallery/pic2.jpg";
import pic3 from "../assets/gallery/pic3.jpg";
import pic4 from "../assets/gallery/pic4.jpg";
import pic5 from "../assets/gallery/pic5.jpg";
import pic6 from "../assets/gallery/pic6.jpg";

const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6];

const Gallery = () => {
  return (
    <Box id="gallery" mt="35px" px={{base: 4, md: 8, lg: 24}}>
      <Box className="container" mb="50px">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {galleryImages.map((src, index) => (
            <Box key={index} position="relative" overflow="hidden" borderRadius="md">
              <Link href={src} isExternal>
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="rgba(0, 0, 0, 0.5)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity="0"
                  transition="opacity 0.3s ease-in-out"
                  _hover={{ opacity: "1" }}
                >
                  <Icon as={FaPlusCircle} color="white" boxSize={8} />
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Gallery;

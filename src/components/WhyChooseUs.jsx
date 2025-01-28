import React from "react";
import { Box, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import pic1 from '../assets/images/time.png'
import pic2 from '../assets/images/pep.png'
import pic3 from '../assets/images/team.png'

const WhyChooseUs = () => {
  const content = [
    {
      title: "Why choose Us",
      description: `"At Architects And Consultants, we stand out as your preferred civil and interior decoration contractor because we combine expertise with innovation. With a dedicated team of skilled professionals, we ensure meticulous attention to detail and craftsmanship in every project. Our commitment to sustainability means we integrate eco-friendly practices into our designs and materials, contributing to a healthier environment. We prioritize client satisfaction through transparent communication, on-time delivery, and budget adherence, ensuring a seamless experience from concept to completion. Choose [Company Name] for excellence in design, reliability in execution, and a partner committed to transforming spaces into inspiring environments."`,
    },
    {
      title: "Delivery of Product on time",
      description: `"At Architects And Consultants, we understand the importance of delivering our services on time, every time. Our team is dedicated to meticulously planning and managing every project to ensure deadlines are met without compromising on quality. We prioritize clear communication and proactive scheduling to anticipate and address potential challenges, ensuring smooth project execution."`,
      image: pic1,
    },
    {
      title: "Increased Productivity",
      description: `A beautiful workplace leads to an increase in the work productivity of a place since the employees get more peace of mind & free space to work. Our services are designed beautifully, keeping in mind the client's need for how they can feel more comfortable.`,
    },
    {
      title: "Appealing Designs & Wide Varieties",
      description: `"At Architects And Consultants, we pride ourselves on our ability to create appealing designs and offer a wide variety of options to suit every taste and style. From contemporary elegance to timeless classics, our team of talented designers brings creativity and expertise to every project."`,
    },
    {
      title: "Convenient Price",
      description: `"At Architects And Consultants, we understand the importance of affordability without sacrificing quality. We strive to offer competitive pricing tailored to meet our clients' budgets, ensuring value-driven solutions that do not compromise on craftsmanship or materials."`,
    },
    {
      title: "The Talented Team Worker",
      description: `At Architects And Consultants, our success is driven by our exceptionally talented team of professionals. Comprising skilled architects, designers, craftsmen, and project managers, our team brings a wealth of experience and creativity to every project.`,
      image: pic3,
    },
    {
      title: "High Quality Raw Material",
      description: `"At Architects And Consultants, we believe that quality begins with the materials we use. We are committed to sourcing and utilizing only the finest materials available, ensuring durability, aesthetic appeal, and sustainability in every project."`,
    },
    {
      title: "Complete Quality Check",
      description: `"At Architects And Consultants, we are dedicated to maintaining the highest standards of quality in every aspect of our civil and interior decoration projects. Our rigorous quality assurance process ensures that each project undergoes thorough inspections at key stages, from planning to completion."`,
    },
    {
        title: "Complete Satisfaction & Happy Clients",
        description: `"At Architects And Consultants, client satisfaction is at the heart of everything we do. We prioritize open communication and collaboration with our clients, ensuring that their vision and needs are met throughout the project journey. Our team of dedicated professionals strives to deliver superior service, from initial consultation to final handover. We value feedback and continuously seek to improve our processes to enhance client experience and exceed their expectations. Choose [Company Name] for a partnership built on trust, reliability, and a commitment to transforming your vision into reality."`,
        image : pic2
      },
  ];

  return (
    <Box  px={{base: 4, md: 8, lg: 20}} py={10}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" textAlign="center" mb={10} color="black">
          Why <span style={{ color: "#d5ac63" }}>Choose Us</span>
        </Heading>
        <Stack spacing={10}>
          {content.map((item, index) => (
            <Flex
              key={index}
              direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
              align="center"
              gap={8}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  maxW={{ base: "100%", md: "40%" }}
                  borderRadius="lg"
                  boxShadow="lg"
                />
              )}
              <Box flex={1}>
                <Heading as="h3" size="lg" mb={4} color="black">
                  {item.title}
                </Heading>
                <Text color="gray.700" fontSize="md">
                  {item.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

import React, { useState } from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

const FAQAccordion = () => {
  return (
    <>
      <Heading
        as="h3"
        textAlign={"center"}
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={4}
      >
        HAPPHO{" "}
        <Box as="span" color="#d5ac63">
          “HAPPY HOMES PACKAGES”
        </Box>
      </Heading>
      <Box maxWidth="1200px" margin="0 auto" py={4}>
        <Accordion allowMultiple>
          {/* First Accordion Item */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    display="flex"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      1. Does Happho offer customized house construction
                      packages?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={4} border="1px solid #ddd">
                  Yes. All our customers get customized costs for home
                  construction as per their requirements. You can contact us for
                  an appointment to get a detailed quote for your house
                  construction.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Second Accordion Item */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "gray.100" }}
                    display="flex"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      2. What is the total cost of house construction?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={4} border="1px solid #ddd">
                  <Text>
                    The unit rate provided in the house construction packages
                    are based on buildup area (per sq.ft.).
                  </Text>
                  <Text mt={2}>
                    For example, if you choose the silver package specification
                    and the total build-up area (BUA) is 2000 sq.ft., then the
                    total cost of your construction would be = 2000 X 1599
                    (silver package at Pune) = Rs. 31,98,000/- only.
                  </Text>
                  <Text mt={2}>
                    Similarly, if you choose specifications from the Premium
                    package (Platinum) and the total build-up area is 1500
                    sq.ft., then the total cost of the Platinum home package
                    would be = 1500 X 2599 (platinum package at Pune) = Rs.
                    38,98,500/- only.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={4}>
                <Box as="span" flex="1" textAlign="left">
                  3. How is built up area calculated by Happho?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Built up Area is the total area of construction to be done.
                Built up area = Total area of Slab to be constructed + Total
                ground floor area (Plinth Area)
              </Text>
              <Text fontWeight="bold" mt={2}>
                Note:
              </Text>
              <Text>
                If Ground Floor has parking area, then the built-up area for
                parking is considered 70% only.
              </Text>
              <Text mt={2}>
                Example: If you are constructing a G+2 building with ground
                floor parking and a floor area of 1000 Sq.ft. each, then the
                built-up area would be:
              </Text>
              <Text>
                Built-up area = 1000 * 0.7 (For Parking) + 1000 (For First
                Floor) + 1000 (For Second Floor) + 100 (staircase slab) = 2800
                Sq.ft (all slab areas)
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* FAQ 2 */}
          <AccordionItem>
            <h2>
              <AccordionButton p={4}>
                <Box as="span" flex="1" textAlign="left">
                  4. What does the "home construction package price" include?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                The home package price includes complete turnkey construction
                solutions which include architectural, structural & services
                drawings, procurement of materials as per individual package
                specifications/brands, and labor cost for the entire house
                construction.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* FAQ 3 */}
          <AccordionItem>
            <h2>
              <AccordionButton p={4}>
                <Box as="span" flex="1" textAlign="left">
                  5. What does the "home construction package price" exclude?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Grills, Marble sills, External development like Compound Wall,
                Driveways, Building Gate, and External beautification.
              </Text>
              <Text>
                We shall quote for External Development separately before the
                entire contract is frozen and agreed.
              </Text>
              <Text>
                All statutory (government & local bodies) requirements to carry
                out or Liaisoning Costs.
              </Text>
              <Text>
                We shall quote a separate rate for Liaisoning Charges once the
                architectural design is done.
              </Text>
              <Text>
                Bore well, Lift, Electrical fittings (Fans, bulbs, etc.) and
                State Electricity Board Meter.
              </Text>
              <Text>
                Individual items shall be quoted as a separate rate quote as per
                customer request.
              </Text>
              <Text fontWeight="bold">Note:</Text>
              <Text>Exclusion quote would be extra above package cost.</Text>
            </AccordionPanel>
          </AccordionItem>

          {/* FAQ 4 */}
          <AccordionItem>
            <h2>
              <AccordionButton p={4}>
                <Box as="span" flex="1" textAlign="left">
                  6. Are there any hidden costs (i.e. transportation, drawing
                  plans, etc.)?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                No, there are no hidden costs. All costs for
                transportation/material delivery, drawing plans, structural and
                services design, etc., are included in the package cost.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default FAQAccordion;

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Image,
  Heading,
  Box,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import pdfFile from "../../../public/files/HappyHomesPackages.pdf";
import { useRef } from "react";

const HappyHomesPackages = () => {
  const tableRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 576px)");

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "HappyHomesPackages.pdf";
    link.click();
  };

  return (
    <>
      <Box px={{ base: 4, md: 8, lg: 20 }} py="10">
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
        <Table
          ref={tableRef}
          variant="simple"
          border={"1px solid gray"}
          display={isMobile ? "none" : "block"}
        >
          <TableCaption>HAPPHO “HAPPY HOMES PACKAGES”</TableCaption>
          <Thead>
            <Tr>
              <Th border={"1px solid #999999"}></Th>
              <Th bg={"#d3f5ff"} border={"1px solid #999999"}>
                Silver
              </Th>
              <Th border={"1px solid #999999"} bg={"#e3f7b2"}>
                Gold
              </Th>
              <Th border={"1px solid #999999"} bg={"#ffc7a7"}>
                Platinum
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td border={"1px solid #999999"}></Td>
              <Td
                className="silver"
                bg={"#d3f5ff"}
                border={"1px solid #999999"}
              >
                <Image
                  src="https://happho.com/wp-content/uploads/2023/11/home1-1.png"
                  alt="Silver Home"
                  width="64px"
                  height="64px"
                />
                <Text>@ ₹ 1599/- per sq. ft</Text>
              </Td>
              <Td className="gold" border={"1px solid #999999"} bg={"#e3f7b2"}>
                <Image
                  src="https://happho.com/wp-content/uploads/2023/11/home2-2.png"
                  alt="Gold Home"
                  width="64px"
                  height="64px"
                />
                <Text>@ ₹ 1999/- per sq. ft</Text>
              </Td>
              <Td
                className="platinum"
                border={"1px solid #999999"}
                bg={"#ffc7a7"}
              >
                <Image
                  src="https://happho.com/wp-content/uploads/2023/11/home3-1.png"
                  alt="Platinum Home"
                  width="64px"
                  height="64px"
                />
                <Text>@ ₹ 2599/- per sq. ft</Text>
              </Td>
            </Tr>
            <Tr>
              <Td
                colSpan={5}
                fontWeight="bold"
                bg="blue.400"
                border={"1px solid #999999"}
                textAlign="center"
              >
                Design
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"}>a. Architectural Design</Td>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Site Layout Plan
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Architectural Detailing
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Architectural Detailing
              </Td>
            </Tr>
            <Tr>
              <Td rowSpan={2} border={"1px solid #999999"}>
                b. Structural &amp; MEP Design
              </Td>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Earthquake Resistant Structural Detailing
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Earthquake Resistant Structural Detailing
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Earthquake Resistant Structural Detailing
              </Td>
            </Tr>
            <Tr>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Plumbing and Electrical drawing
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Plumbing and Electrical drawing
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Plumbing and Electrical drawing
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} rowSpan={4}>
                c. Additionals
              </Td>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Furniture Layout
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Furniture Layout
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Furniture Layout
              </Td>
            </Tr>
            <Tr>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}></Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Hardscape &amp; Landscape
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Hardscape &amp; Landscape
              </Td>
            </Tr>
            <Tr>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}></Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Rain Water Harvesting
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Rain Water Harvesting
              </Td>
            </Tr>
            <Tr>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}></Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Heating Ventilation and Air Conditioning provisions
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Heating Ventilation and Air Conditioning
              </Td>
            </Tr>
            <Tr>
              <Td
                colSpan={4}
                textAlign="center"
                bg="blue.400"
                border={"1px solid #999999"}
                fontWeight="bold"
              >
                Civil Works
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} rowSpan={2}>
                a. Formwork
              </Td>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Slab shuttering MS plates
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Slab shuttering Film faced plywood
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Slab shuttering Film faced plywood
              </Td>
            </Tr>
            <Tr>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                Column and Beams: Plywood sheets attached to timber frames
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                Column and Beams: Plywood sheets attached to MS frames
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                Column and Beams: Plywood sheets attached to MS frames
              </Td>
            </Tr>
            <Tr>
              <Td rowSpan={2} border={"1px solid #999999"}>
                b. Reinforcement steel
              </Td>
              <Td bg={"#d3f5ff"} border={"1px solid #999999"}>
                <Text>Fe 415 grade</Text>
                <Text>
                  Brands: Trishul, Kamdhenu, Pushpak, Shakti, equivalent
                </Text>
              </Td>
              <Td border={"1px solid #999999"} bg={"#e3f7b2"}>
                <Text>Fe 500 grade</Text>
                <Text>Brands: Trishul, Vizag, JSW, Welspun.</Text>
              </Td>
              <Td border={"1px solid #999999"} bg={"#ffc7a7"}>
                <Text>Fe 500 grade</Text>
                <Text>Brand: TATA steel, Vizag, JSW, SAIL</Text>
              </Td>
            </Tr>
            <Tr>
              <Td
                className="silver"
                bg={"#d3f5ff"}
                border={"1px solid #999999"}
              >
                <Text>MS binding wire</Text>
                <Text>Concrete cover blocks</Text>
              </Td>
              <Td className="gold" border={"1px solid #999999"} bg={"#e3f7b2"}>
                <Text>GI binding wire</Text>
                <Text>PVC cover blocks</Text>
              </Td>
              <Td
                className="platinum"
                border={"1px solid #999999"}
                bg={"#ffc7a7"}
              >
                <Text>GI binding wire</Text>
                <Text>PVC cover blocks</Text>
              </Td>
            </Tr>

            {/* Concrete Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>c. Concrete</Td>
              <Td
                className="silver"
                bg={"#d3f5ff"}
                border={"1px solid #999999"}
              >
                M25 Designed Mix
              </Td>
              <Td className="gold" border={"1px solid #999999"} bg={"#e3f7b2"}>
                M25 Designed Mix
              </Td>
              <Td
                className="platinum"
                border={"1px solid #999999"}
                bg={"#ffc7a7"}
              >
                M25 Designed Mix
              </Td>
            </Tr>

            {/* Cement Row */}
            <Tr className="works-heading">
              <Td rowSpan={2} border={"1px solid #999999"}>
                d. Cement
              </Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>OPC 53 G for Concrete</Text>
                <Text>Brands: Chettinad, Bharthi, ACC, Equivalent</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>OPC 53 G for Concrete</Text>
                <Text>
                  Brands: Chettinad, Bharthi, Ultratech, ACC, Birla Super
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>OPC 53 G for Concrete</Text>
                <Text>
                  Brands: Chettinad, Bharthi, Ultratech, ACC, Birla Super
                </Text>
              </Td>
            </Tr>

            {/* Additional Cement Row */}
            <Tr>
              <Td border={"1px solid #999999"} className="silver">
                <Text>
                  PPC (Portland Pozzolana Cement) for masonry, Plaster for
                  Tiling
                </Text>
                <Text>Brands: Chettinad, Bharthi, ACC, Equivalent</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>
                  PPC (Portland Pozzolana Cement) for masonry, Plaster for
                  Tiling
                </Text>
                <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla</Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>
                  PPC (Portland Pozzolana Cement) for masonry, Plaster for
                  Tiling
                </Text>
                <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla</Text>
              </Td>
            </Tr>

            {/* Masonary Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"} rowSpan={2}>
                e. Masonary
              </Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>Fly ash Bricks/CLC Bricks</Text>
                <Text>Internal walls – 150mm</Text>
                <Text>External walls – 150mm</Text>
                <Text>(Happho approved local brands)</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>Fly ash Bricks/Cellular Lightweight Concrete Blocks</Text>
                <Text>Internal walls – 150mm</Text>
                <Text>External walls – 150mm</Text>
                <Text>(Happho approved local brands)</Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>Autoclaved Aerated Concrete Blocks</Text>
                <Text>Internal walls – 200mm</Text>
                <Text>External walls – 150mm</Text>
                <Text>Brands: Siporex, Magicrete, Ecolite, Ultratech</Text>
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} className="silver">
                <Text>Crushed sand for jointing mortar</Text>
                <Text>(Happho approved local brands)</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>Crushed sand for jointing mortar</Text>
                <Text>(Happho approved local brands)</Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>Crushed sand for jointing mortar</Text>
                <Text>(Happho approved local brands)</Text>
              </Td>
            </Tr>

            {/* External Plaster Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>f. External Plaster</Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>
                  External plaster – Cement & Plaster sand using water proofing
                  chemical
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>
                  External plaster – Cement & Plaster sand using water proofing
                  chemical
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>
                  External plaster – Cement & Plaster sand using water proofing
                  chemical
                </Text>
              </Td>
            </Tr>

            {/* Internal Plaster (Wet Areas) Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"} rowSpan={2}>
                g. Internal Plaster
              </Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>
                  Internal plaster (wet areas) – Cement and Plaster sand
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>
                  Internal plaster (wet areas) – Cement and Plaster sand
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>
                  Internal plaster (wet areas) – Cement and Plaster sand
                </Text>
              </Td>
            </Tr>

            {/* Internal Plaster (Dry Areas) Row */}
            <Tr>
              <Td border={"1px solid #999999"} className="silver">
                <Text>Internal plaster (dry areas) – POP plaster</Text>
                <Text>Brands: HappHo approved local brands</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>Internal plaster (dry areas) – POP/Gypsum plaster</Text>
                <Text>
                  Brands: Saint Gobain, Walplast, Buildcon, Diamond, Supreme
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>Internal plaster (dry areas) – POP/Gypsum plaster</Text>
                <Text>
                  Brands: Saint Gobain, Walplast, Buildcon, Diamond, Supreme
                </Text>
              </Td>
            </Tr>

            {/* Ceiling Finishing Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>h. Ceiling Finishing</Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>Ceiling – White cement /Gypsum based putty</Text>
                <Text>
                  Brands: Birla, JK, Walplast or Happho approved local brands
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>Ceiling – White cement /Gypsum based putty</Text>
                <Text>Brands: Birla, JK, Saint Gobain, Walplast</Text>
                <Text>Chemical Waterproofing</Text>
                <Text>Brands: Dr. Fixit, Sika, BASF</Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>Ceiling – White cement /Gypsum based putty</Text>
                <Text>Brands: Birla, JK, Saint Gobain, Walplast</Text>
              </Td>
            </Tr>

            {/* Waterproofing Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>g. WaterProofing</Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>Chemical Waterproofing</Text>
                <Text>Brands: Dr. Fixit, Sika, BASF</Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>Chemical Waterproofing</Text>
                <Text>Brands: Dr. Fixit, Sika, BASF</Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>Chemical Waterproofing</Text>
                <Text>Brands: Dr. Fixit, Sika, BASF</Text>
              </Td>
            </Tr>

            {/* Others Row */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>h. Others</Td>
              <Td border={"1px solid #999999"} className="silver">
                <Text>
                  Anti-Termite Treatment at foundation and plinth level
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <Text>
                  Anti-Termite Treatment at foundation and plinth level
                </Text>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <Text>
                  Anti-Termite Treatment at foundation and plinth level
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5} bg="blue.400" p={4}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center">
                  Bathroom
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"}> a. Concealed Pipes</Td>
              <Td border={"1px solid #999999"} bg="gray.100" p={4}>
                <Text>
                  Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)
                </Text>
                <Text>Brands: Finolex, Supreme</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="yellow.100" p={4}>
                <Text>
                  Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)
                </Text>
                <Text>Brands: Finolex, Supreme</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="purple.100" p={4}>
                <Text>
                  Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)
                </Text>
                <Text>Brands: Finolex, Supreme</Text>
              </Td>
            </Tr>

            <Tr>
              <Td border={"1px solid #999999"}> b. Dado Tiles</Td>
              <Td border={"1px solid #999999"} bg="gray.100" p={4}>
                <Text>
                  Wall tiles – Ceramic @ 40/Sq.ft., 7' height (fixed with SBR
                  Bonding agent)
                </Text>
                <Text>
                  Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles
                  (Happho approved)
                </Text>
              </Td>
              <Td border={"1px solid #999999"} bg="yellow.100" p={4}>
                <Text>
                  Wall tiles – Ceramic @ 60/Sq.ft., 7' height (fixed with SBR
                  Bonding agent)
                </Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="purple.100" p={4}>
                <Text>
                  Wall tiles – Vitrified @ 80/Sq.ft., 7' height (fixed with SBR
                  Bonding agent and spacers)
                </Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
            </Tr>

            <Tr>
              <Td border={"1px solid #999999"}> c. Floor Tiles</Td>
              <Td border={"1px solid #999999"} bg="gray.100" p={4}>
                <Text>Floor tiles – Anti skid @ 45/Sq.ft.</Text>
                <Text>
                  Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles
                  (Happho approved)
                </Text>
              </Td>
              <Td border={"1px solid #999999"} bg="yellow.100" p={4}>
                <Text>Floor tiles – Anti skid @ 60/Sq.ft.</Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="purple.100" p={4}>
                <Text>
                  Floor tiles – Anti skid @ 75/Sq.ft. (fixed with spacer)
                </Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
            </Tr>

            <Tr>
              <Td border={"1px solid #999999"}> d. Fixtures</Td>
              <Td border={"1px solid #999999"} bg="gray.100" p={4}>
                <Text>Sanitary & CP fixtures – all @ 20,000</Text>
                <Text>Brand: Hindware, Parryware, RAK, Plumber</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="yellow.100" p={4}>
                <Text>Sanitary & CP fixtures – all @ 35,000</Text>
                <Text>Brand: Hindware, Jaquar, CERA, RAK</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="purple.100" p={4}>
                <Text>Sanitary & CP fixtures – all @ 50,000</Text>
                <Text>Brand: Kohler, Roca, Grohe, Kludi</Text>
              </Td>
            </Tr>

            <Tr>
              <Td border={"1px solid #999999"} colSpan={5} bg="blue.400" p={4}>
                <Text fontSize="xl" fontWeight="bold" textAlign="center">
                  Electrical
                </Text>
              </Td>
            </Tr>

            <Tr>
              <Td border={"1px solid #999999"}> a. Conduits</Td>
              <Td border={"1px solid #999999"} bg="gray.100" p={4}>
                <Text>
                  Concealed works – MMS (MEDIUM MECHANICAL STRESS) grade PVC
                  Conduits
                </Text>
                <Text>Brand: Precision, Supreme</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="yellow.100" p={4}>
                <Text>
                  Concealed works – MMS (MEDIUM MECHANICAL STRESS) FRLS grade
                  PVC Conduits
                </Text>
                <Text>Brand: Precision, Supreme</Text>
              </Td>
              <Td border={"1px solid #999999"} bg="purple.100" p={4}>
                <Text>
                  Concealed works – HMS (HIGH MECHANICAL STRESS) FRLS grade PVC
                  Conduits
                </Text>
                <Text>Brand: Precision, Supreme</Text>
              </Td>
            </Tr>

            {/* Wires & Cables */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>b. Wires & Cables</Td>
              <Td border={"1px solid #999999"} className="silver">
                <p>Wires – Flame Retardent</p>
                <p>Brands – Polycab, Finolex, HPL, Anchor</p>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <p>Wires – Flame Retardent Low Smoke</p>
                <p>Brands – Polycab, Finolex, Havels, Anchor</p>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <p>Wires – Flame Retardent Low Smoke</p>
                <p>Brands – Polycab, Finolex, Havels, Anchor</p>
              </Td>
            </Tr>

            {/* Switches and Sockets */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>c. Switches and Sockets</Td>
              <Td border={"1px solid #999999"} className="silver">
                Brands: Anchor, HPL, L&T
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                Brands: Anchor, Schneider, Crabtree, Finolex
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                Brands: Schneider, Crabtree, Legrand
              </Td>
            </Tr>

            {/* Doors & Windows */}
            <Tr>
              <Td
                border={"1px solid #999999"}
                colSpan={4}
                className="design-info"
              >
                Doors & Windows
              </Td>
            </Tr>

            {/* Main Door */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>a. Main Door</Td>
              <Td border={"1px solid #999999"} className="silver">
                <p>
                  Hard Wood Frame & Engineered Door Shutters 35mm (Factory
                  finished)
                </p>
                <p>(HappHo approved brands)</p>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <p>
                  Pine Wood Frame & Flush Door Shutters laminate finish, 40mm
                </p>
                <p>(HappHo approved brands)</p>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <p>Pine Wood Frame & Flush Door Shutters Veneer finish, 45mm</p>
                <p>(HappHo approved brands)</p>
              </Td>
            </Tr>

            {/* Door Kit */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>b. Door Kit</Td>
              <Td border={"1px solid #999999"} className="silver">
                <p>Door Kit – Brass alloy</p>
                <p>(HappHo approved brands)</p>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <p>Door Kit – Brass Chromium Plated</p>
                <p>(HappHo approved brands)</p>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <p>Door Kit – Stainless steel</p>
                <p>(HappHo approved brands)</p>
              </Td>
            </Tr>

            {/* Windows */}
            <Tr className="works-heading">
              <Td border={"1px solid #999999"}>c. Windows</Td>
              <Td border={"1px solid #999999"} className="silver">
                <p>
                  Subframe, Aluminium 19mm series main frame, powder coated, 5mm
                  clear glass
                </p>
                <p>(HappHo approved local brands)</p>
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                <p>
                  Subframe, Aluminium 25mm series main frame, anodized, 5mm
                  tinted glass
                </p>
                <p>(HappHo approved brands) Marble sill at bottom</p>
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                <p>
                  Subframe, Aluminium 35mm series, anodized, Double glass unit
                  (tinted)
                </p>
                <p>
                  (HappHo approved brands) or UPVC Windows Marble sill four
                  sides
                </p>
              </Td>
            </Tr>

            {/* Kitchen */}
            <Tr>
              <Td
                border={"1px solid #999999"}
                colSpan={4}
                className="design-info"
              >
                Kitchen
              </Td>
            </Tr>

            {/* Countertop */}
            <Tr border={"1px solid #999999"} className="works-heading">
              <Td border={"1px solid #999999"}>a. Countertop (Ota)</Td>
              <Td border={"1px solid #999999"} className="silver">
                Countertop – granite @ 150 /sq.ft
              </Td>
              <Td border={"1px solid #999999"} className="gold">
                Countertop – galaxy black granite @ 180 /sq.ft
              </Td>
              <Td border={"1px solid #999999"} className="platinum">
                Countertop – jet black granite @ 250 /sq.ft
              </Td>
            </Tr>
            {/* Wall Tiles */}
            <Tr>
              <Td border={"1px solid #999999"}>
                <Text>b. Wall tiles</Text>
                <Text>(Dado tiles)</Text>
              </Td>
              <Td className="silver" border={"1px solid #999999"}>
                <Text>Ceramic tiles 2′ above kitchen platform @40/sq.ft</Text>
                <Text>
                  Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles
                  (Happho approved)
                </Text>
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                <Text>Ceramic tiles 2′ above kitchen platform @50/sq.ft</Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                <Text>Ceramic tiles 2′ above kitchen platform @80/sq.ft</Text>
                <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
              </Td>
            </Tr>

            {/* Kitchen Sink */}
            <Tr>
              <Td border={"1px solid #999999"}>
                c. Kitchen Sink and accessories
              </Td>
              <Td className="silver" border={"1px solid #999999"}>
                Single Sink bowl – SS 304 Faucet & Accessories @ Rs. 6000
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Single Sink bowl – SS 304 with drainer Faucet & Accessories @
                Rs. 12000
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Double sink bowl SS 304, faucet & accessories @ Rs. 18000
              </Td>
            </Tr>

            {/* Modular Kitchen */}
            <Tr>
              <Td border={"1px solid #999999"}>d. Modular Kitchen</Td>
              <Td className="silver" border={"1px solid #999999"}>
                N/A
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Modular Kitchen @ Rs. 1,00,000
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Modular Kitchen @ Rs. 2,50,000
              </Td>
            </Tr>

            {/* Section Heading */}
            <Tr>
              <Td
                border={"1px solid #999999"}
                colSpan={4}
                bg="blue.400"
                textAlign="center"
                fontWeight="bold"
              >
                Flooring & Painting
              </Td>
            </Tr>

            {/* Flooring */}
            <Tr>
              <Td border={"1px solid #999999"}>a. Flooring</Td>
              <Td className="silver" border={"1px solid #999999"}>
                <Text>
                  LIVING AND DINING - VITRIFIED TILES (600*600) @ 45/sq.ft.
                </Text>
                <Text>BED ROOM - VITRIFIED TILES (600*600) @ 45/sq.ft.</Text>
                <Text>Terraces – ANTISKID @ 50/sq.ft.</Text>
                <Text>Staircase - Indian granite @ 60/sq.ft.</Text>
                <Text>Parking – Chequered tiles @ 45/sq.ft.</Text>
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                <Text>
                  LIVING AND DINING - VITRIFIED TILES (800*800) @ 125/sq.ft.
                </Text>
                <Text>
                  BED ROOM - VITRIFIED TILES (600*600) or wooden tiles @
                  85/sq.ft.
                </Text>
                <Text>Terraces – ANTISKID @ 60/sq.ft.</Text>
                <Text>Staircase - Indian granite @ 80/sq.ft.</Text>
                <Text>Parking – Paver tiles @ 60/sq.ft.</Text>
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                <Text>LIVING AND DINING – Italian Marble @ 275/sq.ft.</Text>
                <Text>BED ROOM - Italian Marble @ 275/sq.ft.</Text>
                <Text>Terraces – ANTISKID @ 80/sq.ft.</Text>
                <Text>Staircase - Indian granite @ 120/sq.ft.</Text>
                <Text>
                  Parking – Paver tiles/stamp coloured concrete @ 75/sq.ft.
                </Text>
              </Td>
            </Tr>

            {/* Painting */}
            <Tr>
              <Td border={"1px solid #999999"}>b. Painting</Td>
              <Td className="silver" border={"1px solid #999999"}>
                <Text>Internal paint – Oil Bound Distemper (OBD)</Text>
                <Text>
                  External paint – Weather proof, anti-algae, anti-fungal,
                  Exterior emulsion paint
                </Text>
                <Text>Brands: Asian, Berger, Nerolac, ICI Dulux</Text>
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                <Text>
                  Internal paint – Emulsion paint (Matt/Satin finish), Washable,
                  Stain resistant, Anti fungal
                </Text>
                <Text>
                  External paint – Weather proof, anti-algae, anti-fungal,
                  Exterior emulsion paint
                </Text>
                <Text>Brands: Asian, Berger, Nerolac, Jotun</Text>
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                <Text>
                  Internal paint – Emulsion paint (Matt/Satin finish), Washable,
                  Stain resistant, Anti fungal
                </Text>
                <Text>External paint – Elastomeric Texture paint</Text>
                <Text>Brands: Asian, Berger, Nerolac, Jotun</Text>
              </Td>
            </Tr>
            <Tr>
              <Td
                colSpan={5}
                bg="blue.400"
                color="black"
                fontWeight="bold"
                textAlign="center"
                border={"1px solid #999999"}
              >
                ADD ON FEATURES
              </Td>
            </Tr>

            {/* Balcony and Terraces */}
            <Tr>
              <Td border={"1px solid #999999"}>
                a. Balcony and Terraces – 1st floor and above
              </Td>
              <Td className="silver" border={"1px solid #999999"}>
                MS Railing
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                SS 202 Railing
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                SS 304 Railing with Toughened Glass
              </Td>
            </Tr>

            {/* Entrance Lobby */}
            <Tr>
              <Td border={"1px solid #999999"} rowSpan={2}>
                b. Entrance Lobby
              </Td>
              <Td className="silver" border={"1px solid #999999"}>
                Vitrified Flooring
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Granite with Marble Inlay Flooring
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Marble Flooring and Designer False Ceiling
              </Td>
            </Tr>
            <Tr>
              <Td className="silver" border={"1px solid #999999"}>
                Ramp for differently able people
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Ramp for differently able people
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Ramp for differently able people
              </Td>
            </Tr>

            {/* False Ceiling */}
            <Tr>
              <Td border={"1px solid #999999"}>c. False Ceiling</Td>
              <Td className="silver" border={"1px solid #999999"}>
                &nbsp;
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Designer False Ceiling in living and dining area
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Designer False Ceiling in living area, dining and bedrooms
              </Td>
            </Tr>

            {/* Home Automation */}
            <Tr>
              <Td border={"1px solid #999999"}>d. Home Automation</Td>
              <Td className="silver" border={"1px solid #999999"}>
                Video Door Phone
              </Td>
              <Td className="gold" border={"1px solid #999999"}>
                Home Automation @ 25000
              </Td>
              <Td className="platinum" border={"1px solid #999999"}>
                Home Automation @ 100000
              </Td>
            </Tr>

            {/* Separator Row */}
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5} bg="blue.300">
                &nbsp;
              </Td>
            </Tr>

            {/* Terms Header */}
            <Tr>
              <Td
                border={"1px solid #999999"}
                colSpan={5}
                fontWeight="bold"
                textAlign="center"
              >
                TERMS:
              </Td>
            </Tr>

            {/* Terms Conditions */}
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5}>
                * Final Price may vary depending upon plot/site conditions,
                applicable structural design and final chosen finishing
                items/features/addons.
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5}>
                * Pick and choose customised option available to match your
                personality and lifestyle.
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5}>
                Products can be customised as per customer needs/budget and
                requirements.
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5}>
                The above rates are applicable for minimum 1500 sq.ft. built up
                area and plots located within 25 Kms radius of Pune. For other
                cities/metros, we shall give you the exact package pricing upon
                request.
              </Td>
            </Tr>
            <Tr>
              <Td border={"1px solid #999999"} colSpan={5}>
                5 year warranty on construction defects on all HAPPHO Packages.
              </Td>
            </Tr>
          </Tbody>
        </Table>
        {isMobile && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Button colorScheme="blue" onClick={downloadPDF}>
              Download Table PDF
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default HappyHomesPackages;

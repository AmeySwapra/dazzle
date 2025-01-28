import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Text, Image } from '@chakra-ui/react';

const HappyHomesPackages = () => {
  return (
    <Table variant="simple">
      <TableCaption>
        HAPPHO “HAPPY HOMES PACKAGES”
      </TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Silver</Th>
          <Th>Gold</Th>
          <Th>Platinum</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td colSpan={5} fontWeight="bold" textAlign="center">
            HAPPHO “HAPPY HOMES PACKAGES”
          </Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Td className="silver">
            <Image
              src="https://happho.com/wp-content/uploads/2023/11/home1-1.png"
              alt="Silver Home"
              width="64px"
              height="64px"
            />
            <Text>@ ₹ 1599/- per sq. ft</Text>
          </Td>
          <Td className="gold">
            <Image
              src="https://happho.com/wp-content/uploads/2023/11/home2-2.png"
              alt="Gold Home"
              width="64px"
              height="64px"
            />
            <Text>@ ₹ 1999/- per sq. ft</Text>
          </Td>
          <Td className="platinum">
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
          <Td colSpan={5} fontWeight="bold" textAlign="center">
            Design
          </Td>
        </Tr>
        <Tr>
          <Td>a. Architectural Design</Td>
          <Td>Site Layout Plan</Td>
          <Td>Architectural Detailing</Td>
          <Td>Architectural Detailing</Td>
        </Tr>
        <Tr>
          <Td rowSpan={2}>b. Structural &amp; MEP Design</Td>
          <Td>Earthquake Resistant Structural Detailing</Td>
          <Td>Earthquake Resistant Structural Detailing</Td>
          <Td>Earthquake Resistant Structural Detailing</Td>
        </Tr>
        <Tr>
          <Td>Plumbing and Electrical drawing</Td>
          <Td>Plumbing and Electrical drawing</Td>
          <Td>Plumbing and Electrical drawing</Td>
        </Tr>
        <Tr>
          <Td rowSpan={4}>c. Additionals</Td>
          <Td>Furniture Layout</Td>
          <Td>Furniture Layout</Td>
          <Td>Furniture Layout</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Td>Hardscape &amp; Landscape</Td>
          <Td>Hardscape &amp; Landscape</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Td>Rain Water Harvesting</Td>
          <Td>Rain Water Harvesting</Td>
        </Tr>
        <Tr>
          <Td></Td>
          <Td>Heating Ventilation and Air Conditioning provisions</Td>
          <Td>Heating Ventilation and Air Conditioning</Td>
        </Tr>
        <Tr>
          <Td colSpan={4} textAlign="center" fontWeight="bold">
            Civil Works
          </Td>
        </Tr>
        <Tr>
          <Td rowSpan={2}>a. Formwork</Td>
          <Td>Slab shuttering MS plates</Td>
          <Td>Slab shuttering Film faced plywood</Td>
          <Td>Slab shuttering Film faced plywood</Td>
        </Tr>
        <Tr>
          <Td>Column and Beams: Plywood sheets attached to timber frames</Td>
          <Td>Column and Beams: Plywood sheets attached to MS frames</Td>
          <Td>Column and Beams: Plywood sheets attached to MS frames</Td>
        </Tr>
        <Tr>
          <Td rowSpan={2}>b. Reinforcement steel</Td>
          <Td>
            <Text>Fe 415 grade</Text>
            <Text>Brands: Trishul, Kamdhenu, Pushpak, Shakti, equivalent</Text>
          </Td>
          <Td>
            <Text>Fe 500 grade</Text>
            <Text>Brands: Trishul, Vizag, JSW, Welspun.</Text>
          </Td>
          <Td>
            <Text>Fe 500 grade</Text>
            <Text>Brand: TATA steel, Vizag, JSW, SAIL</Text>
          </Td>
        </Tr>
        <Tr>
          <Td className="silver">
            <Text>MS binding wire</Text>
            <Text>Concrete cover blocks</Text>
          </Td>
          <Td className="gold">
            <Text>GI binding wire</Text>
            <Text>PVC cover blocks</Text>
          </Td>
          <Td className="platinum">
            <Text>GI binding wire</Text>
            <Text>PVC cover blocks</Text>
          </Td>
        </Tr>

        {/* Concrete Row */}
        <Tr className="works-heading">
          <Td>c. Concrete</Td>
          <Td className="silver">M25 Designed Mix</Td>
          <Td className="gold">M25 Designed Mix</Td>
          <Td className="platinum">M25 Designed Mix</Td>
        </Tr>

        {/* Cement Row */}
        <Tr className="works-heading">
          <Td rowSpan={2}>d. Cement</Td>
          <Td className="silver">
            <Text>OPC 53 G for Concrete</Text>
            <Text>Brands: Chettinad, Bharthi, ACC, Equivalent</Text>
          </Td>
          <Td className="gold">
            <Text>OPC 53 G for Concrete</Text>
            <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla Super</Text>
          </Td>
          <Td className="platinum">
            <Text>OPC 53 G for Concrete</Text>
            <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla Super</Text>
          </Td>
        </Tr>

        {/* Additional Cement Row */}
        <Tr>
          <Td className="silver">
            <Text>
              PPC (Portland Pozzolana Cement) for masonry, Plaster for Tiling
            </Text>
            <Text>Brands: Chettinad, Bharthi, ACC, Equivalent</Text>
          </Td>
          <Td className="gold">
            <Text>
              PPC (Portland Pozzolana Cement) for masonry, Plaster for Tiling
            </Text>
            <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla</Text>
          </Td>
          <Td className="platinum">
            <Text>
              PPC (Portland Pozzolana Cement) for masonry, Plaster for Tiling
            </Text>
            <Text>Brands: Chettinad, Bharthi, Ultratech, ACC, Birla</Text>
          </Td>
        </Tr>

        {/* Masonary Row */}
        <Tr className="works-heading">
          <Td rowSpan={2}>e. Masonary</Td>
          <Td className="silver">
            <Text>Fly ash Bricks/CLC Bricks</Text>
            <Text>Internal walls – 150mm</Text>
            <Text>External walls – 150mm</Text>
            <Text>(Happho approved local brands)</Text>
          </Td>
          <Td className="gold">
            <Text>Fly ash Bricks/Cellular Lightweight Concrete Blocks</Text>
            <Text>Internal walls – 150mm</Text>
            <Text>External walls – 150mm</Text>
            <Text>(Happho approved local brands)</Text>
          </Td>
          <Td className="platinum">
            <Text>Autoclaved Aerated Concrete Blocks</Text>
            <Text>Internal walls – 200mm</Text>
            <Text>External walls – 150mm</Text>
            <Text>Brands: Siporex, Magicrete, Ecolite, Ultratech</Text>
          </Td>
        </Tr>
        <Tr>
          <Td className="silver">
            <Text>Crushed sand for jointing mortar</Text>
            <Text>(Happho approved local brands)</Text>
          </Td>
          <Td className="gold">
            <Text>Crushed sand for jointing mortar</Text>
            <Text>(Happho approved local brands)</Text>
          </Td>
          <Td className="platinum">
            <Text>Crushed sand for jointing mortar</Text>
            <Text>(Happho approved local brands)</Text>
          </Td>
        </Tr>

        {/* External Plaster Row */}
        <Tr className="works-heading">
          <Td>f. External Plaster</Td>
          <Td className="silver">
            <Text>
              External plaster – Cement & Plaster sand using water proofing
              chemical
            </Text>
          </Td>
          <Td className="gold">
            <Text>
              External plaster – Cement & Plaster sand using water proofing
              chemical
            </Text>
          </Td>
          <Td className="platinum">
            <Text>
              External plaster – Cement & Plaster sand using water proofing
              chemical
            </Text>
          </Td>
        </Tr>

        {/* Internal Plaster (Wet Areas) Row */}
        <Tr className="works-heading">
          <Td rowSpan={2}>g. Internal Plaster</Td>
          <Td className="silver">
            <Text>Internal plaster (wet areas) – Cement and Plaster sand</Text>
          </Td>
          <Td className="gold">
            <Text>Internal plaster (wet areas) – Cement and Plaster sand</Text>
          </Td>
          <Td className="platinum">
            <Text>Internal plaster (wet areas) – Cement and Plaster sand</Text>
          </Td>
        </Tr>

        {/* Internal Plaster (Dry Areas) Row */}
        <Tr>
          <Td className="silver">
            <Text>Internal plaster (dry areas) – POP plaster</Text>
            <Text>Brands: HappHo approved local brands</Text>
          </Td>
          <Td className="gold">
            <Text>Internal plaster (dry areas) – POP/Gypsum plaster</Text>
            <Text>Brands: Saint Gobain, Walplast, Buildcon, Diamond, Supreme</Text>
          </Td>
          <Td className="platinum">
            <Text>Internal plaster (dry areas) – POP/Gypsum plaster</Text>
            <Text>Brands: Saint Gobain, Walplast, Buildcon, Diamond, Supreme</Text>
          </Td>
        </Tr>

        {/* Ceiling Finishing Row */}
        <Tr className="works-heading">
          <Td>h. Ceiling Finishing</Td>
          <Td className="silver">
            <Text>
              Ceiling – White cement /Gypsum based putty
            </Text>
            <Text>Brands: Birla, JK, Walplast or Happho approved local brands</Text>
          </Td>
          <Td className="gold">
            <Text>Ceiling – White cement /Gypsum based putty</Text>
            <Text>Brands: Birla, JK, Saint Gobain, Walplast</Text>
            <Text>Chemical Waterproofing</Text>
            <Text>Brands: Dr. Fixit, Sika, BASF</Text>
          </Td>
          <Td className="platinum">
            <Text>Ceiling – White cement /Gypsum based putty</Text>
            <Text>Brands: Birla, JK, Saint Gobain, Walplast</Text>
          </Td>
        </Tr>

        {/* Waterproofing Row */}
        <Tr className="works-heading">
          <Td>g. WaterProofing</Td>
          <Td className="silver">
            <Text>Chemical Waterproofing</Text>
            <Text>Brands: Dr. Fixit, Sika, BASF</Text>
          </Td>
          <Td className="gold">
            <Text>Chemical Waterproofing</Text>
            <Text>Brands: Dr. Fixit, Sika, BASF</Text>
          </Td>
          <Td className="platinum">
            <Text>Chemical Waterproofing</Text>
            <Text>Brands: Dr. Fixit, Sika, BASF</Text>
          </Td>
        </Tr>

        {/* Others Row */}
        <Tr className="works-heading">
          <Td>h. Others</Td>
          <Td className="silver">
            <Text>Anti-Termite Treatment at foundation and plinth level</Text>
          </Td>
          <Td className="gold">
            <Text>Anti-Termite Treatment at foundation and plinth level</Text>
          </Td>
          <Td className="platinum">
            <Text>Anti-Termite Treatment at foundation and plinth level</Text>
          </Td>
        </Tr>
        <Tr>
            <Td colSpan={5} bg="gray.100" p={4}>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                Bathroom
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td> a. Concealed Pipes</Td>
            <Td bg="gray.100" p={4}>
              <Text>Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)</Text>
              <Text>Brands: Finolex, Supreme</Text>
            </Td>
            <Td bg="yellow.100" p={4}>
              <Text>Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)</Text>
              <Text>Brands: Finolex, Supreme</Text>
            </Td>
            <Td bg="purple.100" p={4}>
              <Text>Wall concealed pipes: Chlorinated poly vinyl chloride (CPVC)</Text>
              <Text>Brands: Finolex, Supreme</Text>
            </Td>
          </Tr>

          <Tr>
            <Td> b. Dado Tiles</Td>
            <Td bg="gray.100" p={4}>
              <Text>Wall tiles – Ceramic @ 40/Sq.ft., 7' height (fixed with SBR Bonding agent)</Text>
              <Text>Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles (Happho approved)</Text>
            </Td>
            <Td bg="yellow.100" p={4}>
              <Text>Wall tiles – Ceramic @ 60/Sq.ft., 7' height (fixed with SBR Bonding agent)</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
            <Td bg="purple.100" p={4}>
              <Text>Wall tiles – Vitrified @ 80/Sq.ft., 7' height (fixed with SBR Bonding agent and spacers)</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
          </Tr>

          <Tr>
            <Td> c. Floor Tiles</Td>
            <Td bg="gray.100" p={4}>
              <Text>Floor tiles – Anti skid @ 45/Sq.ft.</Text>
              <Text>Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles (Happho approved)</Text>
            </Td>
            <Td bg="yellow.100" p={4}>
              <Text>Floor tiles – Anti skid @ 60/Sq.ft.</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
            <Td bg="purple.100" p={4}>
              <Text>Floor tiles – Anti skid @ 75/Sq.ft. (fixed with spacer)</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
          </Tr>

          <Tr>
            <Td> d. Fixtures</Td>
            <Td bg="gray.100" p={4}>
              <Text>Sanitary & CP fixtures – all @ 20,000</Text>
              <Text>Brand: Hindware, Parryware, RAK, Plumber</Text>
            </Td>
            <Td bg="yellow.100" p={4}>
              <Text>Sanitary & CP fixtures – all @ 35,000</Text>
              <Text>Brand: Hindware, Jaquar, CERA, RAK</Text>
            </Td>
            <Td bg="purple.100" p={4}>
              <Text>Sanitary & CP fixtures – all @ 50,000</Text>
              <Text>Brand: Kohler, Roca, Grohe, Kludi</Text>
            </Td>
          </Tr>

          <Tr>
            <Td colSpan={5} bg="gray.100" p={4}>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                Electrical
              </Text>
            </Td>
          </Tr>

          <Tr>
            <Td> a. Conduits</Td>
            <Td bg="gray.100" p={4}>
              <Text>Concealed works – MMS (MEDIUM MECHANICAL STRESS) grade PVC Conduits</Text>
              <Text>Brand: Precision, Supreme</Text>
            </Td>
            <Td bg="yellow.100" p={4}>
              <Text>Concealed works – MMS (MEDIUM MECHANICAL STRESS) FRLS grade PVC Conduits</Text>
              <Text>Brand: Precision, Supreme</Text>
            </Td>
            <Td bg="purple.100" p={4}>
              <Text>Concealed works – HMS (HIGH MECHANICAL STRESS) FRLS grade PVC Conduits</Text>
              <Text>Brand: Precision, Supreme</Text>
            </Td>
          </Tr>
          
        
          {/* Wires & Cables */}
          <Tr className="works-heading">
            <Td>b. Wires & Cables</Td>
            <Td className="silver">
              <p>Wires – Flame Retardent</p>
              <p>Brands – Polycab, Finolex, HPL, Anchor</p>
            </Td>
            <Td className="gold">
              <p>Wires – Flame Retardent Low Smoke</p>
              <p>Brands – Polycab, Finolex, Havels, Anchor</p>
            </Td>
            <Td className="platinum">
              <p>Wires – Flame Retardent Low Smoke</p>
              <p>Brands – Polycab, Finolex, Havels, Anchor</p>
            </Td>
          </Tr>

          {/* Switches and Sockets */}
          <Tr className="works-heading">
            <Td>c. Switches and Sockets</Td>
            <Td className="silver">Brands: Anchor, HPL, L&T</Td>
            <Td className="gold">Brands: Anchor, Schneider, Crabtree, Finolex</Td>
            <Td className="platinum">Brands: Schneider, Crabtree, Legrand</Td>
          </Tr>

          {/* Doors & Windows */}
          <Tr>
            <Td colSpan={4} className="design-info">Doors & Windows</Td>
          </Tr>

          {/* Main Door */}
          <Tr className="works-heading">
            <Td>a. Main Door</Td>
            <Td className="silver">
              <p>Hard Wood Frame & Engineered Door Shutters 35mm (Factory finished)</p>
              <p>(HappHo approved brands)</p>
            </Td>
            <Td className="gold">
              <p>Pine Wood Frame & Flush Door Shutters laminate finish, 40mm</p>
              <p>(HappHo approved brands)</p>
            </Td>
            <Td className="platinum">
              <p>Pine Wood Frame & Flush Door Shutters Veneer finish, 45mm</p>
              <p>(HappHo approved brands)</p>
            </Td>
          </Tr>

          {/* Door Kit */}
          <Tr className="works-heading">
            <Td>b. Door Kit</Td>
            <Td className="silver">
              <p>Door Kit – Brass alloy</p>
              <p>(HappHo approved brands)</p>
            </Td>
            <Td className="gold">
              <p>Door Kit – Brass Chromium Plated</p>
              <p>(HappHo approved brands)</p>
            </Td>
            <Td className="platinum">
              <p>Door Kit – Stainless steel</p>
              <p>(HappHo approved brands)</p>
            </Td>
          </Tr>

          {/* Windows */}
          <Tr className="works-heading">
            <Td>c. Windows</Td>
            <Td className="silver">
              <p>Subframe, Aluminium 19mm series main frame, powder coated, 5mm clear glass</p>
              <p>(HappHo approved local brands)</p>
            </Td>
            <Td className="gold">
              <p>Subframe, Aluminium 25mm series main frame, anodized, 5mm tinted glass</p>
              <p>(HappHo approved brands) Marble sill at bottom</p>
            </Td>
            <Td className="platinum">
              <p>Subframe, Aluminium 35mm series, anodized, Double glass unit (tinted)</p>
              <p>(HappHo approved brands) or UPVC Windows Marble sill four sides</p>
            </Td>
          </Tr>

          {/* Kitchen */}
          <Tr>
            <Td colSpan={4} className="design-info">Kitchen</Td>
          </Tr>

          {/* Countertop */}
          <Tr className="works-heading">
            <Td>a. Countertop (Ota)</Td>
            <Td className="silver">Countertop – granite @ 150 /sq.ft</Td>
            <Td className="gold">Countertop – galaxy black granite @ 180 /sq.ft</Td>
            <Td className="platinum">Countertop – jet black granite @ 250 /sq.ft</Td>
          </Tr>
           {/* Wall Tiles */}
           <Tr>
            <Td>
              <Text>b. Wall tiles</Text>
              <Text>(Dado tiles)</Text>
            </Td>
            <Td>
              <Text>Ceramic tiles 2′ above kitchen platform @40/sq.ft</Text>
              <Text>Brands: Somany, Nitco, Asian Granito, Morbi Manufactured Tiles (Happho approved)</Text>
            </Td>
            <Td>
              <Text>Ceramic tiles 2′ above kitchen platform @50/sq.ft</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
            <Td>
              <Text>Ceramic tiles 2′ above kitchen platform @80/sq.ft</Text>
              <Text>Brands: Nitco, Asian Granito, Kajaria, HR Johnson</Text>
            </Td>
          </Tr>

          {/* Kitchen Sink */}
          <Tr>
            <Td>c. Kitchen Sink and accessories</Td>
            <Td>Single Sink bowl – SS 304 Faucet & Accessories @ Rs. 6000</Td>
            <Td>Single Sink bowl – SS 304 with drainer Faucet & Accessories @ Rs. 12000</Td>
            <Td>Double sink bowl SS 304, faucet & accessories @ Rs. 18000</Td>
          </Tr>

          {/* Modular Kitchen */}
          <Tr>
            <Td>d. Modular Kitchen</Td>
            <Td>N/A</Td>
            <Td>Modular Kitchen @ Rs. 1,00,000</Td>
            <Td>Modular Kitchen @ Rs. 2,50,000</Td>
          </Tr>

          {/* Section Heading */}
          <Tr>
            <Td colSpan={4} bg="gray.100" textAlign="center" fontWeight="bold">
              Flooring & Painting
            </Td>
          </Tr>

          {/* Flooring */}
          <Tr>
            <Td>a. Flooring</Td>
            <Td>
              <Text>LIVING AND DINING - VITRIFIED TILES (600*600) @ 45/sq.ft.</Text>
              <Text>BED ROOM - VITRIFIED TILES (600*600) @ 45/sq.ft.</Text>
              <Text>Terraces – ANTISKID @ 50/sq.ft.</Text>
              <Text>Staircase - Indian granite @ 60/sq.ft.</Text>
              <Text>Parking – Chequered tiles @ 45/sq.ft.</Text>
            </Td>
            <Td>
              <Text>LIVING AND DINING - VITRIFIED TILES (800*800) @ 125/sq.ft.</Text>
              <Text>BED ROOM - VITRIFIED TILES (600*600) or wooden tiles @ 85/sq.ft.</Text>
              <Text>Terraces – ANTISKID @ 60/sq.ft.</Text>
              <Text>Staircase - Indian granite @ 80/sq.ft.</Text>
              <Text>Parking – Paver tiles @ 60/sq.ft.</Text>
            </Td>
            <Td>
              <Text>LIVING AND DINING – Italian Marble @ 275/sq.ft.</Text>
              <Text>BED ROOM - Italian Marble @ 275/sq.ft.</Text>
              <Text>Terraces – ANTISKID @ 80/sq.ft.</Text>
              <Text>Staircase - Indian granite @ 120/sq.ft.</Text>
              <Text>Parking – Paver tiles/stamp coloured concrete @ 75/sq.ft.</Text>
            </Td>
          </Tr>

          {/* Painting */}
          <Tr>
            <Td>b. Painting</Td>
            <Td>
              <Text>Internal paint – Oil Bound Distemper (OBD)</Text>
              <Text>External paint – Weather proof, anti-algae, anti-fungal, Exterior emulsion paint</Text>
              <Text>Brands: Asian, Berger, Nerolac, ICI Dulux</Text>
            </Td>
            <Td>
              <Text>Internal paint – Emulsion paint (Matt/Satin finish), Washable, Stain resistant, Anti fungal</Text>
              <Text>External paint – Weather proof, anti-algae, anti-fungal, Exterior emulsion paint</Text>
              <Text>Brands: Asian, Berger, Nerolac, Jotun</Text>
            </Td>
            <Td>
              <Text>Internal paint – Emulsion paint (Matt/Satin finish), Washable, Stain resistant, Anti fungal</Text>
              <Text>External paint – Elastomeric Texture paint</Text>
              <Text>Brands: Asian, Berger, Nerolac, Jotun</Text>
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={5} bg="blue.400" color="white" fontWeight="bold" textAlign="center">
              ADD ON FEATURES
            </Td>
          </Tr>

          {/* Balcony and Terraces */}
          <Tr>
            <Td>a. Balcony and Terraces – 1st floor and above</Td>
            <Td>MS Railing</Td>
            <Td>SS 202 Railing</Td>
            <Td>SS 304 Railing with Toughened Glass</Td>
          </Tr>

          {/* Entrance Lobby */}
          <Tr>
            <Td rowSpan={2}>b. Entrance Lobby</Td>
            <Td>Vitrified Flooring</Td>
            <Td>Granite with Marble Inlay Flooring</Td>
            <Td>Marble Flooring and Designer False Ceiling</Td>
          </Tr>
          <Tr>
            <Td>Ramp for differently able people</Td>
            <Td>Ramp for differently able people</Td>
            <Td>Ramp for differently able people</Td>
          </Tr>

          {/* False Ceiling */}
          <Tr>
            <Td>c. False Ceiling</Td>
            <Td>&nbsp;</Td>
            <Td>Designer False Ceiling in living and dining area</Td>
            <Td>Designer False Ceiling in living area, dining and bedrooms</Td>
          </Tr>

          {/* Home Automation */}
          <Tr>
            <Td>d. Home Automation</Td>
            <Td>Video Door Phone</Td>
            <Td>Home Automation @ 25000</Td>
            <Td>Home Automation @ 100000</Td>
          </Tr>

          {/* Separator Row */}
          <Tr>
            <Td colSpan={5} bg="blue.300">&nbsp;</Td>
          </Tr>

          {/* Terms Header */}
          <Tr>
            <Td colSpan={5} fontWeight="bold" textAlign="center">
              TERMS:
            </Td>
          </Tr>

          {/* Terms Conditions */}
          <Tr>
            <Td colSpan={5}>
              * Final Price may vary depending upon plot/site conditions, applicable structural design and final chosen finishing items/features/addons.
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={5}>
              * Pick and choose customised option available to match your personality and lifestyle.
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={5}>
              Products can be customised as per customer needs/budget and requirements.
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={5}>
              The above rates are applicable for minimum 1500 sq.ft. built up area and plots located within 25 Kms radius of Pune. For other cities/metros, we shall give you the exact package pricing upon request.
            </Td>
          </Tr>
          <Tr>
            <Td colSpan={5}>
              5 year warranty on construction defects on all HAPPHO Packages.
            </Td>
          </Tr>
      </Tbody>
    </Table>
  );
};

export default HappyHomesPackages;

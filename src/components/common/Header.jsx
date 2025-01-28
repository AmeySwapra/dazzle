import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo/logo.png';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "House Construction",
      path: "#",
      submenu: [
        { name: "Cost Calculator", path: "/cost-calulator" },
        { name: "Construction Packages", path: "/packages" },
      ],
    },
    { name: "Design Cost", path: "/design-cost" },
    {
      name: "Choose City",
      path: "#",
      submenu: [
        { name: "Chhatrapati Sambhajinagar", path: "/chhatrapati-sambhajinagar" },
        { name: "Mumbai", path: "/mumbai" },
        { name: "Solapur", path: "/solapur" },
        { name: "Pune", path: "/pune" },
        { name: "Alibaug", path: "/alibaug" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <Box bg="white" boxShadow="0 4px 30px black" px={{ base: 4, md: 8, lg: 24 }} position="sticky" top={0} zIndex={10}>
      <Flex h={24} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box>
          <Link as={NavLink} to="/">
            <Image src={logo} alt="Company Logo" h={10} />
          </Link>
        </Box>

        {/* Hamburger Menu (Mobile & Tablet) */}
        <IconButton
          size="lg"
          icon={<HamburgerIcon />}
          color={'yellow.600'}
          background={'none'}
          aria-label="Toggle Navigation"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />

        {/* Desktop Menu */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Box key={item.name}>
              {item.submenu ? (
                <Menu>
                  <MenuButton
                    as={Link}
                    _hover={{ textDecoration: "none", color: "yellow.600" }}
                  >
                    {item.name}
                  </MenuButton>
                  <MenuList zIndex={1000}>
                    {item.submenu.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        as={NavLink}
                        to={subItem.path}
                        _hover={{ color: "yellow.600" }}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link
                  as={NavLink}
                  to={item.path}
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ textDecoration: "none", color: "yellow.600" }}
                >
                  {item.name}
                </Link>
              )}
            </Box>
          ))}
        </HStack>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image src={logo} alt="Company Logo" h={10} />
            </DrawerHeader>
            <DrawerBody>
              <VStack as="nav" spacing={4} align="start">
                {navItems.map((item) => (
                  <Box key={item.name}>
                    {item.submenu ? (
                      <Menu>
                        <MenuButton
                          as={Link}
                          px={'10px'}
                          _hover={{ textDecoration: "none", color: "yellow.600" }}
                        >
                          {item.name}
                        </MenuButton>
                        <MenuList>
                          {item.submenu.map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              as={NavLink}
                              to={subItem.path}
                              _hover={{ color: "yellow.600" }}
                              onClick={onClose} 
                            >
                              {subItem.name}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    ) : (
                      <Link
                        as={NavLink}
                        to={item.path}
                        px={2}
                        py={1}
                        rounded="md"
                        _hover={{ textDecoration: "none", color: "yellow.600" }}
                        onClick={onClose} 
                      >
                        {item.name}
                      </Link>
                    )}
                  </Box>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;

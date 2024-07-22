// components/Header.js
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Container,
  Img,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="static"
      w="100%"
      bg="black"
      zIndex="10"
      color={"white"}
    >
      <Container maxW="1320px" centerContent>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mt="35px"
        >
          <Flex align="center" mr={5}>
            <Img src="/logo.svg" alt="Logo" />
          </Flex>
          <IconButton
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Open Menu"
          />
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={4}
            justifyContent="flex-end"
            gap={"60px"}
          >
            <Link fontSize={"20px"} fontFamily={"Grandstander"}>
              Home
            </Link>

            <Link fontSize={"20px"} fontFamily={"Grandstander"}>
              About
            </Link>

            <Link fontSize={"20px"} fontFamily={"Grandstander"}>
              Tokenomics
            </Link>

            <Link _hover={{ textDecoration: "none" }}>
              <Box
                as="button"
                border="1px solid white"
                borderRadius="25px"
                padding="0.5rem 1rem"
                fontSize={"20px"}
                fontFamily={"Grandstander"}
                _hover={{ bg: "white", color: "black", textDecoration: "none" }}
              >
                Join Telegram
              </Box>
            </Link>
          </Stack>
        </Flex>
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              icon={<CloseIcon />}
              onClick={onClose}
              variant="outline"
              aria-label="Close Menu"
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <NextLink href="/" passHref>
                <Link onClick={onClose}>Home</Link>
              </NextLink>
              <NextLink href="/about" passHref>
                <Link onClick={onClose}>About</Link>
              </NextLink>
              <NextLink href="/tokenomics" passHref>
                <Link onClick={onClose}>Tokenomics</Link>
              </NextLink>
              <NextLink href="/whitepaper" passHref>
                <Link onClick={onClose}>Whitepaper</Link>
              </NextLink>
              <NextLink href="/socials" passHref>
                <Link onClick={onClose}>Socials</Link>
              </NextLink>
              <NextLink href="/join-telegram" passHref>
                <Link onClick={onClose}>
                  <Box
                    as="button"
                    border="1px solid white"
                    borderRadius="md"
                    padding="0.5rem 1rem"
                  >
                    Join Telegram
                  </Box>
                </Link>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

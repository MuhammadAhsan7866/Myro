'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#4CAD49" px={4} py={3}>
      <Container maxW={'1240px'} p={'0px'}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo Section */}
        <HStack spacing={3}>
          <Image src="/Rmo.png" alt="Logo"  />
          
        </HStack>
        <Flex gap={'35px'} alignItems={'center'}>
           {/* Desktop Navigation */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Text color="white" cursor="pointer">Enroll</Text>
          <Text color="white" cursor="pointer">Customer Service</Text>
          <Text color="white" cursor="pointer">ATM / Location</Text>
        </HStack>

        {/* Search Input */}
        <InputGroup
          w={{ base: '120px', sm: '180px', md: '400px' }}
          bg="white"
        
          display={{ base: 'none', sm: 'flex' }}
        >
          <Input placeholder="Search" border="none" />
          <InputRightElement>
            <Icon as={SearchIcon} color="gray.400" />
          </InputRightElement>
        </InputGroup>
        </Flex>
       

        {/* Mobile Hamburger Icon */}
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
      </Container>
      

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="green.500">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={4}>
              <Text color="white" onClick={onClose} cursor="pointer">Enroll</Text>
              <Text color="white" onClick={onClose} cursor="pointer">Customer Service</Text>
              <Text color="white" onClick={onClose} cursor="pointer">ATM / Location</Text>

              <InputGroup bg="white" borderRadius="md">
                <Input placeholder="Search" border="none" />
                <InputRightElement>
                  <Icon as={SearchIcon} color="gray.400" />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

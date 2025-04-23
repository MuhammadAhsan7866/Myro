import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  Button,
  Link,
  SimpleGrid,
  IconButton,
  Container,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#4CAD49">
      <Container maxW={"1240px"}>
        <Box color="white" py={10} px={[4, 8, 16]}>
          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            {/* Quick Links */}
            <VStack align="flex-start" spacing={3}>
              <Text fontWeight="bold">Quick Links</Text>
              <Link>help center</Link>
              <Link>form & agreements</Link>
              <Link>Location</Link>
              <Text fontSize="sm">© 2025, RMO. All Rights Reserved.</Text>
            </VStack>

            {/* Important Links */}
            <VStack align="flex-start" spacing={3}>
              <Text fontWeight="bold">Important Links</Text>
              <Link>Terms</Link>
              <Link>Privacy</Link>
              <Link>Security Accounts</Link>
            </VStack>

            {/* Connect With Us */}
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="600" fontSize={'22px'} lineHeight={'28px'}>Connect With Us</Text>
              <HStack spacing={2}>
                
              </HStack>
              <Flex
               maxW={'400px'}
               w={'100%'}
                borderRadius="md"
                overflow="hidden"
                border="2px solid"
                borderColor="green.500"
                h={'56px'}
                bg={'white'}
                alignItems={'center'}
              >
                <Input
                  placeholder="Email"
                  border="none"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{ boxShadow: "none" }}
                  flex="1"
                  bg="transparent"
                  borderRadius="0"
                />
                <Button
                  bg="#E8F6E8"
                  color="#4CAD49"
                  fontSize={'18px'}
                  fontWeight={'400'}
                  lineHeight={'28px'}
                  borderRadius="0"
                  _hover={{ bg: "green.200" }}
                  h={'59px'}
                >
                  Subscribe
                </Button>
              </Flex>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

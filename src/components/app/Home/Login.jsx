// components/LoginForm.js
"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import InfoBanner from "./Info";

const LoginForm = () => {
  return (
    <Container maxW="950px" mx="auto" px={{ base: 4, md: 0 }} pt={{ base: 10, md: 20 }}>
      <Box
        bg="white"
        p={{ base: "30px 20px", md: "60px 40px" }}
        borderRadius="18px"
      >
        <Text
          fontSize={{ base: "30px", md: "40px", lg: "50px" }}
          fontWeight="400"
          textAlign="center"
          mb={6}
          lineHeight="1.2"
        >
          Good morning
        </Text>

        <Flex
          flexDir="column"
          gap="20px"
          maxW="610px"
          w="100%"
          m="auto"
        >
          <Box
            border="1px solid #BBBBBB"
            borderRadius="50px"
            p="12px 22px"
          >
            <Input
              placeholder="Username"
              p={0}
              border="none"
              outline="none"
              _focusVisible="none"
            />
          </Box>
          <Box
            border="1px solid #BBBBBB"
            borderRadius="50px"
            p="12px 22px"
          >
            <Input
              placeholder="Password"
              type="password"
              border="none"
              outline="none"
              _focusVisible="none"
            />
          </Box>
          <Checkbox color="#777777">Save username</Checkbox>
          <Text
            fontSize={{ base: "12px", md: "15px" }}
            fontWeight="400"
            lineHeight="20px"
            color="#444444"
          >
            To help keep your account secure, save your username only on devices
            that aren’t used by other people.
          </Text>
        </Flex>

        <Flex alignItems="center" justifyContent="center" mt="22px">
          <Button
            bg="#E2DEDE"
            borderRadius="50px"
            maxW="210px"
            w="100%"
            color="#B5ADAD"
            h="46px"
            _hover={{ bg: "#D0CCCC" }}
          >
            sign on
          </Button>
        </Flex>

        <Link
         href="https://www.rmous.org/digital/forgot"
          display="block"
          mt={4}
          color="green.500"
          textAlign="center"
          fontSize={{ base: "14px", md: "16px" }}
          
        >
          Forget username or password
        </Link>
        
      </Box>

      <InfoBanner />
    </Container>
  );
};

export default LoginForm;

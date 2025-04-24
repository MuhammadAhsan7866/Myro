// components/LoginForm.js
"use client";
import React, { useEffect, useState } from "react";
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
  const [greeting, setGreeting] = useState("Welcome");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, []);

  const isFormValid = username.trim() !== "" && password.trim() !== "" && isChecked;

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
          {greeting}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Checkbox
            color="#777777"
            isChecked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          >
            Save username
          </Checkbox>
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
            bg={isFormValid ? "green.500" : "#E2DEDE"}
            color={isFormValid ? "white" : "#B5ADAD"}
            borderRadius="50px"
            maxW="210px"
            w="100%"
            h="46px"
            _hover={{ bg: isFormValid ? "green.600" : "#D0CCCC" }}
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

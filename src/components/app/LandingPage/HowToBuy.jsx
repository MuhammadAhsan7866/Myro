// components/AboutMyro.js
import React from "react";
import { Box, Flex, Image, Text, Heading, Container, Button } from "@chakra-ui/react";

const HowToBuy = () => {
  return (
    <Container maxW={"1320px"} mt={"50px"}>
      <Flex
        flexDir={{base:'column',sm:'column',md:'column',lg:'row'}}
        alignItems={"flex-start"}
        justify="space-between"
        bg="black"
        color="white"
      >
        <Image src="/base_picture.svg" alt="dog illustration" mb={4} />

        <Box
          w={{ base: "100%", md: "90%",lg:'50%' }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading as="h1" fontSize={"70px"} fontWeight="bold" mb={4}>
            How to buy $MYRO
          </Heading>
          <Text
            mb={"42px"}
            fontSize={"20px"}
            fontWeight={"400"}
            lineHeight={"140%"}
          >
            To buy $MYRO, download phantom wallet, purchase $SOL from an
            exchange or bridge $SOL and send it to your Phantom wallet then buy
            $MYRO on Jupiter or Raydium. You can also buy $MYRO on a wide
            variety of centralised exchanges, including Crypto.com, Kucoin,
            Bybit and others.
          </Text>
          <Button
                bg="transparent"
                colorScheme="transparent"
                variant="outline"
                h={"50px"}
                border={"1px solid white"}
                borderRadius={"20px"}
                color={"white"}
                fontWeight={"500"}
              >
              Get Phantom
              </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default HowToBuy;

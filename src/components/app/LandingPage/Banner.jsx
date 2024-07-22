// components/MyroBanner.js
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Container,
} from "@chakra-ui/react";

const MyroBanner = () => {
  return (
    <Box
      mt={"261px"}
      mb={{base:'50px',md:'400px'}}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="black"
      color="white"
    >
      <Container maxW={"1320px"} m={"auto"}>
        <Flex pos={"relative"}>
          <Image
            aria-hidden="true"
            alt="bone"
            src="/intro_picture.png"
            display="inline-block"
            maxW={"760px"}
            w={"100%"}
            pos={"absolute"}
            right={"-50px"}
            top={"-324px"}
            pointerEvents={"none"}
            zIndex={"0"}
          />

          <Box
            textAlign={{ base: "center", md: "left" }}
            w={{ base: "full", md: "100%" }}
          >
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={"30px"}
            >
              <Heading as="h1" fontSize={{ base: "46px", md: "70px" }} mb={4}>
                Welcome to
              </Heading>
              <Image
                aria-hidden="true"
                alt="bone"
                src="/bone.png"
                display="inline-block"
              />
            </Flex>
            <Image
              aria-hidden="true"
              alt="bone"
              src="/miro_text.png"
              display="inline-block"
              mb={"32px"}
            />
            <Text color="white" mb={"32px"} fontSize={"20px"}>
              Myro the dog: Named after Solana Co-founder Raj Gokal's dog Myro.
            </Text>
            <Flex justify={{ base: "center", md: "start" }} spacing={4}>
              <Button
                colorScheme="white"
                variant="solid"
                mr={4}
                bg={"white"}
                borderRadius={"20px"}
                fontSize={"20px"}
                color={"black"}
                py={"14px"}
                px={"20px"}
                h={"50px"}
                fontWeight={"500"}
              >
                Buy on Raydium
              </Button>
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
                Learn More
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default MyroBanner;

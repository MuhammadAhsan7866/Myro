import { Box, Grid, Text, VStack, AspectRatio, Img } from "@chakra-ui/react";
import { useState } from "react";

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Box bg="black" color="white" py={"64px"}>
      <Box px={{ base: 4, md: 8 }} maxW="1320px" mx="auto">
        <Grid
          templateColumns={{ base: "1fr", md: "40% 60%" }}
          alignItems="center"
        >
          <VStack
            spacing={4}
            gap={"27px"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Text
              fontSize={{ base: "xl", md: "48px" }}
              fontWeight="bold"
              lineHeight={"1.04em"}
              letterSpacing={".96px"}
              fontFamily={"sans-serif"}
            >
              How it works
            </Text>
            <Text
              fontSize={{ base: "xl", md: "20px" }}
              fontWeight="400"
              lineHeight={"1.5em"}
              letterSpacing={".4px"}
              fontFamily={"sans-serif"}
              display={"flex"}
              alignItems={"center"}
              gap={"24px"}
            >
              <Text
                as={"span"}
                fontSize={{ base: "xl", md: "48px" }}
                fontWeight="bold"
                lineHeight={"1.04em"}
                letterSpacing={".96px"}
                fontFamily={"sans-serif"}
                display={"flex"}
                alignItems={"center"}
                gap={"24px"}
              >
                1.
              </Text>
              Tell us about your project and the skills you're looking for
            </Text>
            <Text
              fontSize={{ base: "xl", md: "20px" }}
              fontWeight="400"
              lineHeight={"1.5em"}
              letterSpacing={".4px"}
              fontFamily={"sans-serif"}
              display={"flex"}
              alignItems={"center"}
              gap={"24px"}
            >
              <Text
                as={"span"}
                fontSize={{ base: "xl", md: "48px" }}
                fontWeight="bold"
                lineHeight={"1.04em"}
                letterSpacing={".96px"}
                fontFamily={"sans-serif"}
                display={"flex"}
                alignItems={"center"}
                gap={"24px"}
              >
                2.
              </Text>
              Instantly browse qualified talent with proven track records
            </Text>
            <Text
              fontSize={{ base: "xl", md: "20px" }}
              fontWeight="400"
              lineHeight={"1.5em"}
              letterSpacing={".4px"}
              fontFamily={"sans-serif"}
              display={"flex"}
              alignItems={"center"}
              gap={"24px"}
            >
              <Text
                as={"span"}
                fontSize={{ base: "xl", md: "48px" }}
                fontWeight="bold"
                lineHeight={"1.04em"}
                letterSpacing={".96px"}
                fontFamily={"sans-serif"}
                display={"flex"}
                alignItems={"center"}
                gap={"24px"}
              >
                3.
              </Text>
              Hire quickly and securely with our customizable tools
            </Text>
          </VStack>
          <Box position="relative" w="full">
            <Img src="/vode.png" />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;

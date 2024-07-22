// components/AboutMyro.js
import React from "react";
import { Box, Flex, Image, Text, Heading, Container } from "@chakra-ui/react";

const AboutMyro = () => {
  return (
    <Container maxW={"1320px"} mt={"50px"}>
      <Flex
        flexDir={{base:'column',sm:'column',md:'column',lg:'row'}}
        align="center"
        justify='space-between'
        bg="black"
        color="white"
        
      >
       
          <Image
            src="/about_picture.svg"
            alt="dog illustration"
          
            mb={4}
          />
        
        <Box
         w={{ base: "100%", md: "90%",lg:'50%' }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading as="h1" fontSize={'70px'} fontWeight="bold" mb={4}>
            About $MYRO
          </Heading>
          <Text mb={'42px'} fontSize={'20px'}fontWeight={'400'} lineHeight={'140%'}>
            Many may ask, what is Myro? Myro is the name of the dog owned by Raj
            Gokal, one of the co-founders of Solana. This project pays homage to
            him, and his dog, and responds to the popular demand for dog-based
            narratives in the crypto space. Myro was created in response to this
            demand, and to provide value to the ecosystem created by Raj and his
            partner — the Solana blockchain.
          </Text>
          <Text   fontSize={'20px'}fontWeight={'400'} lineHeight={'140%'}>
            Myro is more than just a cryptocurrency, it is also a movement. We
            believe that Solana has the potential to change the world for the
            better, and we are committed to making it more inclusive and
            welcoming for everyone.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutMyro;

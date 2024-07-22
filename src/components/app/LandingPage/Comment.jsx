// pages/index.js
import { Box, Text, Image, Flex, Img } from '@chakra-ui/react';
import styled from '@emotion/styled';

// Define the bounce animation
const BounceAnimation = styled.img`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  animation: bounce 2s infinite;
`;

const BackgroundBox = styled(Box)`
  position: absolute;
  left: 28%;
  width: 100%;
  height: 250px;
  background: #30e9a1;
  opacity: 0.2;
  filter: blur(108px);
  border-radius: 50%;
  max-width: 250px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #30e9a1;
    opacity: 0.2;
    filter: blur(108px);
    border-radius: 50%;
  }
`;

const Comment = () => {
  return (
    <Flex
     
      justify="center"
      minH="60vh"
      bg="black"
      color="white"
      position="relative"
      overflow="hidden"
      pb="210px"
      pt={'100px'}
     

    >
      {/* Background Effect using styled Box */}
      <BackgroundBox />

      <Box
        p="32px"
        bg="card"
        color="card-foreground"
        borderRadius="24px"
        boxShadow="lg"
        maxW="780px"
        position="relative"
        zIndex="1"
        border="4px solid white"
      >
        <Text
          position="absolute"
          top="0"
          left="0"
          mt={4}
          ml={4}
          fontSize="50px"
        >
          ❞
        </Text>
      
        <Text mt={8} fontSize="20px">
          With Myro, we have created a revolutionary digital currency that is designed for simplicity, security, and accessibility.
        </Text>
        <Text mt={4} fontSize="20px">
          Our goal is to provide a seamless crypto experience for everyone. Whether you are an experienced trader or a curious beginner, Myro is here to meet your needs and assist you in exploring the world of digital currencies.
        </Text>
      </Box>
      
      {/* Image with bounce animation */}
      <BounceAnimation
        src="/comment_picture.svg"
        alt="comment"
        style={{
          position: 'absolute',
          right: '13%',
          top: '39%',
          maxWidth: '296px',
        }}
      />
    </Flex>
  );
};

export default Comment;

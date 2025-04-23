// components/FeatureCards.js
"use client";
import { Box, Flex, Text, Link, VStack, Icon, Img } from "@chakra-ui/react";
import { FaUserPlus, FaHeadset, FaGift } from "react-icons/fa";

const features = [
  {
    icon: FaUserPlus,
    title: "Enroll for Online Access",
    description: "Enroll in digital banking",
    link: "#",
    image: "/users.png",
  },
  {
    icon: FaHeadset,
    title: "Learn more about Digital Services",
    description: "Learn more",
    link: "#",
    image: "/help.png",
  },
  {
    icon: FaGift,
    title: "Help Center",
    description: "Contact us",
    link: "#",
    image: "/services.png",
  },
];

const FeatureCards = () => {
  return (
    <Flex
      wrap="wrap"
      justify="center"
      gap={{ base: '65px', md: 8 }}
      px={{ base: 4, md: 10 }}
      py={{ base: '85px', md: 24 }}
    >
      {features.map((feature, idx) => (
        <Flex
          key={idx}
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          w={{ base: "100%", sm: "45%", md: "30%" }}
          pos="relative"
          h={{ base: "auto", md: "327px" }}
          flexDirection="column"
          justify="center"
          alignItems="center"
        >
          <Flex
            bg="white"
            alignItems="center"
            justify="center"
            w="100px"
            h="100px"
            borderRadius="full"
            position="absolute"
            top="-50px"
          >
            <Img src={feature.image} boxSize="60px" />
          </Flex>

          <Box mt="60px">
            <Text
              fontWeight="400"
              fontSize={{ base: "20px", md: "24px", lg: "30px" }}
              lineHeight="1.2"
              mb="20px"
            >
              {feature.title}
            </Text>
            <Link
              color="#4CAD49"
              fontWeight="400"
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight="28px"
              href={feature.link}
            >
              {feature.description}
            </Link>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default FeatureCards;

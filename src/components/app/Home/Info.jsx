// components/InfoBanner.js
"use client";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const InfoBanner = () => {
  return (
    <Box
      bg="white"
      p={{ base: 4, md: 6 }}
      mt={{ base: "30px", md: "50px" }}
      borderRadius="md"
    >
      <Box
        p={{ base: 4, md: 8 }}
        border="1px solid #BBBBBB"
        borderRadius="md"
      >
        <Text
          fontWeight="400"
          mb={4}
          fontSize={{ base: "20px", md: "28px", lg: "32px" }}
          lineHeight={{ base: "28px", md: "32px", lg: "36px" }}
        >
          Investment and Insurance Products are:
        </Text>
        <UnorderedList spacing={3}>
          <ListItem
            mb="12px"
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="500"
            lineHeight="28px"
          >
            Not Insured by the FDIC or Any Federal Government Agency
          </ListItem>
          <ListItem
            mb="12px"
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="500"
            lineHeight="28px"
          >
            Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or
            Any Bank Affiliate
          </ListItem>
          <ListItem
            mb="12px"
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="500"
            lineHeight="28px"
          >
            Subject to Investment Risks, Including Possible Loss of the Principal
            Amount Invested
          </ListItem>
        </UnorderedList>
      </Box>

      <Text
        fontSize={{ base: "14px", md: "15px" }}
        fontWeight="400"
        lineHeight="20px"
        mt={4}
      >
        Deposit products offered by Wells RMO Bank, N.A. Member FDIC.
      </Text>
    </Box>
  );
};

export default InfoBanner;

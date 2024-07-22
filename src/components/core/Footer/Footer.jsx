import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Img,
  Flex,

} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={'black'}
    p={{base:'25px',sm:'25px',md:'30px',lg:'40px',xl:'50px',xxl:'70px'}}>
      <Container as={Stack} maxW={'1440px'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Box>
              <Img src="/upwork.svg" alt="logo" />
              <Text
                fontSize={"16px"}
                fontWeight={400}
                lineHeight={"24px"}
                mt="15px"
                color={"white"}
                mb={"25px"}
              >
                Innovate today, lead tomorrow.
              </Text>
              <Flex flexDirection={"column"} gap={"30px"}>
              <Flex alignItems={"center"} gap={"25px"} mt={"0px !important"}>
                <Img src="/fb-footer.svg" />
                <Link href={"#"} color={"white"}>
                  Facebook
                </Link>
              </Flex>
              <Flex alignItems={"center"} gap={"25px"} mt={"0px !important"}>
                <Img src="/twitter-footer.svg" />
                <Link href={"#"} color={"white"}>
                  Twitter
                </Link>
              </Flex>
              <Flex alignItems={"center"} gap={"25px"} mt={"0px !important"}>
                <Img src="/lindin-footer.svg" />
                <Link href={"#"} color={"white"}>
                  Linkedin
                </Link>
              </Flex>
            </Flex>
            </Box>
          </Stack>

          <Stack gap={'14px'} align={'flex-start'} >
          <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
             <Text color={'white'}> Pages</Text>
              </Box>
            <Link color={'white'} href={'#'}>Home</Link>
            <Link color={'white'} href={'#'}>Our Work</Link>
            <Link color={'white'} href={'#'}> Case Studies</Link>
            <Link color={'white'} href={'#'}> Services</Link>
            <Link color={'white'} href={'#'}> About</Link>
          </Stack>

          <Stack align={'flex-start'} gap={'14px'}>
          <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
             <Text color={'white'}> Services</Text>
              </Box>
            <Link color={'white'} href={'#'}>Web Design&Development</Link>
            <Link color={'white'} href={'#'}>Seo Optimization</Link>
            <Link color={'white'} href={'#'}>Ecommerce Website</Link>
            <Link color={'white'} href={'#'}>Digital Marketing</Link>
          </Stack>

          <Stack align={'flex-start'} gap={'14px'}>
          <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
             <Text color={'white'}> Support</Text>
              </Box>
            <Link  color={'white'} href={'#'}>Contact Us </Link>
            <Link  color={'white'} href={'#'}>Privacy Policy</Link>
            <Link  color={'white'} href={'#'}>Terms of Service</Link>
           
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'#253538'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Text color={'#7B7A7A'}>Copyright © 2024 Braintree. All rights reserved</Text>
         
        </Container>
      </Box>
    </Box>
  );
}
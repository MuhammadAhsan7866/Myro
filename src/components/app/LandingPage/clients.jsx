import { Box, Container, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

const ClientsImages = () => {
  return (
    <>
      <Box py={'64px'} bg={'black'}>
      <Container maxW={'1280px'} p={'0'}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={'30px'}>
      <Text color={'white'} fontSize={'13px'}>TRUSTED BY</Text>
      <Img src='/1.png' w={'15%'} />
      <Img src='/2.png' w={'15%'}/>
      <Img src='/3.png' w={'15%'}/>
      <Img src='/5.png' w={'15%'}/>
      <Img src='/6.png' w={'15%'}/>
     <Text color={'white'} fontSize={'13px'}>AND MORE</Text>
      </Flex>
      </Container>
      </Box>
    </>
  )
}

export default ClientsImages
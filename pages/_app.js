// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'





import { mynewtheme } from '../src/theme'
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper'

function Marketplace({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <LayoutWrapper>
     
      
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  )
}

export default Marketplace
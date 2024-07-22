// components/ImageSlider.js
import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
    { src: '/binance.png', alt: 'KUCOIN logo' },
  ];

  return (
    <Box bg="black" p={4} maxW="1320px" mx="auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} px="17.5px">
            <Flex
              p={4}
             borderRadius={'24px'}
              border="1px"
              borderColor="white"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={image.src} alt={image.alt} />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: (i) => (
        <Box
            position='relative'
            top='-25px'
            width="1rem"
            height="1rem"
            bg="white"
            borderRadius="50%"
            m="0 5px"
            _hover={{ bg: "blue.500" }}
            transition="background-color 0.3s"
        />
      ),
      dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box width="90%" mx="auto" pb='2rem' h={{ base: '25rem', md: '35rem' }} position='relative'>
      <Slider {...settings}>
        <Box
            height={{ base:'25rem', md: '35rem' }}
            backgroundImage='https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/banner%201.png'
            backgroundSize='cover'
            borderRadius='1rem'
        >
        </Box>
        <Box
            height={{ base:'25rem', md: '35rem' }}
            backgroundImage='https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/advBig.jpg'
            backgroundSize='cover'
            backgroundPosition='center'
            borderRadius='1rem'
        >
        </Box>
        <Box
            height={{ base:'25rem', md: '35rem' }}
            backgroundImage='/multimedia/adv_1.jpg'
            backgroundSize='cover'
            backgroundPosition='center'
            borderRadius='1rem'
        >
        </Box>
      </Slider>
    </Box>
  );
}

export default Carousel;
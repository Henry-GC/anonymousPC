import {
    Box,
    Stack,
    HStack,
    VStack,
    Divider,
    Image,
    Text,
    Button,
    IconButton,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import './Assets/Styles/Footer.css'
  
  const Footer = () => {

    const {theme} = useContext(ThemeContext)

    return (
      <>
        <Box
          className='container-footer'
          bg={theme.backgroundColor}
        >
          <Box px={{ base: '0.5rem', md: '2rem' }} className='footer-logo'>
            <ChakraLink href='/'>
              <Box className='logo-picture'>
                <img src='https://ax8vpotqikpi.objectstorage.us-phoenix-1.oci.customer-oci.com/n/ax8vpotqikpi/b/anonymouspc/o/src%2Fpublic%2FlogoLogo.png' width='100%'/>
              </Box>
            </ChakraLink>
            
            <Box display={'flex'} flexDirection='column' alignItems='center'>
              <Text fontSize={{ base: '.7rem', md:'1rem'}}>soporte@anonymouspc.net</Text>
              <Box>
                <Box>
                  <Box className='title-footer-section'>Síguenos en nuestras redes</Box>
                  <Box className='social-media-links'>
                    <ChakraLink
                      href='https://www.facebook.com/profile.php?id=100063737155824&mibextid=ZbWKwL'
                      target='_blank'
                      fontSize='2.5rem'
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </ChakraLink>
                    <ChakraLink
                      href='https://www.instagram.com/anypcstore?igsh=YmExbjFramp3eWM3'
                      target='_blank'
                      fontSize='2.5rem'
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </ChakraLink>
                    <ChakraLink
                      fontSize='2.5rem'
                    >
                      <i className="fa-brands fa-tiktok"></i>
                      </ChakraLink>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className='footer-main'>
            <Box className='footer-section'>
              <Text className='title-footer-section'>Navegación</Text>
              <Box className='footer-section-links'>
                <ChakraLink href='/' width='fit-content'>Inicio</ChakraLink>
                <ChakraLink as={Link} to='/productos' width='fit-content'>Productos</ChakraLink>
                <ChakraLink as={Link} to='/ensambles' width='fit-content'>Ensambles</ChakraLink>
                <ChakraLink as={Link} to='/nosotros' width='fit-content'>Nosotros</ChakraLink>
                <ChakraLink as={Link} to='/login' width='fit-content'>Usuario</ChakraLink>
              </Box>
            </Box>
            <Box className='footer-section' width={'fit-content'}>
              <Box className='title-footer-section'>Contacto</Box>
              <Box className='footer-section-links'>
                <Text>+593 962722446</Text>
                <Text>Av Sucre y Eugenio Espejo</Text>
                <Box
                    width={{base:'10rem', md:'auto'}}
                    height={{base:'8rem', md:'auto'}}
                    display={{base:'flex', md:'block'}}
                    alignItems={{base:'center', md:'none'}}
                    justifyContent={{base:'center',md:'none'}}
                    overflow={{base:'hidden',md:'none'}}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d997.3115738095066!2d-79.653746!3d0.9702279999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fd4bc012f9c8a3b%3A0xc786de46c77250b2!2sSucre%201246%2C%20Esmeraldas!5e0!3m2!1ses!2sec!4v1725150996689!5m2!1ses!2sec"
                    style={{border:`solid 1px ${theme.color}`}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
                
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className='bottom-footer'
          bg={theme.secondaryBackground}
          gap={'1rem'}
        >
          Desarrollado por
          <ChakraLink href='https://henrygc.com'  target='_blank'><strong>HenryGC</strong></ChakraLink>
        </Box>
      </>
    );
  };
  
  export default Footer;
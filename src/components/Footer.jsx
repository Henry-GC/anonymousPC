import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
    IconButton,
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FaGithub } from 'react-icons/fa';
  import { BsDiscord } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import './Assets/Styles/Footer.css'
  
  const Footer = () => {

    const {theme} = useContext(ThemeContext)

    return (
      <>
        <Box
          className='container-footer'
          bg={theme.backgroundColor}
        >
          <Box>
            <Box className='logo-picture'>
              <img src='/multimedia/logo.png' width='100%'/>
            </Box>
            <Box>
              <Text>support@anonymouspc.net</Text>
              <Box>
                
              </Box>
            </Box>
          </Box>

          <Box className='footer-main'>
            <Box className='footer-section'>
              <Text className='title-footer-section'>Navegación</Text>
              <Box className='footer-section-links'>
                <Link href='#'>Inicio</Link>
                <Link href='#'>Productos</Link>
                <Link href='#'>Ensambles</Link>
                <Link href='#'>Nosotros</Link>
                <Link href='#'>Usuario</Link>
              </Box>
            </Box>
            <Box className='footer-section'>
              <Box className='title-footer-section'>Contacto</Box>
              <Box className='footer-section-links'>
                <Text href='#'>+593 962722446</Text>
                <Text>Av Sucre y Manuel Espejo</Text>
              </Box>
            </Box>
            <Box className='footer-section'>
              <Box className='title-footer-section'>Síguenos</Box>
              <Box className='social-media-links'>
                <Link
                  href='https://www.facebook.com/profile.php?id=100063737155824&mibextid=ZbWKwL'
                  target='_blank'
                  fontSize='2.5rem'
                >
                  <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link
                  href='https://www.instagram.com/anypcstore?igsh=YmExbjFramp3eWM3'
                  target='_blank'
                  fontSize='2.5rem'
                >
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link fontSize='2.5rem'><i class="fa-brands fa-tiktok"></i></Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className='bottom-footer'
          bg={theme.secondaryBackground}
        >
          Todos los derechos reservados
        </Box>
      </>
    );
  };
  
  export default Footer;
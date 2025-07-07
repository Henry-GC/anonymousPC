import React, { useContext, useState } from "react";
import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import "../Assets/Styles/Inicio.css"
import Footer from "../Footer";
import { ThemeContext } from "../Context/ThemeContext";
import Carousel from "../BannerSlider";
import RelevantProducts from "../RelevantProducts";
import RelevantBuilds from "../RelevantBuilds";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useScrollToTop from "../Hooks/useScrollToTop";
import { HamburgerIcon } from '@chakra-ui/icons';

function Inicio(){

    const {theme} = useContext(ThemeContext)
    useScrollToTop();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return(
        <>
        <Box
            className="inicio-container"
            bg={theme.backgroundColor}
        >
            <Box
                className="landing-container"
            >
                <Box
                    className="section1-inicio"
                    bg={theme.secondaryBackground}
                >
                    {/* Menú hamburguesa para móviles */}
                    <Box className="mobile-menu-button" display={{ base: "block", md: "none" }}>
                        <IconButton
                            icon={<HamburgerIcon />}
                            onClick={onOpen}
                            bg={theme.backgroundColor}
                            color={theme.color}
                            aria-label="Abrir menú de accesos directos"
                            size="lg"
                        />
                    </Box>

                    {/* Accesos directos desktop */}
                    <Box className="direct-access-container" display={{ base: "none", md: "flex" }}>
                        <ChakraLink as={Link} to='/ensambles' _hover={{textDecoration:'none'}}>
                            <Box className="direct-access">
                                <i className="fas fa-desktop"></i>
                                <h2>PC Gamer</h2>
                            </Box>
                        </ChakraLink>
                        <Box
                            className="direct-access"
                        >
                            <i className="fas fa-gamepad"></i>
                            <Box textAlign={'center'} width={'min-content'} lineHeight={'1.2rem'}><h2>Calculadora de Rendimieto</h2></Box>
                        </Box>
                        <Box
                            className="direct-access"
                        >
                            <i className="fas fa-laptop"></i>
                            <h2>Laptop</h2>
                        </Box>
                        <Box
                            className="direct-access"
                        >
                            <i className="far fa-keyboard"></i>
                            <h2>Combos</h2>
                        </Box>
                        <Box
                            className="direct-access"
                        >
                            <i className="fas fa-wrench"></i>
                            <h2>Refurbished</h2>
                        </Box>
                        <Box
                            className="direct-access"
                        >
                            <i className="fas fa-hand-spock"></i>
                            <h2>Nosotros</h2>
                        </Box>
                    </Box>

                    <Carousel/>
                </Box>

                {/* Drawer para menú móvil */}
                <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
                    <DrawerOverlay />
                    <DrawerContent bg={theme.backgroundColor}>
                        <DrawerCloseButton color={theme.color} />
                        <DrawerHeader borderBottomWidth="1px" color={theme.color}>
                            Accesos Directos
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4} align="stretch" mt={4}>
                                <ChakraLink as={Link} to='/ensambles' onClick={onClose} _hover={{textDecoration:'none'}}>
                                    <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                        <i className="fas fa-desktop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                        <Text color={theme.color} fontWeight="bold">PC Gamer</Text>
                                    </Box>
                                </ChakraLink>
                                
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-gamepad" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Calculadora de Rendimiento</Text>
                                </Box>
                                
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-laptop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Laptop</Text>
                                </Box>
                                
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="far fa-keyboard" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Combos</Text>
                                </Box>
                                
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-wrench" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Refurbished</Text>
                                </Box>
                                
                                <ChakraLink as={Link} to='/nosotros' onClick={onClose} _hover={{textDecoration:'none'}}>
                                    <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                        <i className="fas fa-hand-spock" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                        <Text color={theme.color} fontWeight="bold">Nosotros</Text>
                                    </Box>
                                </ChakraLink>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <Box className="adv-container" pt='5rem'>
                    <Box className="adv-inside">
                        <Box className="big-adv">
                            <img alt="big Adv" src="/multimedia/advBig.jpg" width="110%"/>
                        </Box>
                        <Box className="sb-column">
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv1.jpg" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv2.jpg" width="100%"/>
                                </Box>
                            </Box>
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv3.png" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv4.png" width="100%"/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <RelevantProducts/>
                <RelevantBuilds/>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Inicio
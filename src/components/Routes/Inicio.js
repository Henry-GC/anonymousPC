import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import "../Assets/Styles/Inicio.css"
import Footer from "../Footer";
import { ThemeContext } from "../Context/ThemeContext";
import Carousel from "../BannerSlider";
import RelevantProducts from "../RelevantProducts";
import RelevantBuilds from "../RelevantBuilds";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useScrollToTop from "../Hooks/useScrollToTop";

function Inicio(){
    const {theme} = useContext(ThemeContext)
    useScrollToTop();
    
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
                    {/* Accesos directos desktop */}
                    <Box className="direct-access-container" display={{ base: "none", md: "flex" }}>
                        <ChakraLink as={Link} to='/productos' _hover={{textDecoration:'none'}}>
                            <Box className="direct-access">
                                <i className="fas fa-desktop"></i>
                                <h2>Productos</h2>
                            </Box>
                        </ChakraLink>
                        <Box
                            className="direct-access"
                        >
                            <i className="fas fa-gamepad"></i>
                            <Box textAlign={'center'} width={'min-content'} lineHeight={'1.2rem'}><h2>Calculadora de Rendimieto</h2></Box>
                        </Box>
                        <ChakraLink as={Link} to='/ensambles' _hover={{textDecoration:'none'}}>
                            <Box className="direct-access">
                                <i className="fas fa-desktop"></i>
                                <h2>PC Gamer</h2>
                            </Box>
                        </ChakraLink>
                        <Box
                            className="direct-access"
                        >
                            <ChakraLink as={Link} to='/laptops' _hover={{textDecoration:'none'}}>
                                <Box className="direct-access">
                                    <i className="fas fa-laptop"></i>
                                    <h2>Laptop</h2>
                                </Box>
                            </ChakraLink>
                        </Box>
                        <Box
                            className="direct-access"
                        >   
                            <ChakraLink as={Link} to='/refurbished' _hover={{textDecoration:'none'}}>
                                <Box className="direct-access">
                                    <i className="fas fa-wrench"></i>
                                    <h2>Refurbished</h2>
                                </Box>
                            </ChakraLink>
                        </Box>
                        <ChakraLink as={Link} to='/nosotros' _hover={{textDecoration:'none'}}>
                            <Box className="direct-access">
                                <i className="fas fa-hand-spock"></i>
                                <h2>Nosotros</h2>
                            </Box>
                        </ChakraLink>
                    </Box>

                    <Carousel/>
                </Box>

                <Box className="adv-container" pt='5rem'>
                    <Box className="adv-inside">
                        <Box className="big-adv">
                            <img alt="big Adv" src="https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/advBig.jpg" width="110%"/>
                        </Box>
                        <Box className="sb-column">
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv1.jpg" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/adv2.jpg" width="100%"/>
                                </Box>
                            </Box>
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv3.png" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/adv4.png" width="100%"/>
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
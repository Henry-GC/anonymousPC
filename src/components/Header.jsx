import NavBar from "./NavBar";
import { useState, useRef, useEffect, useContext } from "react";
import "./Assets/Styles/Header.css"
import { ShopCart } from "./ShopCart";
import { Link, useLocation } from "react-router-dom";
import useCart from "./Hooks/useCart";
import { Box, Text, Link as ChakraLink, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { ThemeContext } from "./Context/ThemeContext";
import ThemeToggleSwitch from "./toggleThemeSwitch";

export default function Header (props){
    const {theme} = useContext(ThemeContext);
    const [isCheked, setChecked] = useState(false);
    const [buscar, setBuscar] = useState("");
    const location = useLocation();
    const headerRef = useRef(null);

    const { setAddCart } = useCart();

    const cartSync = () => {
        const cart = localStorage.getItem('cart');
        if (cart && cart !== '[]') {
            const newCart = JSON.parse(cart);
            setAddCart(newCart);
        }
    }

    useEffect(()=>{
        cartSync();
    },[]);

    useEffect(() => {
        if (!isCheked){
            let prevScrollPos = window.scrollY; 
      
            const handleScroll = () => { 
            const currentScrollPos = window.scrollY; 
            const headerElement = headerRef.current; 
            if (!headerElement) { 
                return; 
            } 
            if (prevScrollPos > currentScrollPos) { 
                headerElement.style.transform = "translateY(0)";
            } else { 
                headerElement.style.transform = "translateY(-100%)"; 
            } 
            prevScrollPos = currentScrollPos; 
            } 
            window.addEventListener('scroll', handleScroll) 
        
            return () => { 
            window.removeEventListener('scroll', handleScroll) 
            }
        } 
      }, [isCheked]);

    const searchChange = (e) => {
        setBuscar(e.target.value);
    };
    const searchSubmit = (e) => {
        e.preventDefault();
        props.onSearch(buscar);
        setBuscar("");
    };

    // Drawer para menú hamburguesa móvil
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return(
        <Box
            className={`header ${isCheked ? 'sticky' : ''}`}
            ref={headerRef}
            bg={theme.backgroundColor}
        >
            {/* <ThemeToggleSwitch/> */}
            <Box
                className="header-container"
            >
                <Box className="home-container">
                    <Box className="logo-container">
                        <ChakraLink href="/">
                            <img alt="ISOLOGO" src="https://ax8vpotqikpi.objectstorage.us-phoenix-1.oci.customer-oci.com/n/ax8vpotqikpi/b/anonymouspc/o/src%2Fpublic%2Fisologoisologo.png" width="100%"/>
                        </ChakraLink>
                    </Box>
                    <Box className="search-container">
                        <form onSubmit={searchSubmit}>
                            <button type='submit'>
                                <i id="lupa" className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input type="text" value={buscar} onChange={searchChange} placeholder='Buscar...'/>
                        </form>
                    </Box>
                </Box>
                <Box className="bar-container">
                    <Link
                        to="/usuario"
                        className='login'
                    >
                        <Box color={theme.color}>
                            <i className="fa-regular fa-user"></i>
                        </Box>
                        <Box
                            color={theme.color}
                            fontSize='.8rem'
                            className="login-text"
                        >
                            <Text as='h2' fontWeight='300'>Mi cuenta</Text>
                            <Text as='strong'>Ingresar</Text>
                        </Box>
                    </Link>
                    <ShopCart isCheked={isCheked} setChecked={setChecked}/>
                </Box>
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
                            <ChakraLink as={Link} to='/productos' onClick={onClose} _hover={{textDecoration:'none'}}>
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-desktop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Productos</Text>
                                </Box>
                            </ChakraLink>
                            <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                <i className="fas fa-gamepad" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                <Text color={theme.color} fontWeight="bold">Calculadora de Rendimiento</Text>
                            </Box>
                            <ChakraLink as={Link} to='/ensambles' onClick={onClose} _hover={{textDecoration:'none'}}>
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-desktop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">PC Gamer</Text>
                                </Box>
                            </ChakraLink>
                            <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                <i className="fas fa-laptop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                <Text color={theme.color} fontWeight="bold">Laptop</Text>
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
            {/* Barra de búsqueda móvil */}
            <Box className="mobile-search-container" display={'flex'} w={'100%'}>
                <Box className="mobile-menu-butto" display={{ base: "block", md: "none" }}>
                    {/* Menú hamburguesa para móviles */}
                    <IconButton
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        bg={theme.backgroundColor}
                        color={theme.color}
                        aria-label="Abrir menú de accesos directos"
                        size="lg"
                    />
                </Box>
                <form onSubmit={searchSubmit}>
                    <input 
                        type="text" 
                        value={buscar} 
                        onChange={searchChange} 
                        placeholder='Buscar productos...'
                    />
                    <button type='submit'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </Box>
            <NavBar/>
        </Box>
    )
}

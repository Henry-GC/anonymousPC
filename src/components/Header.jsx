import NavBar from "./NavBar";
import { useState, useRef, useEffect, useContext } from "react";
import { useProducts } from "./Context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./Assets/Styles/Header.css"
import { ShopCart } from "./ShopCart";
import { Link, useLocation } from "react-router-dom";
import useCart from "./Hooks/useCart";
import { Box, Text, Link as ChakraLink, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, FormControl } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { ThemeContext } from "./Context/ThemeContext";
import ThemeToggleSwitch from "./toggleThemeSwitch";

export default function Header (props){
    const {theme} = useContext(ThemeContext);
    const [isCheked, setChecked] = useState(false);
    const [buscar, setBuscar] = useState("");
    const [resultados, setResultados] = useState([]);
    const { allProducts } = useProducts();
    const navigate = useNavigate();
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
        const value = e.target.value;
        setBuscar(value);
        if (value.trim() === "") {
            setResultados([]);
        } else {
            setResultados(
                allProducts.filter(prod =>
                    prod.name && prod.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };
    const searchSubmit = (e) => {
        e.preventDefault();
        // Si quieres hacer búsqueda tradicional, puedes dejar esto
        // props.onSearch(buscar);
        // setBuscar("");
    };
    const handleProductClick = (id) => {
        setBuscar("");
        setResultados([]);
        navigate(`/producto/${id}`);
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
            <Box className="header-container">
                <Box className="home-container">
                    <Box className="logo-container">
                        <ChakraLink href="/">
                            <img alt="ISOLOGO" src="https://pub-79b389a1ced14f01877c6591f19b2c74.r2.dev/Public/isologo.png" width="100%"/>
                        </ChakraLink>
                    </Box>
                    <Box className="search-container" style={{ position: "relative" }}>
                        <form onSubmit={searchSubmit} autoComplete="off">
                            <FormControl
                                display="flex"
                                alignItems="center"
                                borderRadius="1rem"
                                boxShadow="md"
                                p={'0.2rem 1rem'}
                                gap={'1rem'}
                                border={`1px solid ${theme.color}`}
                            >
                                <button type='submit'>
                                    <i id="lupa" className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <input type="text" value={buscar} onChange={searchChange} placeholder='Buscar...'/>
                            </FormControl>
                        </form>
                        {buscar && (
                            <Box className="search-preview" position="absolute" zIndex={20} bg="white" w="100%" boxShadow="md" borderRadius="md" mt={2} maxH="350px" overflowY="auto">
                                {resultados.length === 0 ? (
                                    <Text p={3} color="gray.500">No se encontraron productos.</Text>
                                ) : (
                                    resultados.slice(0, 6).map(prod => (
                                        <Box
                                            key={prod.id}
                                            display="flex"
                                            alignItems="center"
                                            p={2}
                                            borderBottom="1px solid #eee"
                                            cursor="pointer"
                                            _hover={{ bg: "gray.100" }}
                                            onClick={() => handleProductClick(prod.id)}
                                        >
                                            <img src={prod.img_url} alt={prod.name} width={40} height={40} style={{ objectFit: "cover", borderRadius: 8, marginRight: 12 }} />
                                            <Box>
                                                <Text color={theme.accentColor} fontSize='medium' fontWeight="bold">{prod.name}</Text>
                                                <Text color="purple.500" fontSize="sm">${parseFloat(prod.price).toFixed(2)}</Text>
                                            </Box>
                                        </Box>
                                    ))
                                )}
                            </Box>
                        )}
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
                            <ChakraLink as={Link} to='/laptops' onClick={onClose} _hover={{textDecoration:'none'}}>
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-laptop" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Laptop</Text>
                                </Box>
                            </ChakraLink>
                            <ChakraLink as={Link} to='/refurbished' onClick={onClose} _hover={{textDecoration:'none'}}>
                                <Box display="flex" alignItems="center" gap={3} p={3} borderRadius="md" _hover={{bg: theme.secondaryBackground}}>
                                    <i className="fas fa-wrench" style={{fontSize: '1.5rem', color: theme.color}}></i>
                                    <Text color={theme.color} fontWeight="bold">Refurbished</Text>
                                </Box>
                            </ChakraLink>
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
            <Box className="mobile-search-container" display={{ base: "flex", md: "none" }} w={'100%'} position="relative">
                <Box className="mobile-menu-butto" display={{ base: "block", md: "none" }}>
                    <IconButton
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        bg={theme.backgroundColor}
                        color={theme.color}
                        aria-label="Abrir menú de accesos directos"
                        size="lg"
                    />
                </Box>
                <form onSubmit={searchSubmit} style={{ width: '100%' }} autoComplete="off">
                    <input 
                        type="text" 
                        value={buscar} 
                        onChange={searchChange} 
                        placeholder='Buscar productos...'
                        style={{ width: '100%', borderRadius: '1rem', border: '1px solid #7c3aed', padding: '0.5rem', fontSize: '1rem' }}
                    />
                    <button type='submit' style={{ background: 'none', border: 'none', color: '#7c3aed', fontSize: '1.3rem', marginLeft: '0.5rem' }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                {buscar && (
                    <Box className="search-preview" position="absolute" zIndex={30} bg="white" w="100%" boxShadow="md" borderRadius="md" mt={2} maxH="350px" overflowY="auto" left={0} top={{ base: '2.5rem', md: '2.5rem' }}>
                        {resultados.length === 0 ? (
                            <Text p={3} color="gray.500">No se encontraron productos.</Text>
                        ) : (
                            resultados.slice(0, 6).map(prod => (
                                <Box
                                    key={prod.id}
                                    display="flex"
                                    alignItems="center"
                                    p={2}
                                    borderBottom="1px solid #eee"
                                    cursor="pointer"
                                    _hover={{ bg: "gray.100" }}
                                    onClick={() => handleProductClick(prod.id)}
                                >
                                    <img src={prod.img_url} alt={prod.name} width={40} height={40} style={{ objectFit: "cover", borderRadius: 8, marginRight: 12 }} />
                                    <Box>
                                        <Text color={theme.accentColor} fontSize='medium' fontWeight="bold">{prod.name}</Text>
                                        <Text color="purple.500" fontSize="sm">${parseFloat(prod.price).toFixed(2)}</Text>
                                    </Box>
                                </Box>
                            ))
                        )}
                    </Box>
                )}
            </Box>
            <NavBar/>
        </Box>
    )
}

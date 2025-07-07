import NavBar from "./NavBar";
import { useState, useRef, useEffect, useContext } from "react";
import "./Assets/Styles/Header.css"
import { ShopCart } from "./ShopCart";
import { Link, useLocation } from "react-router-dom";
import useCart from "./Hooks/useCart";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
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
                        >
                            <Text as='h2' fontWeight='300'>Mi cuenta</Text>
                            <Text as='strong'>Ingresar</Text>
                        </Box>
                    </Link>
                    <ShopCart isCheked={isCheked} setChecked={setChecked}/>
                </Box>
            </Box>
            
            {/* Barra de búsqueda móvil */}
            <Box className="mobile-search-container">
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

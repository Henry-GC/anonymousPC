import './Assets/Styles/NavBar.css'
import { Link } from "react-router-dom"
import { Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, Text, VStack, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function NavBar (){

    const {theme} = useContext(ThemeContext)

    return(
        <Box className='navBar'>
            <Box className="navBar-container">
                <Box>
                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            <Button rightIcon={<ChevronDownIcon />} bg={theme.backgroundColor}>
                                Ensambles
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <VStack>
                                    <Link to="productos/procesador">GAMER</Link>
                                    <Link to="/placa-madre">WORKSTATION</Link>
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            <Button rightIcon={<ChevronDownIcon />} bg={theme.backgroundColor}>
                                Portátiles
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <VStack>
                                    <Link to="productos/procesador">Laptops</Link>
                                    <Link to="/placa-madre">Todo en Uno</Link>
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            <Button rightIcon={<ChevronDownIcon />} bg={theme.backgroundColor}>
                                Componentes
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <VStack>
                                    <Link to="productos/procesador">Procesadores</Link>
                                    <Link to="productos/placa-madre">Placa Madre</Link>
                                    <Link to="productos/tarjeta-grafica">Tarjetas de Video</Link>
                                    <Link to="productos/memoria-ram">Memoria Ram</Link>
                                    <Link to="productos/almacenamiento">Almacenamiento</Link>
                                    <Link to="productos/fuente-de-poder">Fuente de Poder</Link>
                                    <Link to="productos/carcasa">Carcasa</Link>
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover trigger="hover" placement="bottom-start">
                        <PopoverTrigger>
                            <Button rightIcon={<ChevronDownIcon />} bg={theme.backgroundColor}>
                                Accesorios
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <VStack>
                                    <Link to="productos/procesador">Mouse</Link>
                                    <Link to="productos/placa-madre">Teclado</Link>
                                    <Link to="productos/tarjeta-grafica">Parlantes</Link>
                                    <Link to="productos/memoria-ram">Monitores</Link>
                                    <Link to="productos/almacenamiento">Auriculares</Link>
                                    <Link to="productos/tarjeta-grafica">Sillas</Link>
                                    <Link to="productos/memoria-ram">Cámaras</Link>
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>

                <Box>
                    <Text>Favoritos</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default NavBar;

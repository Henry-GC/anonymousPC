import './Assets/Styles/NavBar.css'
import { Link } from "react-router-dom"
import { Button, Menu, MenuButton, MenuList, MenuItem, Text, VStack, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

function NavBar (){

    const {theme} = useContext(ThemeContext)

    return(
        <Box className='navBar'>
            <Box className="navBar-container">
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg={theme.backgroundColor} color={theme.color}>
                            Componentes
                        </MenuButton>
                        <MenuList>
                            <VStack align="start" spacing={2} p={2}>
                            <MenuItem as={Link} to="productos/procesador">Procesadores</MenuItem>
                            <MenuItem as={Link} to="productos/placa-madre">Placa Madre</MenuItem>
                            <MenuItem as={Link} to="productos/tarjeta-grafica">Tarjetas de Video</MenuItem>
                            <MenuItem as={Link} to="productos/memoria-ram">Memoria Ram</MenuItem>
                            <MenuItem as={Link} to="productos/almacenamiento">Almacenamiento</MenuItem>
                            <MenuItem as={Link} to="productos/fuente-de-poder">Fuente de Poder</MenuItem>
                            <MenuItem as={Link} to="productos/carcasa">Carcasa</MenuItem>
                            </VStack>
                        </MenuList>
                    </Menu>
                </Box>

                <Box>
                    <Text color={theme.color}>Favoritos</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default NavBar;

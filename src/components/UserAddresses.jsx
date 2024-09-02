import { Box, Spinner, Text, Button } from "@chakra-ui/react";
import './Assets/Styles/UserAddresses.css'
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function UserAddresses ({user}) {
    const {theme} = useContext(ThemeContext)
    const addresses = user.addresses
    if (!addresses) return <Spinner/>

    const handleButton = (is_default) => {
        if (is_default === true && addresses.length > 1){

        }
    }

    return (
        <Box className="user-addresses-container">
            <Text as="h1" color={theme.color} className="user-section-title">DIRECCIONES</Text>
            <Box>
                {addresses.map((address)=>(
                    <Box key={address.id} bg={theme.secondaryBackground} color={theme.color} className="address-item-container" onClick={handleButton(address.is_default)}>
                        <Box className="address-text-rows">
                            <Box className="address-text-row-city">
                                <Box className="address-text-row" width="50%">
                                    <Text as="h2" className="address-text-title">Provincia:</Text>
                                    <Text as="h2" className="address-text-data">{address.province || 'Sin registro'}</Text>
                                </Box>
                                <Box className="address-text-row" width="50%">
                                    <Text as="h2" className="address-text-title">Ciudad:</Text>
                                    <Text as="h2" className="address-text-data">{address.city || 'Sin registro'}</Text>
                                </Box>
                            </Box>
                            <Box className="address-text-row">
                                <Text as="h2" className="address-text-title">Calles:</Text>
                                <Text as="h2" className="address-text-data">{address.street || 'Sin registro'}</Text>
                            </Box>
                            <Box className="address-text-row">
                                <Text as="h2" className="address-text-title">Referencia:</Text>
                                <Text as="h2" className="address-text-data">{address.reference || 'Sin registro'}</Text>
                            </Box>
                            <Button isDisabled={addresses.length===1}>
                                Eliminar
                            </Button>
                        </Box>
                        <Box className={address.is_default?`check-circle`:`uncheck-circle`}>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default UserAddresses;
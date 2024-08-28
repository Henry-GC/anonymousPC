import { Box, HStack, Spinner, Text, VStack, Button } from "@chakra-ui/react";
import './Assets/Styles/UserAddresses.css'
import { useState } from "react";

function UserAddresses ({user}) {
    const [isDefault,setIsDefault] = useState("check-circle")
    const addresses = user.addresses
    if (!addresses) return <Spinner/>

    const handleButton = () => {
        if (isDefault === "check-circle"){
            setIsDefault("uncheck-circle")
        } else {
            setIsDefault("check-circle")
        }
    }

    return (
        <Box className="user-addresses-container">
            <Text as="h1" className="user-addresses-tittle">DIRECCIONES</Text>
            <Box>
                {addresses.map((address)=>(
                    <Box key={address.id} className="address-item-container" onClick={handleButton}>
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
                            <Button>
                                Eliminar
                            </Button>
                        </Box>
                        <Box className={`${isDefault}`}>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default UserAddresses;
import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react";

function UserAddresses ({user}) {
    const addresses = user.addresses
    if (!addresses) return <Spinner/>

    return (
        <Box>
            <Box>
                {addresses.map((address)=>(
                    <Box key={address.id}>
                        <VStack>
                            <Text as="h2">Provincia</Text>
                            <Text as="h2">{address.province || 'Sin registro'}</Text>
                        </VStack>
                        <VStack>
                            <Text as="h2">Ciudad</Text>
                            <Text as="h2">{address.city || 'Sin registro'}</Text>
                        </VStack>
                        <VStack>
                            <Text as="h2">Calles</Text>
                            <Text as="h2">{address.street || 'Sin registro'}</Text>
                        </VStack>
                        <VStack>
                            <Text as="h2">Referencia</Text>
                            <Text as="h2">{address.reference || 'Sin registro'}</Text>
                        </VStack>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default UserAddresses;
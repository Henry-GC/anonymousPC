import { useState } from 'react';
import { Button, Input, FormLabel, RadioGroup, Radio, Stack, Select, Box, Text, Heading } from '@chakra-ui/react';
import { MapPin, CreditCard, Package, ChevronRight, Lock } from 'lucide-react';

// Direcciones guardadas de ejemplo
const savedAddresses = [
  { id: 1, provincia: "Buenos Aires", ciudad: "La Plata", calle: "Calle 7 1234", referencia: "Cerca del parque" },
  { id: 2, provincia: "Córdoba", ciudad: "Córdoba", calle: "Av. Colón 5678", referencia: "Frente al centro comercial" },
  { id: 3, provincia: "Santa Fe", ciudad: "Rosario", calle: "Bv. Oroño 9012", referencia: "Esquina con Pellegrini" },
];

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [orderTotal] = useState(1299.99);
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]);
  const [useNewAddress, setUseNewAddress] = useState(false);

  const nextStep = () => setStep(step + 1);

  const handleAddressChange = (addressId) => {
    const address = savedAddresses.find(addr => addr.id === addressId);
    if (address) {
      setSelectedAddress(address);
      setUseNewAddress(false);
    }
  };

  return (
    <Box className="container mx-auto px-4 py-8">
      <Heading as="h1" size="xl" mb={8}>Checkout - Anonymous PC</Heading>
      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={8}>
        <Box w={{ base: '100%', md: '66%' }}>
          {step === 1 && (
            <Box mb={8}>
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <MapPin className="mr-2" /> 1. Dirección de envío
              </Heading>
              <Box border="1px" borderRadius="md" borderColor="gray.200" p={4} mb={4}>
                <RadioGroup value={selectedAddress.id.toString()} onChange={(value) => handleAddressChange(parseInt(value))}>
                  <Stack spacing={2}>
                    {savedAddresses.map((address) => (
                      <Radio key={address.id} value={address.id.toString()}>
                        {address.calle}, {address.ciudad}, {address.provincia} - {address.referencia}
                      </Radio>
                    ))}
                    <Radio value="new" onClick={() => setUseNewAddress(true)}>Usar una dirección nueva</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              {useNewAddress && (
                <Stack spacing={4} mb={4}>
                  <Input placeholder="Provincia" />
                  <Input placeholder="Ciudad" />
                  <Input placeholder="Calle" />
                  <Input placeholder="Referencia" />
                </Stack>
              )}
              <Button onClick={nextStep} rightIcon={<ChevronRight />} colorScheme="blue">
                Continuar
              </Button>
            </Box>
          )}

          {step === 2 && (
            <Box mb={8}>
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <CreditCard className="mr-2" /> 2. Método de pago
              </Heading>
              <Box border="1px" borderRadius="md" borderColor="gray.200" p={4} mb={4}>
                <RadioGroup defaultValue="card1">
                  <Stack spacing={2}>
                    <Radio value="card1">Visa terminada en 1234</Radio>
                    <Radio value="card2">MasterCard terminada en 5678</Radio>
                    <Radio value="new">Usar una tarjeta nueva</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Button onClick={nextStep} rightIcon={<ChevronRight />} colorScheme="blue">
                Continuar
              </Button>
            </Box>
          )}

          {step === 3 && (
            <Box mb={8}>
              <Heading as="h2" size="lg" mb={4} display="flex" alignItems="center">
                <Package className="mr-2" /> 3. Revisar y realizar pedido
              </Heading>
              <Box border="1px" borderRadius="md" borderColor="gray.200" p={4} mb={4}>
                <Heading as="h3" size="md" mb={2}>Detalles del envío</Heading>
                <Text>{selectedAddress.calle}, {selectedAddress.ciudad}, {selectedAddress.provincia}</Text>
                <Text>Referencia: {selectedAddress.referencia}</Text>
                <Heading as="h3" size="md" mt={4} mb={2}>Método de pago</Heading>
                <Text>Visa terminada en 1234</Text>
              </Box>
              <Button w="100%" colorScheme="yellow" color="black">
                Realizar pedido
              </Button>
            </Box>
          )}
        </Box>

        <Box w={{ base: '100%', md: '33%' }}>
          <Box border="1px" borderRadius="md" borderColor="gray.200" p={4} position="sticky" top={4}>
            <Heading as="h2" size="lg" mb={4}>Resumen del pedido</Heading>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Text>PC Personalizada Anonymous</Text>
              <Text>${orderTotal.toFixed(2)}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Text>Envío</Text>
              <Text>Gratis</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" fontWeight="bold" mt={4}>
              <Text>Total del pedido</Text>
              <Text>${orderTotal.toFixed(2)}</Text>
            </Box>
            <Box mt={4}>
              <FormLabel htmlFor="shippingMethod">Método de envío</FormLabel>
              <Select placeholder="Selecciona un método de envío">
                <option value="standard">Estándar (3-5 días hábiles)</option>
                <option value="express">Express (1-2 días hábiles)</option>
              </Select>
            </Box>
            {step === 3 && (
              <Button w="100%" mt={4} colorScheme="yellow" color="black" display="flex" alignItems="center" justifyContent="center">
                <Lock className="mr-2 h-4 w-4" /> Realizar pedido
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

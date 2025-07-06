import { useContext } from "react";
import { 
  Box, 
  Button, 
  Image, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  Flex, 
  IconButton, 
  VStack, 
  HStack, 
  Badge, 
  Text 
} from "@chakra-ui/react";
import { ThemeContext } from "./Context/ThemeContext.jsx";
import useCart from "./Hooks/useCart.jsx";
import pruv from "./Assets/Image/work.png";

const ProductModal = ({ isOpen, onClose, selectedProduct }) => {
  const { theme } = useContext(ThemeContext);
  const { addCart, loading, handleButtonCart } = useCart();

  if (!selectedProduct) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent 
        maxW="90vw" 
        maxH="90vh"
        bg={theme.backgroundColor}
        color={theme.color}
        borderRadius="xl"
        boxShadow="2xl"
      >
        {/* Botón de cerrar personalizado en círculo */}
        <IconButton
          position="absolute"
          top={4}
          right={4}
          zIndex={10}
          icon={<i className="fa-solid fa-xmark"></i>}
          onClick={onClose}
          bg={theme.highlightColor}
          color={theme.backgroundColor}
          borderRadius="full"
          size="lg"
          _hover={{
            bg: theme.color,
            color: theme.backgroundColor,
            transform: "scale(1.1)"
          }}
          _active={{
            transform: "scale(0.95)"
          }}
        />
        
        <ModalBody p={0}>
          <Flex direction={{ base: "column", md: "row" }} h="100%">
            {/* Columna izquierda - Imagen */}
            <Box 
              flex="1" 
              p={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg={theme.backgroundColor}
            >
              <Image
                src={selectedProduct.img_url || pruv}
                alt={selectedProduct.name}
                maxW="100%"
                maxH="400px"
                objectFit="contain"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
            
            {/* Columna derecha - Detalles */}
            <Box 
              flex="1" 
              p={6}
              bg={theme.backgroundColor}
              borderLeft={{ base: "none", md: `1px solid ${theme.highlightColor}` }}
              borderTop={{ base: `1px solid ${theme.highlightColor}`, md: "none" }}
            >
              <VStack spacing={4} align="stretch">
                {/* Nombre del producto */}
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color={theme.highlightColor}>
                    {selectedProduct.name}
                  </Text>
                </Box>
                
                {/* Precio */}
                <Box>
                  <Text fontSize="3xl" fontWeight="bold" color="red.500">
                    ${parseFloat(selectedProduct.price).toFixed(2)}
                  </Text>
                </Box>
                
                {/* Descripción */}
                {selectedProduct.description && (
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                      Descripción:
                    </Text>
                    <Text fontSize="md" color="gray.300">
                      {selectedProduct.description}
                    </Text>
                  </Box>
                )}
                
                {/* Detalles adicionales */}
                <VStack spacing={3} align="stretch">
                  {selectedProduct.category && (
                    <HStack>
                      <Text fontWeight="semibold">Categoría:</Text>
                      <Badge colorScheme="blue" variant="subtle">
                        {selectedProduct.category}
                      </Badge>
                    </HStack>
                  )}
                  
                  {selectedProduct.brand && (
                    <HStack>
                      <Text fontWeight="semibold">Marca:</Text>
                      <Text>{selectedProduct.brand}</Text>
                    </HStack>
                  )}
                  
                  {selectedProduct.stock !== undefined && (
                    <HStack>
                      <Text fontWeight="semibold">Stock:</Text>
                      <Badge 
                        colorScheme={selectedProduct.stock > 0 ? "green" : "red"}
                        variant="subtle"
                      >
                        {selectedProduct.stock > 0 ? `${selectedProduct.stock} disponibles` : "Sin stock"}
                      </Badge>
                    </HStack>
                  )}
                </VStack>
                
                {/* Botón de añadir al carrito */}
                <Box mt={4}>
                  {addCart.some((arr) => arr.id === selectedProduct.id) ? (
                    <Button
                      w="100%"
                      bg={theme.backgroundColor}
                      color={theme.highlightColor}
                      isDisabled
                      size="lg"
                    >
                      <i className="fa-solid fa-check"></i> Artículo añadido
                    </Button>
                  ) : (
                    <Button
                      w="100%"
                      bg={theme.highlightColor}
                      color={theme.backgroundColor}
                      isLoading={selectedProduct.id === loading}
                      onClick={() => handleButtonCart(selectedProduct)}
                      size="lg"
                      leftIcon={<i className="fa-solid fa-cart-shopping"></i>}
                      _hover={{
                        bg: theme.color,
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                      }}
                      _active={{
                        transform: "translateY(0)"
                      }}
                    >
                      Añadir al carrito
                    </Button>
                  )}
                </Box>
              </VStack>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal; 
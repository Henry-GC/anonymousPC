import React, { useState } from "react"
import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  Badge,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { StarIcon, ChevronLeftIcon, ChevronRightIcon, AddIcon } from "@chakra-ui/icons"

const products = [
  {
    id: 1,
    name: "Cámara DSLR",
    description:
      "Una cámara DSLR de alta calidad para fotógrafos profesionales y aficionados. Equipada con un sensor de imagen de última generación, esta cámara ofrece una calidad de imagen excepcional en una amplia gama de condiciones de iluminación. Su sistema de enfoque automático rápido y preciso, junto con su capacidad para grabar video en 4K, la convierten en una herramienta versátil para capturar tanto imágenes fijas como en movimiento.",
    price: 699.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600&text=Angle+2",
      "/placeholder.svg?height=400&width=600&text=Angle+3",
      "/placeholder.svg?height=400&width=600&text=Angle+4",
    ],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone",
    description:
      "El último smartphone con cámara de alta resolución y batería de larga duración. Este dispositivo combina un rendimiento potente con un diseño elegante y delgado. Su pantalla OLED de alta resolución ofrece colores vibrantes y negros profundos, mientras que su procesador de última generación garantiza una experiencia de usuario fluida en todas las aplicaciones.",
    price: 999.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600&text=Side+View",
      "/placeholder.svg?height=400&width=600&text=Back+View",
      "/placeholder.svg?height=400&width=600&text=Camera+Close-up",
    ],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    description:
      "Auriculares inalámbricos con cancelación de ruido para una experiencia de audio inmersiva. Estos auriculares ofrecen un sonido cristalino y un aislamiento acústico excepcional, permitiéndote disfrutar de tu música favorita sin distracciones. Con una batería de larga duración y un diseño cómodo, son perfectos para uso prolongado durante viajes o sesiones de trabajo.",
    price: 199.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600&text=Folded",
      "/placeholder.svg?height=400&width=600&text=Case",
      "/placeholder.svg?height=400&width=600&text=Wearing",
    ],
    rating: 4.2,
  },
]

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      )
    }
  }

  const openModal = (product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
    onOpen()
  }

  return (
    <Box p={4}>
      <Heading mb={6} as="h1" size="xl">Nuestros Productos</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
            cursor="pointer"
            onClick={() => openModal(product)}
          >
            <Image src={product.images[0]} alt={product.name} objectFit="cover" boxSize="300px" />
            <Box p={4}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text mt={2} fontSize="xl" fontWeight="bold">${product.price.toFixed(2)}</Text>
              <Box mt={2} display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < Math.floor(product.rating) ? "yellow.400" : "gray.300"}
                    />
                  ))}
                <Text ml={2} fontSize="sm" color="gray.600">({product.rating})</Text>
              </Box>
            </Box>
            <Button colorScheme="blue" w="full" leftIcon={<AddIcon />}>
              Añadir al Carrito
            </Button>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProduct?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedProduct && (
              <Box>
                <Box position="relative">
                  <Image
                    src={selectedProduct.images[currentImageIndex]}
                    alt={`${selectedProduct.name} - Imagen ${currentImageIndex + 1}`}
                    boxSize="300px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <IconButton
                    icon={<ChevronLeftIcon />}
                    position="absolute"
                    top="50%"
                    left="2"
                    transform="translateY(-50%)"
                    onClick={prevImage}
                    aria-label="Imagen anterior"
                    size="sm"
                  />
                  <IconButton
                    icon={<ChevronRightIcon />}
                    position="absolute"
                    top="50%"
                    right="2"
                    transform="translateY(-50%)"
                    onClick={nextImage}
                    aria-label="Siguiente imagen"
                    size="sm"
                  />
                </Box>
                <Box mt={4} overflowX="auto" whiteSpace="nowrap">
                  {selectedProduct.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${selectedProduct.name} - Miniatura ${index + 1}`}
                      boxSize="50px"
                      objectFit="cover"
                      borderRadius="md"
                      cursor="pointer"
                      mx={1}
                      onClick={() => setCurrentImageIndex(index)}
                      border={index === currentImageIndex ? "2px solid" : "none"}
                      borderColor="blue.500"
                    />
                  ))}
                </Box>
                <Text mt={4} color="gray.600" fontSize="sm">
                  {selectedProduct.description}
                </Text>
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    ${selectedProduct.price.toFixed(2)}
                  </Text>
                  <Badge colorScheme="green">
                    {selectedProduct.rating} <StarIcon />
                  </Badge>
                </Box>
                <Button mt={4} w="full" colorScheme="blue" leftIcon={<AddIcon />}>
                  Añadir al Carrito
                </Button>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

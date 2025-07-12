import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "./Context/ProductContext";
import { Box, Heading, Image, Text, Badge, Stack } from "@chakra-ui/react";

export default function DetailProduct() {
  const { id } = useParams();
  const { allProducts } = useProducts();
  const product = allProducts.find(p => String(p.id) === String(id));

  if (!product) {
    return <Box p={8}><Heading>No se encontró el producto.</Heading></Box>;
  }

  return (
    <Box maxW="700px" mx="auto" p={6} boxShadow="lg" borderRadius="lg" bg="white">
      <Image src={product.img_url} alt={product.name} borderRadius="md" maxH="350px" mx="auto" />
      <Heading mt={4}>{product.name}</Heading>
      <Text fontSize="2xl" color="purple.600" fontWeight="bold" mt={2}>${parseFloat(product.price).toFixed(2)}</Text>
      <Text mt={4}>{product.description}</Text>
      <Stack direction="row" spacing={3} mt={4}>
        <Badge colorScheme="cyan">{product.category_name || "Sin categoría"}</Badge>
        <Badge colorScheme="green">Stock: {product.stock ?? "N/A"}</Badge>
        <Badge colorScheme="gray">SKU: {product.sku || product.id}</Badge>
      </Stack>
    </Box>
  );
}

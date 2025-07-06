import "./Assets/Styles/Main.css"
import { Box, Button, Spinner, useDisclosure, Text} from "@chakra-ui/react";
import pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart.jsx";
import FavoriteStar from "./FavoriteStar.jsx";
import ProductModal from "./ProductModal.jsx";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext.jsx";
import { useProducts } from "./Context/ProductContext.jsx";

const Main = () => {
  const { addCart, loading, handleButtonCart } = useCart();
  const { theme } = useContext(ThemeContext);
  const { paginatedProducts, filteredProducts, page, nextPage, prevPage } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (producto) => {
    setSelectedProduct(producto)
    onOpen()
  }

  return (
    <>
      {paginatedProducts.length > 0 ? 
        ( 
          <Box className="container-main">
            <Box className="container-prod-main"> 
              {paginatedProducts.map((producto)=>(
                <Box
                key={producto.id}
                className="relevant-product"
                border={`solid 1px ${theme.backgroundColor}`}
                sx={{_hover:{border:`solid 1px ${theme.highlightColor}`}}}
            >
                <FavoriteStar product={producto} className={`main-fav-star`}/>
                <Box 
                  className="img-product-container"
                  cursor="pointer"
                  onClick={() => openModal(producto)}
                >
                    <img src={producto.img_url||pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
                </Box>
                <Box className="text-product-container">
                    <Box 
                      className="name-product-container"
                      cursor="pointer"
                      onClick={() => openModal(producto)}
                      sx={{_hover:{color: theme.highlightColor}}}
                    >
                      {producto.name}
                    </Box>
                    <Box className="price-product-container">
                        <Text
                            color='red'
                            fontWeight='600'
                            fontSize='1.3rem'
                        >
                            ${parseFloat(producto.price).toFixed(2)}
                        </Text>
                        {addCart.some((arr)=>arr.id === producto.id)?(
                            <Button
                                bg={theme.backgroundColor}
                                color={theme.highlightColor}
                                isDisabled
                            >
                                Articulo añadido
                            </Button>
                        ):(
                            <Button
                                bg={theme.backgroundColor}
                                color={theme.color}
                                isLoading={producto.id === loading ? true : null}
                                onClick={()=>handleButtonCart(producto)}
                                sx={{_hover:{bg:theme.highlightColor, color:theme.backgroundColor}}}
                            >
                                Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
              ))}
            </Box>
            <Box className="arrow-prod-main">
              {filteredProducts.length > 12 ? (
                <>
                  <button onClick={prevPage}>{`<<`}</button>
                  <p>{page}</p>
                  <button onClick={nextPage}>{`>>`}</button>
                </>):(<></>)}
            </Box>
          </Box>
        ) : (<Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />)}

      {/* Modal de detalles del producto */}
      <ProductModal 
        isOpen={isOpen}
        onClose={onClose}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default Main;

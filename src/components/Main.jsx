import "./Assets/Styles/Main.css"
import { Box, Button, Spinner, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Text} from "@chakra-ui/react";
import pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart.jsx";
import FavoriteStar from "./FavoriteStar.jsx";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext.jsx";

const Main = (props) => {

  const {addCart,loading,handleButtonCart} = useCart();
  const {theme} = useContext(ThemeContext)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (producto) => {
    setSelectedProduct(producto)
    onOpen()
  }

  return (
    <>
      {props.resultado.length > 0 ? 
        ( 
          <Box className="container-main">
            <Box className="container-prod-main"> 
              {props.resultado.map((producto)=>(
                <Box
                key={producto.id}
                className="relevant-product"
                border={`solid 1px ${theme.backgroundColor}`}
                sx={{_hover:{border:`solid 1px ${theme.highlightColor}`}}}
            >
                <FavoriteStar product={producto} className={`main-fav-star`}/>
                <Box className="img-product-container">
                    <img src={producto.img_url||pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
                </Box>
                <Box className="text-product-container">
                    <Box className="name-product-container">{producto.name}</Box>
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
                // <Box
                //   key={producto.id}
                //   className="item-prod-main"
                //   bg={theme.backgroundColor}
                //   sx={{_hover:{border:'solid 1px #000'}}}
                // >
                //   <Box display='flex' flexDirection='column'>
                //     <FavoriteStar product={producto} className={`main-fav-star`}/>
                //     <Box className="item-image-main" onClick={() => openModal(producto)}>
                //       <img src={Pruv} alt="IMAGEN PRODUCTO" width="100%"/>
                //     </Box>
                //   </Box>
                //   <Box
                //     className="item-text"
                //     bg={theme.backgroundColor}
                //   >
                //     <Box className="item-name">{producto.name}</Box>
                //     <Box
                //       className="item-box"
                //       bg={theme.backgroundColor}
                //     >
                //       {addCart.some((arr)=>arr.id === producto.id)?(<div className="verify-cart">Artículo agregado</div>):(
                //         <Button
                //           bg={theme.accentColor}
                //           color={theme.backgroundColor}
                //           sx={{_hover:{bg:'#aaa',color:'#000'}}}
                //           isLoading={producto.id === loading ? true : null}
                //           onClick={()=>handleButtonCart(producto)}
                //         >
                //         Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                //         </Button>
                //       )}
                //       <p>${parseFloat(producto.price).toFixed(2)}</p>
                //     </Box>
                //   </Box>
                // </Box>
              ))}
            </Box>
            <Box className="arrow-prod-main">
              {props.bd.length>12?(
                <>
                  <button onClick={props.prevPage}>{`<<`}</button>
                  <p>{props.currentPage}</p>
                  <button onClick={props.nextPage}>{`>>`}</button>
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

      {selectedProduct && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProduct.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box position="relative">
                <Image/>
              </Box>
              <Text mt={4} color="gray.600" fontSize="sm">
                {selectedProduct.description}
              </Text>
              <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" fontWeight="bold">
                  
                </Text>
                <Button
                  mt={4}
                  colorScheme="blue"
                  leftIcon={<i className="fa-solid fa-cart-shopping"></i>}
                  onClick={() => handleButtonCart(selectedProduct)}
                >
                  Añadir al Carrito
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Main;

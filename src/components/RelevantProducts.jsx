import { useContext, useState } from "react"
import { Box, Button, Text, useDisclosure} from "@chakra-ui/react"
import { ThemeContext } from "./Context/ThemeContext"
import "./Assets/Styles/RelevantProducts.css"
import pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"
import FavoriteStar from "./FavoriteStar"
import ProductModal from "./ProductModal.jsx"
import { useProducts } from "./Context/ProductContext.jsx"

function RelevantProducts () {
    const { relevantProducts } = useProducts();
    const {theme} = useContext(ThemeContext)
    const {addCart,loading,handleButtonCart} = useCart()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const openModal = (producto) => {
        setSelectedProduct(producto)
        onOpen()
    }

    return (
        <>
            <Box className="relevant-products-container">
                        <Box
                            className="builds-title"
                            color={theme.color}
                        >
                            Productos Destacados
                            {/* <button>VER TODO</button> */}
                        </Box>
                        <ul className="relevant-products">
                            {relevantProducts.map((producto)=>(
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
                        </ul>
                    </Box>

            {/* Modal de detalles del producto */}
            <ProductModal 
                isOpen={isOpen}
                onClose={onClose}
                selectedProduct={selectedProduct}
            />
        </>
    )
}

export default RelevantProducts
import { useContext } from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import { ThemeContext } from "./Context/ThemeContext"
import useFetch from "./Hooks/useFetch"
import "./Assets/Styles/RelevantProducts.css"
import pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"


function RelevantProducts () {

    const {relevantProducts} = useFetch()
    const {theme} = useContext(ThemeContext)
    const {addCart,loading,handleButtonCart} = useCart()

    return (
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
                                <Box className="img-product-container">
                                    <img src={relevantProducts.img_url||pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
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
                        ))}
                    </ul>
                </Box>
    )
}

export default RelevantProducts
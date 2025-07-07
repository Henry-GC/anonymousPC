import { useContext, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"
import { 
  Box, 
  Button, 
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton
} from "@chakra-ui/react"
import Axios from "../utils/axiosConfig"
import { ThemeContext } from "./Context/ThemeContext"
import { useNavigate } from "react-router-dom"

export const ShopCart = (props) => {
    const {theme} = useContext(ThemeContext)
    const [isLoading,setIsLoading] = useState(false)
    const {addCart,setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart } = useCart()
    const numCart = addCart.length
    const navigate = useNavigate()

    const handleBuy = async() => {
        try {
            setIsLoading(false)
            props.setChecked(false)
            navigate('/checkout',{replace:true})
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    }

    const handleButton = () => {
        setIsLoading(true)
        handleBuy();
    }

    return (
        <Box className="cart-container">
            <Box
                className="cart-button"
                color={theme.color}
                onClick={() => props.setChecked(true)}
                cursor="pointer"
            >
                <Box color={theme.color}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Box>
                <Box className="cart-number">{numCart}</Box>
                <Box
                    color={theme.color}
                    fontSize='.8rem'
                    fontFamily='Montserrat'
                >
                    <Text as='h2' fontWeight='300'>Mi carrito</Text>
                    <Text as='strong'>${totalPrice}</Text>
                </Box>
            </Box>

            <Drawer
                isOpen={props.isCheked}
                placement="right"
                onClose={() => props.setChecked(false)}
                size={{ base: "sm", md: "md" }} // Cambia 'full' por 'sm' en mobile
            >
                <DrawerOverlay />
                <DrawerContent bg={theme.backgroundColor}>
                    <DrawerCloseButton color={theme.color} />
                    <DrawerHeader borderBottomWidth="1px" color={theme.color}>
                        Carrito
                    </DrawerHeader>

                    <DrawerBody>
                        <Box>
                            {numCart > 0 ? (
                                <>
                                {addCart.map((item,index)=>(
                                    <Box key={item.id} className="item-shopCart">
                                        <Box className="item-cart">
                                            <Box className="image-item-cart">
                                                <img src={item.img_url} width="100%" alt="PRODUCTO CARRITO"/>
                                            </Box>
                                            <Box className="text-item-cart">
                                                <Box className="text-body-cart">
                                                    <strong>{item.name}</strong>
                                                    <Box className="count-item-cart">
                                                        <Box className="delete-button-cart">
                                                            <button onClick={()=>delToCart(index)}>
                                                                Quitar
                                                            </button>
                                                        </Box>
                                                        <p>Cantidad</p>
                                                        <Box>
                                                            <button onClick={()=>minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                                                                <Text color={theme.highlightColor}>{item.count}</Text>
                                                            <button onClick={()=>plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box className="price-item-total">$ {parseFloat(item.price*item.count).toFixed(2)}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                                </>
                            ) : (
                                <Text textAlign="center" fontSize="lg" color={theme.color}>
                                    Aún no hay artículos agregados
                                </Text>
                            )}
                        </Box>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px" p={4}>
                        <Box width="100%">   
                            <Box mb={4}>
                                <Box display="flex" justifyContent="space-between" mb={2}>
                                    <Text color={theme.color}>SUBTOTAL</Text>
                                    <Text color={theme.color}>$ {totalPrice}</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" mb={2}>
                                    <Text color={theme.color}>DESCUENTO</Text>
                                    <Text color={theme.color}>$ 0.00</Text>
                                </Box>
                                <Box display="flex" justifyContent="space-between" borderTopWidth="1px" pt={2}>
                                    <Text fontWeight="bold" fontSize="lg" color={theme.color}>TOTAL</Text>
                                    <Text fontWeight="bold" fontSize="lg" color={theme.color}>$ {totalPrice}</Text>
                                </Box>
                            </Box>
                            <Button
                                isLoading={isLoading}
                                onClick={handleButton}
                                bg={theme.backgroundColor}
                                color={theme.color}
                                border={`solid 1px ${theme.color}`}
                                isDisabled={numCart < 1}
                                padding={'1rem 3rem'}
                                fontWeight={'500'}
                                width="100%"
                                _hover={{
                                    bg: theme.color,
                                    color: theme.backgroundColor
                                }}
                            >
                                COMPRAR
                            </Button>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
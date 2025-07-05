import { useContext, useId, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"
import { Box, Button, Text } from "@chakra-ui/react"
import Axios from "../utils/axiosConfig"
import { ThemeContext } from "./Context/ThemeContext"
import { useNavigate } from "react-router-dom"

export const ShopCart = (props) => {
    const {theme} = useContext(ThemeContext)
    const [isLoading,setIsLoading] = useState(false)
    const {addCart,setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart } = useCart()
    const numCart = addCart.length
    const CartId = useId()
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
            <label
                htmlFor={CartId}
                className="cart-button"
                color={theme.color}
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
            </label>
            <input id={CartId} type="checkbox" checked={props.isCheked} onChange={(e)=>props.setChecked(e.target.checked)} hidden />

            <Box
                className="shop-cart"
                background={theme.backgroundColor}
            >
                <Box className="title-cart">
                    <h1>Carrito</h1>
                    <button onClick={()=>props.setChecked(false)}><i className="fa-solid fa-right-long"></i></button>
                </Box>
                
                <Box className="body-cart">
                    <ul>
                    {numCart>0 ? (
                        <>
                        {addCart.map((item,index)=>(
                            <li className="item-shopCart" key={item.id}>
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
                            </li>
                        ))}
                        </>
                        ) : <h2>Aún no hay artículos agregados</h2>}
                        
                    </ul>
                        <Box className="footer-cart">   
                            <Box className="footer-cart-column">
                                <Box className="footer-cart-row">
                                    <p>SUBTOTAL</p>
                                    <p>$ {totalPrice}</p>
                                </Box>
                                <Box className="footer-cart-row">
                                    <p>DESCUENTO</p>
                                    <p>$ 0.00</p>
                                </Box>
                                <Box className="footer-cart-row-total">
                                    <h1>TOTAL</h1>
                                    <h1 className="footer-cart-price">$ {totalPrice}</h1>
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
                                alignSelf={'center'}
                                fontWeight={'500'}
                            >COMPRAR</Button>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}
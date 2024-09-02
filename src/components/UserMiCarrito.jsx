import { Box, Button } from "@chakra-ui/react";
import "./Assets/Styles/UserMiCarrito.css"
import useCart from "./Hooks/useCart";
import Pruv from "./Assets/Image/work.png"
import { useContext, useState } from "react";
import Axios from "../utils/axiosConfig"
import { ThemeContext } from "./Context/ThemeContext";

function UserMiCarrito () {
    
    const {addCart, setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart} = useCart()
    const [isLoading,setIsLoading] = useState(false)
    const {theme} = useContext(ThemeContext)

    const handleBuy = async() => {
        const {cartDetails} = buyCart()
        const data = {
            details: cartDetails,
            total: totalPrice
        }
        const response = await Axios.post('/api/user/createorder',data)
        localStorage.removeItem('cart')
        setAddCart([])
        console.log(response);
    }

    const handleButton = () => {
        setIsLoading(true)
        setTimeout(()=>{
            handleBuy();
            setIsLoading(false)
        },300)
    }


    return (
        <Box className="user-cart-container">
            <h1 className="user-section-title">MI CARRITO</h1>
            <ul className="user-cart-items-container">
                {addCart.map((item,index)=>(
                    <Box
                        className="user-item-shopCart"
                        key={item.id}
                        bg={theme.secondaryBackground}
                    >
                        <Box className="user-image-item">
                            <img src={Pruv} width="100%" alt="PRODUCTO CARRITO"/>
                        </Box>
                        <Box className="user-text-item">
                            <Box className="user-text-body">
                                <strong>{item.name}</strong>
                                <Box className="user-count-item">
                                    <Box className="delete-button-cart">
                                        <button onClick={()=>delToCart(index)}>
                                            Quitar
                                        </button>
                                    </Box>
                                    <p>Cantidad</p>
                                    <Box display='flex' gap='1rem'>
                                        <button onClick={()=>minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                                            <span>{item.count}</span>
                                        <button onClick={()=>plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="user-price-item">$ {parseFloat(item.price*item.count).toFixed(2)}</Box>
                        </Box>
                    </Box>
                ))}
                <Box className="user-total-cart-container">   
                <Box
                    className="user-total-cart-rows"
                    color={theme.color}
                >
                    <Box className="user-total-cart-row1">
                        <p>SUBTOTAL</p>
                        <p>$ {totalPrice}</p>
                    </Box>
                    <Box className="user-total-cart-row1">
                        <p>DESCUENTO</p>
                        <p>$ 0.00</p>
                    </Box>
                    <Box className="user-total-cart-row1">
                        <h2>TOTAL</h2>
                        <h2><strong color={theme.accentColor}>$ {totalPrice}</strong></h2>
                    </Box>
                </Box>
                <Button color={theme.backgroundColor} isLoading={isLoading} onClick={handleButton} bgColor={theme.accentColor}>
                    HACER PEDIDO
                </Button>
            </Box>
            </ul>
        </Box>
    )
}

export default UserMiCarrito;
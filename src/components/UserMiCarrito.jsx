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
                {addCart.map((item,index)=>{
                    return(
                        <li className="user-item-shopCart" key={item.id}>
                            <div className="user-image-item">
                                <img src={Pruv} width="100%" alt="PRODUCTO CARRITO"/>
                            </div>
                            <div className="user-text-item">
                                <div className="user-text-body">
                                    <strong>{item.name}</strong>
                                    <div className="user-count-item">
                                        <div className="user-delete-button">
                                            <button onClick={()=>delToCart(index)}>
                                                Quitar
                                            </button>
                                        </div>
                                        <p>Cantidad</p>
                                        <div>
                                            <button onClick={()=>minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                                                <span>{item.count}</span>
                                            <button onClick={()=>plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-price-item">$ {parseFloat(item.price*item.count).toFixed(2)}</div>
                            </div>
                        </li>
                    )
                })}
                <div className="user-total-cart-container">   
                <Box
                    className="user-total-cart-rows"
                    color={theme.color}
                >
                    <div className="user-total-cart-row1">
                        <p>SUBTOTAL</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <div className="user-total-cart-row1">
                        <p>DESCUENTO</p>
                        <p>$ 0.00</p>
                    </div>
                    <div className="user-total-cart-row1">
                        <h2>TOTAL</h2>
                        <h2><strong color={theme.accentColor}>$ {totalPrice}</strong></h2>
                    </div>
                </Box>
                <Button isLoading={isLoading} onClick={handleButton} bgColor={theme.accentColor}>
                    HACER PEDIDO
                </Button>
            </div>
            </ul>
        </Box>
    )
}

export default UserMiCarrito;
import { useId, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"
import { Box, Button } from "@chakra-ui/react"
import Axios from "../utils/axiosConfig"

export const ShopCart = (props) => {

    const [isLoading,setIsLoading] = useState(false)
    const {addCart,setAddCart, delToCart, plusCart, minusCart, totalPrice, buyCart } = useCart()
    const numCart = addCart.length
    const CartId = useId()

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
        <div className="cart-container">
            <label htmlFor={CartId} className="cart-button">
                <i className="fa-solid fa-cart-shopping"></i>
                {numCart>0?<div>{numCart}</div>:<></>}
            </label>
            <input id={CartId} type="checkbox" checked={props.isCheked} onChange={(e)=>props.setChecked(e.target.checked)} hidden />

            <div className="shop-cart">
                <div className="title-cart">
                    <h1>Carrito</h1>
                    <button onClick={()=>props.setChecked(false)}><i class="fa-solid fa-right-long"></i></button>
                </div>
                
                <div className="body-cart">
                    <ul>
                    {numCart>0 ? (
                        <>
                        {addCart.map((item,index)=>(
                            <li className="item-shopCart" key={item.id}>
                                <div className="item-cart">
                                    <div className="image-item-cart">
                                        <img src={Pruv} width="100%" alt="PRODUCTO CARRITO"/>
                                    </div>
                                    <div className="text-item-cart">
                                        <div className="text-body-cart">
                                            <strong>{item.name}</strong>
                                            <div className="count-item-cart">
                                                <div className="delete-button-cart">
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
                                        <div className="price-item-total">$ {parseFloat(item.price*item.count).toFixed(2)}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        </>
                        ) : <h2>Aún no hay artículos agregados</h2>}
                        
                    </ul>
                        <div className="footer-cart">   
                            <Box className="footer-cart-column">
                                <div className="footer-cart-row">
                                    <p>SUBTOTAL</p>
                                    <p>$ {totalPrice}</p>
                                </div>
                                <div className="footer-cart-row">
                                    <p>DESCUENTO</p>
                                    <p>$ 0.00</p>
                                </div>
                                <div className="footer-cart-row-total">
                                    <h1>TOTAL</h1>
                                    <h1 className="footer-cart-price">$ {totalPrice}</h1>
                                </div>
                            </Box>
                            <Button isLoading={isLoading} className="send-cart" onClick={()=>handleButton()}>FINALIZAR COMPRA</Button>
                        </div>
                </div>
            </div>
        </div>
    )
}
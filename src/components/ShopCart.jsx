import { useEffect, useId, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"
import { Box } from "@chakra-ui/react"

export const ShopCart = (props) => {
    const {addCart, delToCart, plusCart, minusCart} = useCart()
    const numCart = addCart.length
    const CartId = useId()
    const [totalPrice, setTotalPrice] = useState("")

    const closeCart = () => {
        props.setChecked(false)
    }

    useEffect(()=>{
        var totalCart = 0;
        for (let i = 0; i < addCart.length; i++) {
            totalCart += parseFloat(addCart[i].price_prod)*addCart[i].count;
        }
        const total = parseFloat(totalCart).toFixed(2)
        setTotalPrice(total)
    
    },[addCart])

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
                    <button onClick={closeCart}><i class="fa-solid fa-right-long"></i></button>
                </div>
                
                <div className="body-cart">
                    <ul>
                    {numCart>0 ? (
                        <>
                        {addCart.map((item,index)=>(
                            <li className="item-shopCart" key={item.id_prod}>
                                <div className="delete-button">
                                    
                                </div>
                                <div className="item-cart">
                                    <div className="image-item-cart">
                                        <img src={Pruv} width="100%" alt="PRODUCTO CARRITO"/>
                                    </div>
                                    <div className="text-item-cart">
                                        <div className="text-body-cart">
                                            <strong>{item.name_prod}</strong>
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
                                        <div className="price-item-total">$ {parseFloat(item.price_prod*item.count).toFixed(2)}</div>
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
                            <button className="send-cart">FINALIZAR COMPRA</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
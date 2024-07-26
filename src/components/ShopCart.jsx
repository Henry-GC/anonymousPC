import { useEffect, useId, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"

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
                        {addCart.map((item,index)=>(
                            <li
                                className="item-shopCart"
                                key={item.id_prod}
                            >
                                <div className="delete-button">
                                    <button onClick={()=>delToCart(index)}>
                                        <i className="fa-regular fa-circle-xmark"></i>
                                    </button>
                                </div>
                                <div className="item-cart">
                                    <div className="image-item-cart">
                                        <img src={Pruv} width="100%" alt="PRODUCTO CARRITO"/>
                                    </div>
                                    <div className="body-item-cart">
                                        <div className="text-item-cart">
                                            <strong>{item.name_prod}</strong>
                                            <div className="text-price">
                                                <div className="price-item">$ {item.price_prod}</div>
                                                <div> - </div>
                                                <div className="price-item-total">$ {parseFloat(item.price_prod*item.count).toFixed(2)}</div>
                                            </div>
                                        </div>
                                        <div className="count-item-cart">
                                            <button onClick={()=>plusCart(index)}><i className="fa-solid fa-plus"></i></button>
                                            <span>{item.count}</span>
                                            <button onClick={()=>minusCart(index)}><i className="fa-solid fa-minus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {numCart>0 ? (
                        <div className="footer-cart">   
                            <div className="price-cart">
                                PRECIO TOTAL:
                                <div> $ {totalPrice}</div>
                            </div>
                            <button className="send-cart">Finalizar compra</button>
                        </div>
                        ) : <h2>Aún no hay artículos agregados</h2>}
                    
                </div>

            </div>


        </div>
    )
}
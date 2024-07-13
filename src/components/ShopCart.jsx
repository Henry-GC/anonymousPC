import { useId, useState } from "react"
import "./Assets/Styles/ShopCart.css"
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart"

export const ShopCart = () => {
    const {addCart, delToCart} = useCart()
    const numCart = addCart.length
    const CartId = useId()
    const [isCheked,setChecked] = useState(false)

    const closeCart = () => {
        setChecked(false)
    }

    return (
        <div className="cart-container">
            <label htmlFor={CartId} className="cart-button">
                <i className="fa-solid fa-cart-shopping"></i>
                <div>{numCart}</div>
            </label>
            <input id={CartId} type="checkbox" checked={isCheked} onChange={(e)=>setChecked(e.target.checked)} hidden />

            <div className="shop-cart">
                <div className="title-cart">
                    <h1>CARRITO</h1>
                    <button onClick={closeCart}><i className="fa-regular fa-circle-xmark"></i></button>
                </div>
                
                <div className="body-cart">
                    <ul>
                        {addCart.map((item,index)=>(
                            <li className="item-cart">
                                <div className="image-item-cart">
                                    <img src={Pruv} width="100%" alt="PRODUCTO"/>
                                </div>
                                <div className="body-item-cart">
                                    <strong>{item.name_prod}</strong>
                                    <div className="delete-item-cart">
                                        <button><i className="fa-solid fa-plus"></i></button>
                                        <span>{1}</span>
                                        <button><i className="fa-solid fa-minus"></i></button>
                                        <button onClick={()=>delToCart(index)}><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <button>Comprar</button>
            </div>


        </div>
    )
}
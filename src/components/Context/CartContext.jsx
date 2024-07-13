import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    const [addCart,setAddCart] = useState([])
    return(
        <CartContext.Provider value={{
            addCart,
            setAddCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
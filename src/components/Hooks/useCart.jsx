import { useContext, useEffect } from "react"
import { CartContext } from "../Context/CartContext"

function useCart (){
    const {addCart,setAddCart} = useContext(CartContext)
  
    function addToCart (prod) {
      const elemento = addCart.some(arr => arr.id_prod === prod.id_prod)
      if(!elemento){
        const newCart = [...addCart, prod]
        setAddCart(newCart)
      }
    }

    function delToCart (index) {
        const newCart = [...addCart]
        newCart.splice(index,1)
        setAddCart(newCart)
    }

    useEffect(()=>{
      console.log(addCart);
    },[addCart]);

    return {addCart,addToCart,delToCart};
  }

export default useCart;
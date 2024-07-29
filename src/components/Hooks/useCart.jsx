import { useContext, useEffect , useState } from "react"
import { CartContext } from "../Context/CartContext"

function useCart (){
    const {addCart,setAddCart} = useContext(CartContext)
    const [loading,setLoading] = useState(null)

    function addToCart (prod) {
      const elemento = addCart.some(arr => arr.id_prod === prod.id_prod)
      if(!elemento){
        const newCart = [...addCart, {
          ...prod,
          count : 1
        }]
        setAddCart(newCart)
      }
    }

    function delToCart (index) {
        const newCart = [...addCart]
        newCart.splice(index,1)
        setAddCart(newCart)
    }

    function plusCart (index) {
      const cart = [...addCart]
      cart[index].count = cart[index].count + 1
      setAddCart(cart)
    }

    function minusCart (index) {
      const cart = [...addCart]
      if (cart[index].count > 1){
        cart[index].count = cart[index].count - 1
      }
      setAddCart(cart)
    }

    const handleButtonCart = (producto) =>{
      setLoading(producto.id_prod)
      setTimeout(()=>{
        addToCart(producto)
        setLoading(null)
      },"300")
    }

    useEffect(()=>{
      console.log(addCart);
    },[addCart]);

    return {addCart,addToCart,delToCart,plusCart,minusCart,loading,handleButtonCart};
  }

export default useCart;
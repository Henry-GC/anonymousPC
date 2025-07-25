import { useContext, useEffect , useState } from "react"
import { CartContext } from "../Context/CartContext"

function useCart (){
    const {addCart,setAddCart} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState("")
    const [loading,setLoading] = useState(null)

    function loadCart () {
      const cart = localStorage.getItem('cart')
      if (cart){
        const jsonCart = JSON.parse(cart)
        setAddCart(jsonCart)
      }
      return cart ? JSON.parse(cart) : []
    }

    function saveCart (cart) {
      localStorage.setItem('cart',JSON.stringify(cart))
    }

    function addToCart (prod) {
      const elemento = addCart.some(arr => arr.code === prod.code)
      if(!elemento){
        const newCart = [...addCart, {
          ...prod,
          count : 1
        }]
        setAddCart(newCart)
        saveCart(newCart)
      }
    }

    function delToCart (index) {
        const newCart = [...addCart]
        newCart.splice(index,1)
        setAddCart(newCart)
        saveCart(newCart)
    }

    function plusCart (index) {
      const cart = [...addCart]
      cart[index].count = cart[index].count + 1
      setAddCart(cart)
      saveCart(cart)
    }

    function minusCart (index) {
      const cart = [...addCart]
      if (cart[index].count > 1){
        cart[index].count = cart[index].count - 1
      }
      setAddCart(cart)
      saveCart(cart)
    }

    const handleButtonCart = (producto) =>{
      setLoading(producto.id)
      setTimeout(()=>{
        addToCart(producto)
        setLoading(null)
      },"300")
    }

    useEffect(()=>{
        var totalCart = 0;
        for (let i = 0; i < addCart.length; i++) {
            totalCart += parseFloat(addCart[i].price)*addCart[i].count;
        }
        const total = parseFloat(totalCart).toFixed(2)
        setTotalPrice(total)
    
    },[addCart])

    const buyCart = () => {
      const cartDetails = addCart.map((item)=>{
        return {
          prod_id: item.code,
          count: item.count,
          price: item.price,
          total: item.count*item.price
        }
      })
      return {cartDetails};
    }

    return {addCart,setAddCart,addToCart,delToCart,plusCart,minusCart,loading,handleButtonCart,totalPrice,buyCart};
  }

export default useCart;
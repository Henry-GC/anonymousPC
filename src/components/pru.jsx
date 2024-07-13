import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

function useCart() {
  const { addCart, setAddCart } = useContext(CartContext);

  function addToCart(prod) {
    const exists = addCart.some(item => item.id === prod.id);
    if (!exists) {
      const newCart = [...addCart, prod];
      setAddCart(newCart);
    }
  }

  useEffect(() => {
    console.log(addCart);
  }, [addCart]);

  return { addCart, addToCart };
}

export default useCart;
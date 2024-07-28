import "./Assets/Styles/Main.css"
import { Box , Button } from "@chakra-ui/react";
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart.jsx";
import { useState } from "react";

const Main = (props) => {

  const {addToCart} = useCart();
  const [loading,setLoading] = useState(null)

  const handleButton = (producto) =>{
    setLoading(producto.id_prod)
    addToCart(producto)
    setTimeout(()=>setLoading(""),"1000")
  }

  return ( props.resultado.length > 0 ? 
    ( 
      <Box className="container-main">
        <Box className="container-prod-main"> 
          {props.resultado.map((producto)=>(
            <Box key={producto.id_prod} className="item-prod-main">
              <Box className="item-image-main">
                <img src={Pruv} alt="IMAGEN PRODUCTO" width="100%"/>
              </Box>
              <Box className="item-text">
                <Box className="item-name">{producto.name_prod}</Box>
                <Box className="item-box">
                  <Button isLoading={producto.id_prod == loading ? true : null} onClick={()=>handleButton(producto)}>
                    Comprar <i className="fa-solid fa-cart-shopping"></i>
                  </Button>
                  <p>${parseFloat(producto.price_prod).toFixed(2)}</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="arrow-prod-main">
          {props.bd.length>12?(
            <>
              <button onClick={props.prevPage}>{`<<`}</button>
              <p>{props.currentPage}</p>
              <button onClick={props.nextPage}>{`>>`}</button>
            </>):(<></>)}
          
        </Box>
      </Box>
    ) : (<img src={Pruv} alt="IMAGEN PRODUCTO"/>)
  );
};

export default Main;

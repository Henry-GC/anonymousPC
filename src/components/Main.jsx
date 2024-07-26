import "./Assets/Styles/Main.css"
import { Box } from "@chakra-ui/react";
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart.jsx";

const Main = (props) => {
  
  const {addToCart} = useCart();

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
                  <button onClick={()=>addToCart(producto)}>
                    Comprar <i className="fa-solid fa-cart-shopping"></i>
                  </button>
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

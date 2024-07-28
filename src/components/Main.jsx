import "./Assets/Styles/Main.css"
import { Box , Button } from "@chakra-ui/react";
import Pruv from "./Assets/Image/work.png"
import useCart from "./Hooks/useCart.jsx";

const Main = (props) => {

  const {addCart,loading,handleButtonCart} = useCart();

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
                  {addCart.some((arr)=>arr.id_prod === producto.id_prod)?(<div>Articulo agregado</div>):(
                    <Button isLoading={producto.id_prod === loading ? true : null} onClick={()=>handleButtonCart(producto)}>
                      Comprar <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                  )}
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

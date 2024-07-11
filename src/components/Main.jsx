import "./Assets/Styles/Main.css"
import { Box } from "@chakra-ui/react";
import Pruv from "./Assets/Image/work.png"

const Main = (props) => {

  const prev = `<<`
  const next = `>>`

  const price = props.resultado.map((producto)=>{
    return producto = {
      ...producto,
      price_prod : parseFloat(producto.price_prod).toFixed(2)
    }
  })

  return ( props.resultado.length > 0 ? 
    ( 
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
      >
        <Box className="container-main"> 
          {price.map((producto)=>(
            <Box
              key={producto.id_prod}
              id="item-prod"
            >
              <img
                  src={Pruv}
                  alt="IMAGEN PRODUCTO"
                  id="img-prod"
                  width="200vw"
                  height="200vw"
              />
              <Box className="item-text">
                <Box id="item-name">{producto.name_prod}</Box>
                <Box id="item-box">
                  <button>
                    Comprar
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                  <p>${producto.price_prod}</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          gap="0.5rem"
          color="#aaa"
        >
          <button onClick={props.prevPage}>{prev}</button>
          <p>{props.currentPage}</p>
          <button onClick={props.nextPage}>{next}</button>
        </Box>
      </Box>
    ) : (<img
      src={Pruv}
      alt="IMAGEN PRODUCTO"
      id="img-prod"
  />)
  );
};

export default Main;

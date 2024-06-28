import "./Assets/Styles/Main.css"
import { Box } from "@chakra-ui/react";
import Pruv from "./Assets/Image/pc gamer.jpg"

const Main = (props) => {
  console.log(props.resultado)
  return ( props.resultado.length > 0 ? 
    ( 
      <Box className="container-main"> 
        {props.resultado.map((producto)=>(
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
    ) : (<h1>Data pending...</h1>)
  );
};

export default Main;

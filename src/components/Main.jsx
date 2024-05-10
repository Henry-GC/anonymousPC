import "./Assets/Styles/Main.css"
import { Box } from "@chakra-ui/react";

const Main = (props) => {
  console.log(props.resultado)
  return ( props.resultado.length > 0 ? 
    ( 
      <Box> 
        {props.resultado.map((producto)=>(
          <Box
            key={producto.id_prod}
          >
            <p>{producto.name_prod}</p>
            <p>{producto.price_prod}</p>
          </Box>
        ))}
      </Box>
    ) : (<h1>Data pending...</h1>)
  );
};

export default Main;

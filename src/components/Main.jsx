import "./Assets/Styles/Main.css"
import { Box } from "@chakra-ui/react";

const Main = (props) => {
  console.log(props)
  return ( props.resultado.length > 0 ? 
    ( 
      <Box> 
        {props.resultado.map((producto)=>(
          <Box
            key={producto.id}
          >
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
          </Box>
        ))}
      </Box>
    ) : (<h1>Data pending...</h1>)
  );
};

export default Main;

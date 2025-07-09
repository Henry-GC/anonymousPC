import Main from "../Main"
import "../Assets/Styles/Productos.css"
import { Box } from "@chakra-ui/react";
import Footer from "../Footer";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useProducts } from "../Context/ProductContext";
import useScrollToTop from "../Hooks/useScrollToTop";

function Refurbished() {
  const { theme } = useContext(ThemeContext);
  const { setTypeSort } = useProducts();
  useScrollToTop();

  const handleSort = (e) => {
    setTypeSort(e.target.value);
  }
  
  return (
    <>
    <Box className="container-product">
      <div className="container-product-body">
        <Box className="container-side">
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={{base:'0 0', md:"0 10rem"}}
              // bgColor={'blue'}
              w={{base:'100%', md:'80%'}}
            >
              <Box
                display="flex"
                color={theme.color}
                gap="0.5rem"
                fontSize={{base:'0.8rem', md:"1.3rem"}}
                alignContent="center"
                alignItems="center"
                w={{base:'100%', md:'fit-content'}}
                // bgColor={'red'}
              >
                <strong>Ordenar por: </strong>
                <select className="select-container" onChange={handleSort}>
                  <option value="priceLow">Menor Precio Primero</option>
                  <option value="priceHig">Mayor Precio Primero</option>
                  <option value="asc">A-Z Ascendente</option>
                  <option value="des">Z-A Descendente</option>
                </select>
              </Box>
              <Box
                display="flex"
                gap="1rem"
                color="#fff"
                fontSize="2rem"
              >
                <i className="fa-solid fa-list"></i>
                <i className="fa-solid fa-table-cells"></i>
              </Box>
            </Box>
            <Main />
        </Box>
      </div>
    </Box>
    <Footer/>
    </>
  );
}
export default Refurbished;

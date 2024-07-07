import Searching from "./Searching";
import SideBar from "./SideBar";
import Main from "./Main"
import "./Assets/Styles/Productos.css"
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Axios from "../utils/axiosConfig"
import FormLogin from "./FormLogin";

function Productos() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("productos")

  const fetchProductos = async () => {
    try {
      const response = await Axios.get(`/api/${filter}`);
      setItems(response.data);
    } catch (error) {
      console.error(`Error fetching ${filter}`, error);
    }
  };

  useEffect(()=>{
    fetchProductos();
  },[filter]);

  const searchItem = [];
  
  return (
    <Box className="container-product">
      <Searching onSearch={searchItem} />
      <div className="container-product-body">
        <Box className="container-side">
            <SideBar buscar={setFilter}/>
            <Box className="container-login-prod">
                <h1>Ingresar</h1>
                <FormLogin
                  classForm="form-login-productos"
                  classControl="form-control"
                  classLabel="form-label"
                  classInput="form-input"
                  classError="form-error"
                  classButton="button-login"
                />
            </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Box
                display="flex"
              >
                <p>Ordenar por: </p>
                <select>
                  <option>Menor Precio Primero</option>
                  <option>Mayor Precio Primero</option>
                  <option>A-Z Ascendente</option>
                  <option>Z-A Descendente</option>
                </select>
              </Box>
              <Box
                display="flex"
                gap="1rem"
                color="#fff"
                fontSize="2rem"
              >
                <i class="fa-solid fa-list"></i>
                <i class="fa-solid fa-table-cells"></i>
              </Box>
            </Box>
            <Main
              resultado={items}
              prevPage=""
              nextPage=""
              currentPage="0"
            />
        </Box>
      </div>
    </Box>
    
  );
}
export default Productos;

import Searching from "./Searching";
import SideBar from "./SideBar";
import Main from "./Main"
import "./Assets/Styles/Productos.css"
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Axios from "../utils/axiosConfig"

function Productos() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("productos")

  const fetchProductos = async () => {
    try {
      console.log(filter)
      const response = await Axios.get(`/api/${filter}`);
      console.log(response.data);
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
        <SideBar buscar={setFilter}/>
        <Main resultado={items}/>
      </div>
    </Box>
    
  );
}
export default Productos;

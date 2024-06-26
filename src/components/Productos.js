import Searching from "./Searching";
import SideBar from "./SideBar";
import Main from "./Main"
import "./Assets/Styles/Productos.css"
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

function Productos() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/productos')
    .then((response)=>response.json())
    .then((data)=>setItems(data))
    .catch((error)=>console.log(error));
  },[])

  const searchItem = [];
  
  return (
    <Box className="container-product">
      <Searching onSearch={searchItem} />
      <div className="container-product-body">
        <SideBar/>
        <Main resultado={items}/>
      </div>
    </Box>
    
  );
}
export default Productos;

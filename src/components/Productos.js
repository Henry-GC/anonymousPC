import Searching from "./Searching";
import SideBar from "./SideBar";
import Main from "./Main"
import Footer from "./Footer";
import "./Assets/Styles/Productos.css"
import { useEffect, useState } from "react";

function Productos() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/base')
    .then((response)=>response.json())
    .then((data)=>setItems(data))
    .catch((error)=>console.log(error));
  },[])

  const searchItem = [];
  
  return (
    <div className="container-product">
      <Searching onSearch={searchItem} />
      <div className="container-product-body">
        <SideBar/>
        <Main resultado={items}/>
      </div>
    </div>
    
  );
}
export default Productos;

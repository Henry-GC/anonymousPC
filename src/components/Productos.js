import Searching from "./Searching";
import SideBar from "./SideBar";
import Main from "./Main"
import "./Assets/Styles/Productos.css"
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Axios from "../utils/axiosConfig"
import FormLogin from "./FormLogin";

function Productos() {

  const [bd, setBD] = useState([])
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("productos")
  const [page, setPage] = useState(1)
  const [typeSort, setTypeSort] = useState("priceLow")

  const fetchProductos = async () => {
    try {
      const response = await Axios.get(`/api/${filter}`)
      response.data.sort((a, b) => a.price_prod - b.price_prod)
      setBD(response.data)
    } catch (error) {
      console.error(`Error fetching ${filter}`, error);
    }
  };

  useEffect(()=>{
    fetchProductos()
  },[filter]);

  useEffect(()=>{
    const newBD = [...bd]
    newBD.sort((a,b)=>{
      switch (typeSort){
        case "priceLow":
          return a.price_prod - b.price_prod;
        case "priceHig":
          return b.price_prod - a.price_prod;
        case "asc":
          return a.name_prod.localeCompare(b.name_prod);
        case "des":
          return b.name_prod.localeCompare(a.name_prod);
        default:
          return 0;
      }
    })

    const prods = newBD.slice((page-1)*12,page*12)
    setItems(prods);


  },[bd,page,typeSort])

  const searchItem = [];

  const handleSort = (e) => {
    setTypeSort(e.target.value);
  }

  const nextPage = () =>{
    if (page*12<bd.length){
      setPage(page+1);
    }
  }

  const prevPage = () =>{
    if (page === 1){
      return;
    } else {
      const newPage = page - 1;
      setPage(newPage)
    }
  }
  
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
              alignItems="center"
            >
              <Box
                display="flex"
                color="#fff"
                gap="0.5rem"
                fontSize="1.3rem"
                alignContent="center"
                alignItems="center"
              >
                <strong>Ordenar por: </strong>
                <select className="select-container" onChange={handleSort}>
                  <option value="priceLow"><p>Menor Precio Primero</p></option>
                  <option value="priceHig"><p>Mayor Precio Primero</p></option>
                  <option value="asc"><p>A-Z Ascendente</p></option>
                  <option value="des"><p>Z-A Descendente</p></option>
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
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={page}
            />
        </Box>
      </div>
    </Box>
    
  );
}
export default Productos;

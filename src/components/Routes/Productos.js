import Main from "../Main"
import "../Assets/Styles/Productos.css"
import { Box } from "@chakra-ui/react";
import useFetch from "../Hooks/useFetch";

function Productos() {

  const {items,setPage,setTypeSort,bd,page} = useFetch()

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
              padding="0 10rem"
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
            <Main
              resultado={items}
              prevPage={prevPage}
              nextPage={nextPage}
              currentPage={page}
              bd={bd}
            />
        </Box>
      </div>
    </Box>
    
  );
}
export default Productos;

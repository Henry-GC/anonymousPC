import { createContext, useContext, useState, useEffect } from "react";
import Axios from "../../utils/axiosConfig";
import { useLocation } from "react-router-dom";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts debe ser usado dentro de un ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  // Estados para productos
  const [relevantProducts, setRelevantProducts] = useState([]); // Productos destacados
  const [builds, setBuilds] = useState([]); // Ensambles destacados
  const [allProducts, setAllProducts] = useState([]); // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados
  const [paginatedProducts, setPaginatedProducts] = useState([]); // Productos paginados
  
  // Estados para filtros y paginación
  const [filter, setFilter] = useState("destacado");
  const [page, setPage] = useState(1);
  const [typeSort, setTypeSort] = useState("priceLow");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const location = useLocation();

  // Función para obtener productos destacados
  const fetchRelevantProducts = async () => {
    try {
      setLoading(true);
      const response = await Axios.get("/api/products");
      const data = response.data.filter(prod => prod.relevant === true && prod.category_id !== 9);
      data.sort((a, b) => a.price - b.price);
      setRelevantProducts(data);
    } catch (error) {
      console.error("Error fetching relevant products:", error);
      setError("Error al cargar productos destacados");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener ensambles destacados
  const fetchBuilds = async () => {
    try {
      setLoading(true);
      const response = await Axios.get("/api/gamerBuilds");
      setBuilds(response.data);
    } catch (error) {
      console.error("Error fetching builds:", error);
      setError("Error al cargar ensambles");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener todos los productos
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await Axios.get("/api/products");
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching all products:", error);
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  // Función para filtrar productos
  const filterProducts = () => {
    let filtered = [];
    
    if (filter === "destacado") {
      // Mostrar todos los productos cuando no hay filtro específico
      filtered = [...allProducts];
    } else {
      filtered = allProducts.filter(producto => producto.category_id === filter);
    }
    
    // Ordenar productos
    filtered.sort((a, b) => {
      switch (typeSort) {
        case "priceLow":
          return a.price - b.price;
        case "priceHig":
          return b.price - a.price;
        case "asc":
          return a.name.localeCompare(b.name);
        case "des":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    
    setFilteredProducts(filtered);
    setPage(1); // Resetear a la primera página cuando cambia el filtro
  };

  // Función para paginar productos
  const paginateProducts = () => {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    const paginated = filteredProducts.slice(startIndex, endIndex);
    setPaginatedProducts(paginated);
  };

  // Función para cambiar página
  const nextPage = () => {
    if (page * 12 < filteredProducts.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Función para cambiar ordenamiento
  const handleSort = (sortType) => {
    setTypeSort(sortType);
  };

  // Función para cambiar filtro
  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  // Efecto para cargar datos iniciales
  useEffect(() => {
    fetchRelevantProducts();
    fetchBuilds();
    fetchAllProducts();
  }, []);

  // Efecto para actualizar filtro basado en la ruta
  useEffect(() => {
    switch (location.pathname) {
      case "/productos/procesador":
        setFilter(1);
        break;
      case "/productos/placa-madre":
        setFilter(3);
        break;
      case "/productos/tarjeta-grafica":
        setFilter(2);
        break;
      case "/productos/memoria-ram":
        setFilter(4);
        break;
      case "/productos/almacenamiento":
        setFilter(5);
        break;
      case "/productos/fuente-de-poder":
        setFilter(6);
        break;
      case "/productos/carcasa":
        setFilter(7);
        break;
      case "/productos/accesorios":
        setFilter(8);
        break;
      case "/laptops":
        setFilter(9);
        break;
      case "/refurbished":
        setFilter(10);
        break;
      default:
        setFilter("destacado");
    }
  }, [location.pathname]);

  // Efecto para filtrar productos cuando cambia el filtro o todos los productos
  useEffect(() => {
    if (allProducts.length > 0) {
      filterProducts();
    }
  }, [filter, allProducts, typeSort]);

  // Efecto para paginar productos cuando cambian los productos filtrados o la página
  useEffect(() => {
    paginateProducts();
  }, [filteredProducts, page]);

  const value = {
    // Estados
    relevantProducts,
    builds,
    allProducts,
    filteredProducts,
    paginatedProducts,
    filter,
    page,
    typeSort,
    loading,
    error,
    
    // Funciones
    setFilter: handleFilter,
    setPage,
    setTypeSort: handleSort,
    nextPage,
    prevPage,
    refreshProducts: fetchAllProducts,
    refreshRelevantProducts: fetchRelevantProducts,
    refreshBuilds: fetchBuilds,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}; 
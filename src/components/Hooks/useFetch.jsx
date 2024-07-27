import { useState, useEffect } from "react";
import Axios from "../../utils/axiosConfig"
import { useLocation } from "react-router-dom";

export default function useFetch (){

    const [relevantProducts,setRelevantProducts] = useState([]) //ESTADO PRODUCTOS DESTACADOS
    const [builds,setBuilds] = useState([]) //ESTADO EMSABLES DESTACADOS
    const [bd, setBD] = useState([]); // ESTADO PRODUCTOS FILTRADOS
    const [items, setItems] = useState([]); // ESTADO PRODUCTOS PAGINADOS
    const [filter, setFilter] = useState("destacado");
    const [page, setPage] = useState(1);
    const [typeSort, setTypeSort] = useState("priceLow");
    const location = useLocation();

    // REQUEST PRODUCTOS DESTACADOS
    const fetchRelevants = async() => {
        const response = await Axios.get("/api/productos")
        const data = response.data.filter(prod => prod.destacado === 1 && prod.type_prod !== "BUILD")
        setRelevantProducts(data)
    }

    useEffect(()=>{
        fetchRelevants();
    },[])

    // REQUEST ENSAMBLES DESTACADOS
    const fetchingBuilds = async () =>{
        const response = await Axios.get("/api/gamerBuilds")
        const data = response.data
        setBuilds(data)
    }

    useEffect(()=>{
        fetchingBuilds()
    },[])

    // CAMBIAR ESTADO DEL FILTRO
    useEffect(()=>{
        switch (location.pathname) {
            case "/productos/procesador":
                setFilter("CPU");
                break;
            case "/productos/placa-madre":
                setFilter("MBO");
                break;
            case "/productos/tarjeta-grafica":
                setFilter("GPU");
                break;
            case "/productos/memoria-ram":
                setFilter("RAM");
                break;
            case "/productos/almacenamiento":
                setFilter("SSD");
                break;
            case "/productos/fuente-de-poder":
                setFilter("PSU");
                break;
            case "/productos/carcasa":
                setFilter("CASE");
                break;
            case "/productos/accesorios":
                setFilter("ACC");
                break;
            default:
                setFilter("destacado");
        }
    },[location.pathname])

    const fetchProductos = async () => {
        try {
        const response = await Axios.get(`/api/productos`)
        const filterBD = response.data.filter(producto=>{
            if(filter === "destacado"){
            return(
                producto.destacado === 1 
            )
            } else {
            return(
                producto.type_prod === filter
            )
            } 
        })
        response.data.sort((a, b) => a.price_prod - b.price_prod)
        setBD(filterBD)
        setPage(1)
        } catch (error) {
        console.error(`Error fetching`, error);
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

    return{items,bd,setFilter,page,setPage,setTypeSort,builds,relevantProducts}
}
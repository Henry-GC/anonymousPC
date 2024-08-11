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
        const data = response.data.filter(prod => prod.relevant === true && prod.category_id !== 8)
        data.sort((a, b) => a.price - b.price)
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
                setFilter(9);
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
                producto.relevant === true 
            )
            } else {
            return(
                producto.category_id === filter
            )
            } 
        })
        filterBD.sort((a, b) => a.price - b.price)
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
        })

        const prods = newBD.slice((page-1)*12,page*12)
        setItems(prods);


    },[bd,page,typeSort])

    return{items,bd,setFilter,page,setPage,setTypeSort,builds,relevantProducts}
}
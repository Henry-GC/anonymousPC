import "./Assets/Styles/SideBar.css"
import React from "react"
import { useNavigate } from "react-router-dom";

const SideBar = () =>{

    const navigate = useNavigate();

    const handleNavigate = (type) =>{
        navigate(type,{ replace:true });
    }

    return (
        <ul className="Side-Bar">
            <button onClick={()=>{handleNavigate("productos/procesador")}}>
                <div>PROCESADORES</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/placa-madre")}}>
                <div>PLACA MADRE</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/tarjeta-grafica")}}>
                <div>TARJETA GRÁFICA</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/memoria-ram")}}>
                <div>MEMORIA RAM</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/almacenamiento")}}>
                <div>ALMACENAMIENTO</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/fuente-de-poder")}}>
                <div>FUENTES DE PODER</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/carcasa")}}>
                <div>CARCASA</div>
            </button>
            <button onClick={()=>{handleNavigate("productos/accesorios")}}>
                <div>ACCESORIOS</div>
            </button>
        </ul>
    )
}
export default SideBar;
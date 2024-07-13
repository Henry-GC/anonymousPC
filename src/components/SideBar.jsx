// import { useState } from "react"
import "./Assets/Styles/SideBar.css"

const SideBar = (props) =>{

    const handleClick = (tipo) =>{
        props.buscar(tipo);
    };

    return (
        <ul className="Side-Bar">
            <button onClick={()=>handleClick("destacado")}>
                <div>Destacados</div>
            </button>
            <button onClick={()=>handleClick("CPU")}>
                <div>Procesador</div>
            </button>
            <button onClick={()=>handleClick("MBO")}>
                <div>Placa Madre</div>
            </button>
            <button onClick={()=>handleClick("GPU")}>
                <div>Tarjeta de Video</div>
            </button>
            <button onClick={()=>handleClick("RAM")}>
                <div>Memoria Ram</div>
            </button>
            <button onClick={()=>handleClick("STG")}>
                <div>Almacenamiento</div>
            </button>
            <button onClick={()=>handleClick("PSU")}>
                <div>Fuente de Poder</div>
            </button>
            <button onClick={()=>handleClick("CASE")}>
                <div>Carcasa</div>
            </button>
            <button onClick={()=>handleClick("ACC")}>
                <div>Accesorios</div>
            </button>
        </ul>
    )
}
export default SideBar
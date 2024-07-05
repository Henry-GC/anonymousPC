// import { useState } from "react"
import "./Assets/Styles/SideBar.css"

const SideBar = (props) =>{

    // const [filter, setFilter] = useState ("")

    const handleClick = (tipo) =>{
        props.buscar(tipo);
    };

    return (
        <ul className="Side-Bar">
            <button onClick={()=>handleClick("productos")}>
                <div>Todo</div>
            </button>
            <button onClick={()=>handleClick("procesadores")}>
                <div>Procesador</div>
            </button>
            <button onClick={()=>handleClick("mobo")}>
                <div>Placa Madre</div>
            </button>
            <button onClick={()=>handleClick("gpu")}>
                <div>Tarjeta de Video</div>
            </button>
            <button onClick={()=>handleClick("ram")}>
                <div>Memoria Ram</div>
            </button>
            <button onClick={()=>handleClick("almacenamiento")}>
                <div>Almacenamiento</div>
            </button>
            <button onClick={()=>handleClick("fuentes")}>
                <div>Fuente de Poder</div>
            </button>
            <button onClick={()=>handleClick("case")}>
                <div>Carcasa</div>
            </button>
            <button onClick={()=>handleClick("acc")}>
                <div>Accesorios</div>
            </button>
        </ul>
    )
}
export default SideBar
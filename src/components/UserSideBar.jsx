import { Box } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import "./Assets/Styles/UserSideBar.css"

function UserSideBar (){

    const handleButton = () =>{
        localStorage.removeItem('token')
        return <Navigate to="/login" replace/>
    }
    return(
        <Box className="userSideBar-container">
            <Link id="userSideBar-link" to="/usuario/">DASHBOARD</Link>
            <Link id="userSideBar-link" to="/usuario/micarrito" >MI CARRITO</Link>
            <Link id="userSideBar-link" to="/usuario/mispedidos" >MIS PEDIDOS</Link>
            <Link id="userSideBar-link" to="/usuario/misdeseos" >LISTA DE DESEOS</Link>
            <Link id="userSideBar-link" to="/usuario/direcciones" >DIRECCIONES</Link>
            {/* <Link id="userSideBar-link" >MÉTODOS DE PAGO</Link> */}
            <Link id="userSideBar-link" to="/usuario/perfil">PERFIL</Link>
            <Link id="userSideBar-link" to="/usuario/ayuda">CENTRO DE AYUDA</Link>
            <Link id="userSideBar-link" to="/login" onClick={handleButton}>CERRAR SESIÓN</Link>
        </Box>
    )
}

export default UserSideBar;
import { Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "../Assets/Styles/Usuario.css"

function Usuario (){
    const navigate = useNavigate()
    const handleButton = () =>{
        localStorage.removeItem('token')
        navigate("/",{replace:true})
    }
    return (
        <Box className="user-main-container">
            DASHBOARD
            <button onClick={handleButton}>CERRAR SESION</button>
        </Box>
    )
}

export default Usuario;
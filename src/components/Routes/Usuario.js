import { Box } from "@chakra-ui/react"
import { Route, Routes} from "react-router-dom"
import "../Assets/Styles/Usuario.css"
import UserSideBar from "../UserSideBar"
import UserDashboard from "../UserDashboard"
import UserMiCarrito from "../UserMiCarrito"

function Usuario (){
    
    return (
        <Box className="user-main-container">
            <div className="user-main-container-col1">
                <UserSideBar/>
            </div>
            <div className="user-main-container-col2">
                <Routes>
                    <Route path="/" element={<UserDashboard/>}/>
                    <Route path="/micarrito" element={<UserMiCarrito/>}/>
                </Routes>
            </div>
        </Box>
    )
}

export default Usuario;
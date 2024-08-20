import { Box } from "@chakra-ui/react"
import { Route, Routes} from "react-router-dom"
import "../Assets/Styles/Usuario.css"
import UserSideBar from "../UserSideBar"
import UserDashboard from "../UserDashboard"
import UserMiCarrito from "../UserMiCarrito"
import UserPedidos from "../UserPedidos"
import UserWish from "../UserWish"
import UserHelpCenter from "../UserHelpCenter"
import UserProfile from "../UserProfile"
import useDataUser from "../Hooks/useDataUser"
import UserAddresses from "../UserAddresses"

function Usuario (){

    const {user, cancelOrder} = useDataUser();
    
    return (
        <Box className="user-main-container">
            <div className="user-main-container-col1">
                <UserSideBar/>
            </div>
            <div className="user-main-container-col2">
                <Routes>
                    <Route path="/" element={<UserDashboard user={user}/>}/>
                    <Route path="/micarrito" element={<UserMiCarrito/>}/>
                    <Route path="/mispedidos" element={<UserPedidos user={user} cancelOrder={cancelOrder}/>}/>
                    <Route path="/misdeseos" element={<UserWish user={user}/>}/>
                    <Route path="/ayuda" element={<UserHelpCenter/>}/>
                    <Route path="/perfil" element={<UserProfile user={user}/>}/>
                    <Route path="/direcciones" element={<UserAddresses user={user}/>}/>
                </Routes>
            </div>
        </Box>
    )
}

export default Usuario;
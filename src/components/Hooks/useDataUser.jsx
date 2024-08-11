import { useState , useEffect, useContext } from "react"
import Axios from "../../utils/axiosConfig"
import { FavoriteContext } from "../Context/FavoriteContext";

function useDataUser () {
    const [user,setUser] = useState([])
    const { setFavorite } = useContext(FavoriteContext);

    const fetchDashboard = async() => {
        try {
            const response = await Axios.get('/api/user')
            const userData = response.data.user
            setUser(userData)
            if (userData && userData.wishlist) {
                setFavorite(userData.wishlist);
            }
        } catch (error) {
            console.error("Error fetching data user: ",error)
        }
     }
    
    const cancelOrder = async(order_id) => {
        await Axios.post('/api/user/cancel-orders',{"order_id":order_id})
        fetchDashboard();
    }
  
    useEffect(()=>{
        fetchDashboard();
    },[])

    return {user, cancelOrder}
}

export default useDataUser;
import { useEffect, useState } from "react";
import Axios from "../../utils/axiosConfig"

function useWishList () {
    const [wishlist,setWishlist] = useState([])
    const fetchWishList = async() => {
        const response = await Axios.get('/api/user/wishlist')
        setWishlist(response.data)
    }
    useEffect(()=>{
        fetchWishList();
    },[])
    return {wishlist}
}

export default useWishList;
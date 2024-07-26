import { useEffect, useState } from "react";

export default function useFetchBuilds () {
    const [builds,setBuilds] = useState([])

    const fetchingBuilds = async () =>{
        await fetch("https://anonymousbackend.onrender.com/api/gamerBuilds")
        .then(response => response.json())
        .then((data)=>{setBuilds(data)})
        .catch((error)=>{console.log("Error:", error);})
    }

    useEffect(()=>{
        fetchingBuilds()
    },[])

    return {builds}
}
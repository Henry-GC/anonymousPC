import { useEffect, useState } from "react";

export default function useFetchBuilds () {
    const [builds,setBuilds] = useState([])

    const fetchingBuilds = async () =>{
        await fetch("http://localhost:5000/api/gamerBuilds")
        .then(response => response.json())
        .then((data)=>{setBuilds(data)})
        .catch((error)=>{console.log("Error:", error);})
    }

    useEffect(()=>{
        fetchingBuilds()
    },[])

    return {builds}
}
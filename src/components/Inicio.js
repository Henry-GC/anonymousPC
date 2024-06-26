import React from "react";
import Productos from "./Productos";
import { Box } from "@chakra-ui/react";


function Inicio(){
    
    return(
        <Box
            display="flex"
            flexDirection="column"
            flexGrow="1"
        >
            <Productos/>
        </Box>
    )
}
export default Inicio
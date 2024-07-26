import { Box } from "@chakra-ui/react";
import React from "react";
import work from "../Assets/Image/work.png"

function Ensambles(){
    return (
        <Box
            display="flex"
            flexGrow="1"
            justifyContent="center"
        >
            <img
                src={work}
                alt="logo"
           />
        </Box>
    )
}
export default Ensambles
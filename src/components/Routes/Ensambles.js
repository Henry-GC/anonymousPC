import { Box } from "@chakra-ui/react";
import React from "react";
import "../Assets/Styles/Ensambles.css"
import useFetch from "../Hooks/useFetch";
import build1 from "../Assets/Image/case 1.png"
import useRender from "../Hooks/useRender";
import Footer from "../Footer";

function Ensambles(){

    const {builds} = useFetch()
    const {renderComponents} = useRender()

    return (
        <>
        <Box className="builds-section-container">
            <Box className="builds-gamer-container">
                {builds.map((build)=>{
                    const isEven = build.id % 2 === 0;
                return(
                    <>
                        {isEven?(
                            <div className="build-gamer-container" key={build.id}>
                                <div className="text-gamer-build-container">
                                    <h1>{build.name}</h1>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(build.price).toFixed(2)}</strong>
                                    <div className="render-components-container">
                                        {renderComponents(build)}
                                    </div>
                                </div>
                                <div className="img-gamer-build-container">
                                    <img src={build1} alt="IMAGEN ENSAMBLE" width="100%"/>
                                </div>
                            </div>
                        ):(
                            <div className="build-gamer-container" key={build.id}>
                                <div className="img-gamer-build-container">
                                    <img src={build1} alt="IMAGEN ENSAMBLE" width="100%"/>
                                </div>
                                <div className="text-gamer-build-container">
                                    <h1>{build.name}</h1>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(build.price).toFixed(2)}</strong>
                                    <div className="render-components-container">
                                        {renderComponents(build)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )})}
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Ensambles
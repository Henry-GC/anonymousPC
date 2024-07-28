import { Box } from "@chakra-ui/react"
import "../Assets/Styles/Nosotros.css"
import useResources from "../Hooks/useResources"

function Nosotros(){
    const {videoAdv,imageAdv} = useResources();
    return (
        <Box className="about-section-container">
            <Box className="about-video-container">
                <video autoPlay muted loop playsInline className="video-about-us">
                    <source src={videoAdv[0].video} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
                <div className="video-overlay">
                    <h1>ANONYMOUS PC</h1>
                    <p>DE GAMERS, PARA GAMERS</p>
                </div>
            </Box>
            <Box className="about-history-container">
                <h2>NUESTRA HISTORIA</h2>
                <p>Anonymous PC nace de la necesidad de tener acceso a productos de primera calidad a un precio justo en la ciudad de Esmeraldas, 
                Anonymous PC nace de la necesidad de tener acceso a productos de primera calidad a un precio justo en la ciudad de Esmeraldas,
                </p>
            </Box>
            <Box className="about-adv-container">
                <div className="pictures-adv-container">
                    <div className="pic-adv-row-1">
                        <div className="pic-adv-col-1">
                            <div className="pic-adv-1">
                                <img src={imageAdv[0].image} alt="FOTO CLIENTES" width="100%"/>
                            </div>
                            <div className="pic-adv-row-2">
                                <div className="pic-adv-2">
                                    <img src={imageAdv[1].image} alt="FOTO CLIENTES" width="100%"/>
                                </div>
                                <div className="pic-adv-3">
                                    <img src={imageAdv[2].image} alt="FOTO CLIENTES" width="100%"/>
                                </div>
                            </div>
                        </div>
                        <div className="pic-adv-4">
                            <img src={imageAdv[3].image} alt="FOTO CLIENTES" width="100%"/>
                        </div>
                    </div>
                    <div className="pic-adv-row-3">
                        <div className="pic-adv-5">
                            <img src={imageAdv[4].image} alt="FOTO CLIENTES" width="100%"/>
                        </div>
                        <div className="pic-adv-6">
                            <img src={imageAdv[5].image} alt="FOTO CLIENTES" width="100%"/>
                        </div>
                        <div className="pic-adv-7">
                            <img src={imageAdv[6].image} alt="FOTO CLIENTES" width="100%"/>
                        </div>
                    </div>
                </div>
                <div className="text-adv-container">
                    <div className="text-adv-title">
                        <p>SOMOS GAMERS</p>
                        <h1>ENTENDEMOS LO QUE BUSCAS</h1>
                    </div>
                    <p>

                    </p>
                </div>
            </Box>
            <Box className="about-brand-container">

            </Box>
        </Box>
    )
}
export default Nosotros
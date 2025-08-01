import { Box } from "@chakra-ui/react"
import "../Assets/Styles/Nosotros.css"
import useResources from "../Hooks/useResources"
import Footer from "../Footer";
import useScrollToTop from "../Hooks/useScrollToTop";

function Nosotros(){
    const {videoAdv,imageAdv,brands} = useResources();
    useScrollToTop();
    return (
        <>
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
                <p>Anonymous PC nace de la necesidad de tener acceso a productos de primera calidad a un precio justo en la ciudad de Esmeraldas. Nuestra misión es proporcionar a los entusiastas de la tecnología y a los gamers equipos de alto rendimiento que satisfagan sus expectativas y necesidades. Con una amplia gama de componentes y sistemas personalizados, nos esforzamos por ofrecer soluciones que no solo sean accesibles, sino también innovadoras y confiables.</p>
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
                        Comprometidos con la satisfacción de nuestros clientes, en Anonymous PC no solo vendemos productos, sino que también brindamos asesoramiento y soporte técnico continuo. Sabemos lo importante que es tener un equipo confiable para tus proyectos.
                    </p>
                </div>
            </Box>
            <Box className="about-brand-container">
                <h1>CONTAMOS CON LAS MEJORES MARCAS DEL MERCADO</h1>
                <div className="about-brand-images">
                    <div className="about-images-row">
                        <div className="about-image-brand">
                            <img src={brands[0].image} alt="Brand 0" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[1].image} alt="Brand 1" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[2].image} alt="Brand 2" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[3].image} alt="Brand 3" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[4].image} alt="Brand 4" width="100%"/>
                        </div>
                    </div>
                    <div className="about-images-row">
                        <div className="about-image-brand">
                            <img src={brands[5].image} alt="Brand 5" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[6].image} alt="Brand 6" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[7].image} alt="Brand 7" width="100%"/>
                        </div>
                        <div className="about-image-brand">
                            <img src={brands[8].image} alt="Brand 8" width="100%"/>
                        </div>
                    </div>
                </div>
                <p>Y MÁS...</p>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Nosotros
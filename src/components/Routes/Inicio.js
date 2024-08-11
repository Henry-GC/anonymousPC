import React from "react";
import { Box , Button } from "@chakra-ui/react";
import "../Assets/Styles/Inicio.css"
import pruv from "../Assets/Image/work.png"
import useResources from "../Hooks/useResources";
import useFetch from "../Hooks/useFetch";
import useCart from "../Hooks/useCart";
import banner from "../Assets/Image/banner 1.png"
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Inicio(){

    const {sections} = useResources()
    const {builds,relevantProducts} = useFetch()
    const {addCart,loading,handleButtonCart} = useCart()
    
    return(
        <>
        <Box className="inicio-container">
            <Box className="landing-container">
                <Box className="banner-container">
                    <img src={banner} alt="BANNER" width="100%"/>
                </Box>
                <Box className="section-container">
                    <ul>
                        {sections.map((section)=>(
                            <li className="section-inside" key={section.section}>
                                <Link to={section.url} className="section-img">
                                    <img alt="IMAGEN CATEGORÍA" src={section.image} width="100%"/>
                                </Link>
                                <div className="section-title">{section.section}</div>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className="adv-container">
                    <Box className="adv-inside">
                        <Box className="big-adv">
                            <img alt="big Adv" src="/multimedia/advBig.jpg" width="110%"/>
                        </Box>
                        <Box className="sb-column">
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv1.jpg" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv2.jpg" width="100%"/>
                                </Box>
                            </Box>
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv3.png" width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src="/multimedia/adv4.png" width="100%"/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="relevant-products-container">
                    <Box className="builds-title">
                        PRODUCTOS DESTACADOS
                        <button>VER TODO</button>
                    </Box>
                    <ul className="relevant-products">
                        {relevantProducts.map((producto)=>(
                            <div key={producto.id} className="relevant-product">
                                <div className="img-product-container">
                                    <img src={pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
                                </div>
                                <div className="text-product-container">
                                    <div className="name-product-container">{producto.name}</div>
                                    <div className="price-product-container">
                                        {addCart.some((arr)=>arr.id === producto.id)?(<div>Articulo agregado</div>):(
                                            <Button isLoading={producto.id === loading ? true : null} onClick={()=>handleButtonCart(producto)}>
                                                Comprar <i className="fa-solid fa-cart-shopping"></i>
                                            </Button>
                                        )}
                                        <p>${parseFloat(producto.price).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </Box>
                <Box className="gamer-container">
                    <Box className="builds-title">
                        EQUIPOS GAMER
                        <button>VER TODO</button>
                    </Box>
                    <ul className="builds-destacados">
                        {builds.map((ensamble)=>(
                            <div key={ensamble.id} className="build-destacado">
                                <div className="img-build-container">
                                    <img src={pruv} alt="IMAGEN DEL ENSAMBLE" width="100%"/>
                                </div>
                                <div className="text-build-container">
                                    <h2>{ensamble.name}</h2>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(ensamble.price).toFixed(2)}</strong>
                                    <div className="details-build-container">
                                            {ensamble.CPU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[0].icon} alt="CPU ICON" width="100%"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.CPU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.MBO?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[1].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Placa Madre</p>
                                                    <strong>{ensamble.MBO}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.GPU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[2].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Tarjeta Gráfica</p>
                                                    <strong>{ensamble.GPU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.RAM?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[3].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Memoria Ram</p>
                                                    <strong>{ensamble.RAM}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.SSD?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[4].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Almacenamiento</p>
                                                    <strong>{ensamble.SSD}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.PSU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[5].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Fuente de Poder</p>
                                                    <strong>{ensamble.PSU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                    </div>
                                </div>
                                {addCart.some((arr)=>arr.id === ensamble.id)?(<div>Articulo agregado</div>):(
                                            <Button isLoading={ensamble.id === loading ? true : null} onClick={()=>handleButtonCart(ensamble)}>
                                                Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                                            </Button>
                                        )}
                            </div>
                        ))}
                    </ul>
                </Box>
                <Box className="work-container">
                    <Box className="builds-title">
                        EQUIPOS DE TRABAJO
                        <button>VER TODO</button>
                    </Box>
                    <ul className="builds-destacados">
                        {builds.map((ensamble)=>(
                            <li key={ensamble.id} className="build-destacado">
                                <div className="img-build-container">
                                    <img src={pruv} alt="IMAGEN DEL ENSAMBLE" width="100%"/>
                                </div>
                                <div className="text-build-container">
                                    <h2>{ensamble.name}</h2>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(ensamble.price).toFixed(2)}</strong>
                                    <div className="details-build-container">
                                            {ensamble.CPU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[0].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.CPU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.MBO?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[1].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.MBO}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.GPU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[2].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.GPU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.RAM?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[3].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.RAM}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.SSD?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[4].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.SSD}</strong>
                                                </div>
                                            </div>):(<></>)}
                                            {ensamble.PSU?(<div className="build-component-container">
                                                <div className="img-build-component">
                                                    <img src={sections[5].icon} alt="CPU ICON"/>
                                                </div>
                                                <div className="component-title">
                                                    <p>Procesador</p>
                                                    <strong>{ensamble.PSU}</strong>
                                                </div>
                                            </div>):(<></>)}
                                    </div>
                                </div>
                                {addCart.some((arr)=>arr.id === ensamble.id)?(<div>Articulo agregado</div>):(
                                    <Button isLoading={ensamble.id === loading ? true : null} onClick={()=>handleButtonCart(ensamble)}>
                                        Añadir al carrito <i className="fa-solid fa-cart-shopping"></i>
                                    </Button>
                                )}
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className="subs-container">

                </Box>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Inicio
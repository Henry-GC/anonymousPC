import React from "react";
import { Box } from "@chakra-ui/react";
import "../Assets/Styles/Inicio.css"
import pruv from "../Assets/Image/work.png"
import useResources from "../Hooks/useResources";
import useFetch from "../Hooks/useFetch";
import useCart from "../Hooks/useCart";
import bigAdv from "../Assets/Image/adv2.jpg"
import boxAdv1 from "../Assets/Image/adv1.jpg"
import boxAdv2 from "../Assets/Image/adv3.jpg"
import boxAdv3 from "../Assets/Image/redragon.png"
import boxAdv4 from "../Assets/Image/adv4.png"
import banner from "../Assets/Image/banner 1.png"

function Inicio(){

    const {sections} = useResources()
    const {builds,relevantProducts} = useFetch()
    const {addToCart} = useCart()
    
    return(
        <Box className="inicio-container">
            <Box className="landing-container">
                <Box className="banner-container">
                    <img src={banner} alt="BANNER" width="100%"/>
                </Box>
                <Box className="section-container">
                    <ul>
                        {sections.map((section)=>(
                            <li className="section-inside" key={section.section}>
                                <div className="section-img">
                                    <img alt="IMAGEN CATEGORÍA" src={section.image} width="100%"/>
                                </div>
                                <div className="section-title">{section.section}</div>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className="adv-container">
                    <Box className="adv-inside">
                        <Box className="big-adv">
                            <img alt="big Adv" src={bigAdv} width="110%"/>
                        </Box>
                        <Box className="sb-column">
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src={boxAdv1} width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src={boxAdv2} width="100%"/>
                                </Box>
                            </Box>
                            <Box className="sb-row">
                                <Box className="small-box">
                                    <img alt="small adv" src={boxAdv3} width="100%"/>
                                </Box>
                                <Box className="small-box">
                                    <img alt="small adv" src={boxAdv4} width="100%"/>
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
                            <div key={producto.id_prod} className="relevant-product">
                                <div className="img-product-container">
                                    <img src={pruv} alt="IMAGEN DEL PRODUCTO" width="100%"/>
                                </div>
                                <div className="text-product-container">
                                    <div>
                                        {producto.name_prod}
                                    </div>
                                    <div className="item-box">
                                        <button onClick={()=>addToCart(producto)}>
                                            Comprar <i className="fa-solid fa-cart-shopping"></i>
                                        </button>
                                        <p>${parseFloat(producto.price_prod).toFixed(2)}</p>
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
                            <div key={ensamble.id_prod} className="build-destacado">
                                <div className="img-build-container">
                                    <img src={pruv} alt="IMAGEN DEL ENSAMBLE" width="100%"/>
                                </div>
                                <div className="text-build-container">
                                    <h2>{ensamble.name_prod}</h2>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(ensamble.price_prod).toFixed(2)}</strong>
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
                                <button onClick={()=>addToCart(ensamble)}>Añadir al carrito</button>
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
                            <li key={ensamble.id_prod} className="build-destacado">
                                <div className="img-build-container">
                                    <img src={pruv} alt="IMAGEN DEL ENSAMBLE" width="100%"/>
                                </div>
                                <div className="text-build-container">
                                    <h2>{ensamble.name_prod}</h2>
                                    <p>A partir de:</p>
                                    <strong>$ {parseFloat(ensamble.price_prod).toFixed(2)}</strong>
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
                                <button onClick={()=>addToCart(ensamble)}>Añadir al carrito</button>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className="brand-container">

                </Box>
                <Box className="subs-container">

                </Box>
            </Box>
        </Box>
    )
}
export default Inicio
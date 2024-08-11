import NavBar from "./NavBar";
import { useState, useRef, useEffect } from "react";
import "./Assets/Styles/Header.css"
import { ShopCart } from "./ShopCart";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar"
import useCart from "./Hooks/useCart";

export default function Header (props){
    const [isCheked,setChecked] = useState(false)
    const [buscar,setBuscar]= useState("")
    const location = useLocation()
    const headerRef = useRef(null);

    const {setAddCart}=useCart()

    const cartSync = () => {
        const cart = localStorage.getItem('cart')
        if (cart && cart !== '[]') {
            const newCart = JSON.parse(cart);
            setAddCart(newCart)
        }
    }

    useEffect(()=>{
        cartSync();
    },[])

    useEffect(() => {
        if (!isCheked){
            let prevScrollPos = window.scrollY; 
      
            const handleScroll = () => { 
            const currentScrollPos = window.scrollY; 
            const headerElement = headerRef.current; 
            if (!headerElement) { 
                return; 
            } 
            if (prevScrollPos > currentScrollPos) { 
                headerElement.style.transform = "translateY(0)";
            } else { 
                headerElement.style.transform = "translateY(-100%)"; 
            } 
            prevScrollPos = currentScrollPos; 
            } 
            window.addEventListener('scroll', handleScroll) 
        
            return () => { 
            window.removeEventListener('scroll', handleScroll) 
            }
        } 
      }, [isCheked]);

    const searchChange = (e) =>{
      setBuscar(e.target.value);
    };
    const searchSubmit = (e) =>{
      e.preventDefault();
      props.onSearch(buscar);
      setBuscar("")
    };

    return(
        <div className="header" ref={headerRef}>
            <div className="header-container">
                <div className="home-container">
                    <div className="logo-container"><Link to="/"><img alt="ISOLOGO" src="/multimedia/isologo.png" width="100%"/></Link></div>
                    <div className="search-container">
                        <form onSubmit={searchSubmit}>
                            <button type='submit'>
                                <i id="lupa" className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input type="text" value={buscar} onChange={searchChange} placeholder='Buscar...'/>
                        </form>
                    </div>
                </div>
                <div className="bar-container">
                    <NavBar/>
                    <ShopCart isCheked={isCheked} setChecked={setChecked}/>
                </div>
            </div>
            {location.pathname.includes("productos")?(<SideBar/>):(<></>)}
        </div>
    )
}
import { useEffect, useRef } from 'react';
import './Assets/Styles/NavBar.css'
import { Link } from "react-router-dom"

function NavBar (){

    const headerRef = useRef(null);

    useEffect(() => { 
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
            headerElement.style.transform = "translateY(-100px)"; 
          } 
          prevScrollPos = currentScrollPos; 
        } 
        window.addEventListener('scroll', handleScroll) 
      
        return () => { 
          window.removeEventListener('scroll', handleScroll) 
        } 
      }, []); 

    return(
        <nav className="navBar-container" ref={headerRef}>
            <ul>
                <li><Link to="/" className='navBar'>Inicio</Link></li>
                <li><Link to="/productos" className='navBar'>Productos</Link></li>
                <li><Link to="/ensambles" className='navBar'>Emsambles</Link></li>
                <li><Link to="/nosotros" className='navBar'>Nosotros</Link></li>
                <li><Link to="/login" className='navBar'>Cuenta</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar

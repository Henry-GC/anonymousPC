import './Assets/Styles/NavBar.css'
import { Link } from "react-router-dom"

function NavBar (){

    return(
        <nav className="navBar-container">
            <ul>
                <li><Link to="/productos" className='navBar'>Productos</Link></li>
                <li><Link to="/ensambles" className='navBar'>Emsambles</Link></li>
                <li><Link to="/nosotros" className='navBar'>Nosotros</Link></li>
                <li><Link to="/usuario" className='navBar'><i class="fa-regular fa-user"></i></Link></li>
            </ul>
        </nav>
    )
}
export default NavBar

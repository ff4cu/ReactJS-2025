import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/UseCartContext"
import { Menu } from "./components/Menu"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext()
    return <div className="navbar">
        <Link to={"/"}><h1 className="logo">LOGO</h1></Link>
        <nav>
            <ul className="navbar-links">
                <li><Link to={"/"}>Home</Link></li>
                <Menu />
                <li><Link to={"/jugadores"}>Jugadores</Link></li>
                <li><Link to={"/carrito"}>Mi Plantilla</Link>
                    {
                        getTotalItems() > 0 && (
                            <span className="total-cart">
                                {getTotalItems()}
                            </span>)
                    }
                </li>
            </ul>
        </nav>
    </div>
}

import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/UseCartContext"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext()
    return <nav>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link>Clubes</Link></li>
            <li><Link>Jugadores</Link></li>
            <li><Link to={"/plantilla"}>Mi Plantilla</Link>
                {
                    getTotalItems() > 0 && (
                    <span className="total-cart">
                        {getTotalItems()}
                    </span>)
                }
            </li>
        </ul>
    </nav>
}